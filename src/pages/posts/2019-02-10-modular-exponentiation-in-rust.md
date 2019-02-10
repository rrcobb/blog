---
layout: post
title: Modular Exponentiation in Rust
description: In which we unpack a math
date: 2019-02-10T14:49:47-05:00
tags: [Rust, Math, Kata]
---

# Rust

I've been trying to learn [Rust](https://www.rust-lang.org/) for a little while here and there, and I've started to pick up some momentum. Lots of nice things about the language - it's got an awesome community, a relatively consolidated set of resources / best practices / documentation / tooling, and the language itself is really friendly for a systems programming language. Compared to how much I had to fight C back in the day (or even Java), Rust is more expressive, safer, easier to use, and just as powerful.

A few things that have helped it start to click for me: 
- [The Rust Book](https://doc.rust-lang.org/book/) is a great starting point
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/) fills in some of the gaps (_why_ do this?) in the book
- [Rustlings](https://github.com/rust-lang/rustlings) drives home some of the fundamentals
- The [Exercism Rust Track](https://exercism.io/tracks/rust) has a ton of neat little practice problems.

This post explores the math and code behind one of those problems - [Diffie Helman](https://exercism.io/tracks/rust/exercises/diffie-hellman) key exchange.

Here's the link on [exercism](https://exercism.io/tracks/rust/exercises/diffie-hellman/solutions/bc02fc0cef374647a6af068e40027068) where I actually did the exercise. You can see the code and any comments there too.

## A teensy bit of background on key exchange

A tiny bit of background on cryptography to set the stage. All the time, we want to have our secrets. But what is a secret? Something that you and I know that no one else knows. In order to share our secrets with computers, we want to hide them from someone who might be snooping. But since all the wires are buried, we can never be sure that they aren't seeing our messages! Cryptography helps us turn those messages into a secret code that no one can decipher...except for us.

Lots of mathmaticians have done lots of work to invent _amazing_ ways of encrypting (and breaking!) secret codes. One of the coolest is called Diffie-Helman key exchange.

Here's how it goes.

You and I need a way to share secret messages. What we'll do is share a _key_ that we'll use to encode our messages - if we both know the key, and no one else does, we can be pretty certain that only we can decode the messages. But if we can't meet in secret to decide on the key, how will we get started? That's where Diffie-Helman comes in. It uses some of the interesting properties of numbers to make it really hard for someone listening in on our messages to get ahold of our key - even if they can read our messages. I start by choosing two big prime numbers. I also choose a secret number. From the primes and my secret number, I make a new number - one I can share - and I send three pieces to you: the two primes and this new, shareable number. You also choose a secret number, and using your secret number and the primes, you make your own shareable number and send it back to me. Now each of us have the other's shareable number, and by using our secret and the shared number, we can make a key that only we know.

Here's the [wiki entry](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange#Public_key) and a [plain english explanation](https://security.stackexchange.com/questions/45963/diffie-hellman-key-exchange-in-plain-english). It might take a couple of reads (or solving the puzzle yourself in code) to feel comfortable with it.

## Modular exponentiation

In that description, the process for choosing secrets and making a key from each other's numbers and the primes was pretty vague. The security of the system depends on something called _modular exponentiation_. The _modulo_ operator `%` is a fancy name for the _remainder_. For example, since `21 / 5` is `4 with 1 remaining`, `21 % 5` is `1`.

Some more examples:
```
15 % 4 = 3
16 % 4 = 0
17 % 4 = 1
6 % 5 = 1
6 % 6 = 0
0 % 9 = 0
3 % 10 = 3
100000003 % 10 = 3
```

Modular exponentiation is just normal exponentiation (`2 ^ 5 = 2 * 2 * 2 * 2 * 2 = 32`) and then modulus. So, `(2 ^ 5) % 6` is `32 % 6` is `2`.

```
(3 ^ 2) % 4 = 1
(3 ^ 3) % 4 = 3
(3 ^ 3) % 10 = 7
(2 ^ 6) % 4 = 0
(5 ^ 2) % 4 = 1
(6 ^ 2) % 5 = 1
(6 ^ 100) % 6 = 0
(0 ^ 7) % 9 = 0
```

Some mathematicians throughout time [Gauss, Euler, Fermat, Lagrange, etc] have found some really cool properties about arithmetic using the modulus ('Modular Arithmetic'). Get a first taste with the [wiki entry](https://en.wikipedia.org/wiki/Modular_arithmetic) and then if you really want to dig in, check out the [Cryptography Coursera course](https://www.coursera.org/learn/crypto).

Two cool facts about modular exponentiation in particular make our key exchange work.

1. Computing the modular exponent is easy (i.e. _very fast_) even when the numbers get very large
2. Computing the inverse - the [modular discrete logarithm](https://en.wikipedia.org/wiki/Discrete_logarithm) is difficult (i.e. _very slow_)

So, how does this modular exponent line up with the keys in the story above? And how does this protect us from snoops?

We choose some big prime numbers to use as our _base_ and our _modulus_. This helps ensure that there aren't any math tricks an attacker could use to make it easy to find our key. When we each choose a secret, we use that as the exponent and do modular exponentiation. The number that comes out is our shareable number, that the snoop can't crack - even if they know the primes that were used to generate it.

- prime 1: modulus
- prime 2: base
- secret: exponent
- shareable number: `(base ^ exponent) % modulus`

What our cool number theory facts mean is that we can make this shareable number, but even if someone has the shareable number and the two primes, they can't go backwards and find our secret. Here's an example:

- prime 1 (modulus): 941 
- prime 2 (base): 631
- secret: I choose 289
- shareable number: `(631 ^ 289) % 941 = 854`

So, I would send over 941, 631, and 854 to you, and even with those numbers, a snoop couldn't figure out that my secret was 289. 

You would do something similar:

- prime 1 (modulus): 941 
- prime 2 (base): 631
- secret (exponent): you choose 523
- shareable number: `(631 ^ 523) % 941 = 124`

and send back `124`. Then, we could each do another modular exponentiation, and end up with the same secret key, with the snoop none the wiser.

Me: 

- modulus: same old prime, 941
- base: your secret, 124
- exponent: my secret, 289
- shared key: `(124 ^ 289) % 941 = 349`

You:

- modulus: same old prime, 941
- base: my secret, 289
- exponent: your secret, 124
- shared key: `(289 ^ 124) % 941 = 349`

And we both end up with the same shared key - `349` - without ever sending it in a message. Now, we can use it to encrypt other messages, and we're safe from snooping.

## Breaking down the algorithm

The key to all of that stuff was being able to do the modular exponent operation really fast. That's what the exercism exercise was about, and what all the math in the [wikipedia entry](https://en.wikipedia.org/wiki/Modular_exponentiation#Right-to-left_binary_method) is about. The wikipedia entry is more detailed, but it's a little terse, so I've taken the liberty of spelling out in a few more words what I understand to be going on.

We want to generate `base ^ exp % m`.

We know that we can write _e_ as a binary number. Say _e_ is `11`, then in binary it's `1011`. That's the same as writing it as a sum of powers of 2:

```
1 * 2 ^ 3 + 0 * 2 ^ 2 + 1 * 2 ^ 1 + 1 * 2 ^ 0
```

Here's the trick - we rewrite `base ^ exp` substituting in this expansion:

```
base ^ (1 * 8 + 0 * 4 + 1 * 2 + 1 * 1)
```

That's the same as `base ^ 11` - we just split up the `11` into `8 + 2 + 1`.

We can 'distribute' the sum in the exponent as a product - just like we can write `2 ^ 3` as `(2 ^ 2) * (2 ^ 1)`. 

If we do that here, we get

`base ^ 8 * base ^ 2 * base ^ 1`

Thats equivalent to `b ^ 11`, which isn't really all that surprising - if you add up the powers, you get back to 11.

What's really cool about writing it this way, though, is that we can do the modulus operation for each of these powers of the base separately. That means we can do:

```
(b ^ 8 % m) * (b ^ 2 % m) * (b ^ 1 % m)
```

and that will be equivalent to `b ^ 11 % m`.

Even when the base, exponent, and modulus get really large, we can use this transformation to do modular exponentiation with _n_ steps, where _n_ is the number of bits in _e_ (log base 2 of e). For `e = 11`, that's 4 steps. For `e = 941`, it's 10 steps, and for `e = 982451653` it's still only 30 steps. That's fast.

## Breaking down the code

Here's the Rust function I wrote:

```rust
fn mod_pow(mut base: u64, mut exp: u64, modulus: u64) -> u64 {
    if modulus == 1 { return 0 }
    let mut result = 1;
    base = base % modulus;
    while exp > 0 {
        if exp % 2 == 1 {
            result = result * base % modulus;
        }
        exp = exp >> 1;
        base = base * base % modulus
    }
    result
}
```

If you haven't read a lot of Rust before, a few quick notes:
- `fn` means we are defining a function named `mod_pow` (named that way because the normal Rust exponent function is called `pow` and this is the modular version)
- `mod_pow` will take three arguments: `base`, `exp`, and `modulus`, and they all have to be `u64`s - a Rust primitive type for large-ish positive integers.
- `-> u64` means that `mod_pow` will return a `u64` - a big positive integer
- Rust makes you declare variables with `mut` for mutating if you're going to change them

Now, what does this loop syntax actually do? In each step, it:

1.  Checks the smallest bit of _exp_ to see whether that power of 2 'counts'. In our example, `exp == 11 == 0b1011`, the first, second, and fourth bits will 'count' and the third bit (from the right) won't - it's a `0`. 
2. If the bit counts, then we multiply that step into our `result`. We multiply `result` by the current power of _base_ , modulo _modulus_. In our example, in the first loop step, this will be `base ^ 1 % modulus`, then `base ^ 2 % m`, [4 is skipped], then `base ^ 8 % m` .
3. We right shift our exponent to look at the next bit - that's the `>> 1` part - it moves `1011` over to `101`, then to `10`, then `1`, and then we're done.
4. We raise _base_ to the next power of 2 (modulo _modulus_), so that we're ready for the next step in our loop.

For e = 11, our result starts at `1`, and the loops go:
- `result = result * base % m`
- `result = result * base ^ 2 % m`
- [skipped, because exp is now `10`, so the last bit is `0`]
- `result = result * base ^ 8 % m`

And then we have consumed all the bits of the exponent, so we're done.

The loop walks through the powers `b ^ 2 * i`, multiplying by each one, depending on whether that bit in the exponent was set. It turns our formula into code!

The rest of the exercise just uses this modular exponentiation function to implement parts of the algorithm - this is the heart of it.

-- 

Hope the math and code were enlightening, they certainly helped me figure out what was going on. If there's a part of the explanation that was more confusing than helpful (or if it is outright wrong), let me know and I can try to fix it!

Shoutout to everyone at Exercism for the great problems, tireless Wikipedia math editors, and the Rust team for the cool language. 

Shoulders of giants, y'all.
