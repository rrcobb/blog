---
layout: post
title: Modular Exponentiation in Rust
description: In which we unpack a math
date: 2019-02-10T14:49:47-05:00
tags: [Rust, Math, Kata]
---

# Rust

I've been trying to learn [Rust](https://www.rust-lang.org/) for a little while here and there, and I've started to pick up some momentum. Lots of nice things about the language -- it's got an awesome community, a relatively consolidated set of resources / best practices / documentation / tooling, and the language itself is really friendly for a systems programming language. Compared to how much I had to fight C back in the day (or even Java), Rust is more expressive, safer, easier to use, and just as powerful.

A few things that have helped it start to click for me: 
- [The Rust Book](https://doc.rust-lang.org/book/) is a great starting point
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/) fills in some of the gaps (_why_ do this?) in the book
- [Rustlings](https://github.com/rust-lang/rustlings) drives home some of the fundamentals
- The [Exercism Rust Track](https://exercism.io/tracks/rust) has a ton of neat little practice problems.

This post explores the math and code behind one of those problems -- [Diffie Helman](https://exercism.io/tracks/rust/exercises/diffie-hellman) key exchange.

Here's the link on [exercism](https://exercism.io/tracks/rust/exercises/diffie-hellman/solutions/bc02fc0cef374647a6af068e40027068) where I actually did the exercise. You can see the code and any comments there too.

## A teensy bit of background on key exchange

A tiny bit of background on cryptography to set the stage. All the time, we want to have our secrets. But what is a secret? Something that you and I know that no one else knows. In order to share our secrets with computers, we want to hide them from someone who might be snooping. But since all the wires are buried, we can never be sure that they aren't seeing our messages! Cryptography helps us turn those messages into a secret code that no one can decipher...except for us.

Lots of mathmaticians have done lots of work to invent _amazing_ ways of encrypting (and breaking!) secret codes. One of the coolest is called Diffie-Helman key exchange.

Here's how it goes.

You and I need a way to share secret messages. What we'll do is share a **key** that we'll use to encode our messages -- if we both know the key, and no one else does, we can be pretty certain that only we can decode the messages. But if we can't meet in secret to decide on the key, how will we get started? That's where Diffie-Helman comes in. It uses some of the interesting properties of numbers to make it really hard for someone listening in on our messages to get ahold of our key -- even if they can read our messages. 

I start by choosing two big prime numbers. I also choose a secret number. From the primes and my secret number, I make a new number -- one I can share -- and I send three pieces to you: the two primes and this new, shareable number. You also choose a secret number, and using your secret number and the primes, you make your own shareable number and send it back to me. Now each of us have the other's shareable number, and by using our secret and the shared number, we can make a key that only we know.

Here's the [wiki entry](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange#Public_key) and a [plain english explanation](https://security.stackexchange.com/questions/45963/diffie-hellman-key-exchange-in-plain-english). It might take a couple of reads (or solving the puzzle yourself in code) to feel comfortable with it.

## Modular exponentiation

In that description, the process for choosing secrets and making a key from each other's numbers and the primes was pretty vague. The security of the system depends on something called **modular exponentiation**. The _modulo_ operator (`rust±%`) is a fancy name for the _remainder_. For example, since `rust±21 / 5` is 4 with 1 remaining, `rust±21 % 5 = 1` (pronounced "twenty-one modulo five is one", or "21 mod 5 is 1").

Some more examples:

```rust
15 % 4 = 3
16 % 4 = 0
17 % 4 = 1
6 % 5 = 1
6 % 6 = 0
0 % 9 = 0
3 % 10 = 3
100000003 % 10 = 3
```

Modular exponentiation is the normal exponentiation that you're used to (`rust±2 ^ 3 = 2 * 2 * 2 = 8`) modulo some number. So, `rust±(2 ^ 3) % 6` is `8 % 6` is `2`.

```rust
(3 ^ 2) % 4 = 1
(3 ^ 3) % 4 = 3
(3 ^ 3) % 10 = 7
(2 ^ 6) % 4 = 0
(5 ^ 2) % 4 = 1
(6 ^ 2) % 5 = 1
(6 ^ 100) % 6 = 0
(0 ^ 7) % 9 = 0
```

Some mathematicians throughout time (Gauss, Euler, Fermat, Lagrange, and more) have found some really cool properties about arithmetic using the modulus ('Modular Arithmetic'). Get a first taste with the [wiki entry](https://en.wikipedia.org/wiki/Modular_arithmetic) and then if you really want to dig in, check out the [Cryptography Coursera course](https://www.coursera.org/learn/crypto).

Two cool facts about modular exponentiation in particular make our key exchange work.

1. Computing the modular exponent is easy (i.e. **very fast**) even when the numbers get very large
2. Computing the inverse is difficult (i.e. **very slow**) -- this inverse is called the [modular discrete logarithm](https://en.wikipedia.org/wiki/Discrete_logarithm) 

So, how does this modular exponent line up with the keys in the story above? And how does this protect us from snoops?

We choose some big prime numbers to use as our **base** and our **modulus**. This helps ensure that there aren't any math tricks an attacker could use to make it easy to find our key. When we each choose a secret, we use that as the exponent and do modular exponentiation. The number that comes out is our shareable number, that the snoop can't crack -- even if they know the primes that were used to generate it.

- prime 1: modulus
- prime 2: base
- secret: exponent
- shareable number: `rust±(base ^ exponent) % modulus`

Those cool facts of number theory mean that we can generate this number quickly, but even if someone has this number and the two primes, they can't go backwards and find our secret. Here's an example:

- prime 1 (modulus): `rust±941`
- prime 2 (base): `rust±631`
- secret: I choose `rust±289`
- shareable number: `rust±(631 ^ 289) % 941 = 854`

So, I would send over `rust±941`, `rust±631`, and `rust±854` to you, and even with those numbers, a snoop couldn't figure out that my secret was `rust±289`. 

You would do something similar:

- prime 1 (modulus): `rust±941`
- prime 2 (base): `rust±631`
- secret (exponent): you choose `rust±523`
- shareable number: `rust±(631 ^ 523) % 941 = 124`

and send back `rust±124`. 

Then, we could each do another modular exponentiation, and end up with the same secret key, with the snoop none the wiser.

Me: 

- modulus: same old prime, `rust±941`
- base: your secret, `rust±124`
- exponent: my secret, `rust±289`
- shared key: `rust±(124 ^ 289) % 941 = 349`

You:

- modulus: same old prime, `rust±941`
- base: my secret, `rust±289`
- exponent: your secret, `rust±124`
- shared key: `rust±(289 ^ 124) % 941 = 349`

We both end up with the same shared key -- `rust±349` -- without ever sending it in a message. Now, we can use it to encrypt other messages, and we're safe from snooping.

## Breaking down the algorithm

The key to all of that stuff was being able to do the modular exponent operation _really fast_. That's what the Exercism exercise was about, and what all the math in the [wikipedia entry](https://en.wikipedia.org/wiki/Modular_exponentiation#Right-to-left_binary_method) is for. The wikipedia entry is comprehensive, but it's a little terse and hard to understand, so I've taken the liberty of spelling out in my own words what I understand to be going on.

We want to generate `rust±base ^ exp % m`.

We know that we can write **exp** as a binary number. Say **exp** is `rust±11`, then in binary it's `rust±1011`. That's the same as writing it as a sum of powers of 2:

```rust
(1 * 2 ^ 3) + (0 * 2 ^ 2) + (1 * 2 ^ 1) + (1 * 2 ^ 0)
```

Here's the trick -- we rewrite `rust±base ^ exp` and substitute in this expansion:

```rust
base ^ (1 * 8 + 0 * 4 + 1 * 2 + 1 * 1)
```

That's the same as `rust±base ^ 11` -- we split up the `rust±11` into `rust±8 + 2 + 1`.

We can 'distribute' the sum in the exponent as a product -- just like we can write `rust±2 ^ 3` as `rust±(2 ^ 2) * (2 ^ 1)`. 

If we do that here, we get

```rust
base ^ 8 * base ^ 2 * base ^ 1
```

Thats equivalent to `rust±b ^ 11`, which isn't really all that surprising -- if you add up the powers, you get back to 11.

What's really cool about writing it this way, though, is that we can do the modulus operation for each of these separately. That means we can do:

```rust
(b ^ 8 % m) * (b ^ 2 % m) * (b ^ 1 % m)
```

and that is equal to `rust±b ^ 11 % m`.

Even when the base, exponent, and modulus get really large, we can use this transformation to do modular exponentiation with a few small steps, each of which are really fast. The coolest part is that we only need **n** steps, where **n** is the number of bits in **exp** -- (log base 2 of exp, if you like logarithms). For `rust±e = 11`, that's 4 steps. For `rust±e = 941`, it's 10 steps, and for `rust±e = 982451653` it's still only 30 steps. That's **fast**.

Compare that to the number of multiplications if you wrote it out the normal way. For `rust±6 ^ 982451653`, you'd have `rust±982451653` multiplications!

`rust±6 * 6 * 6 * 6...` -- we'd be here all week!

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
- `rust±fn` means we are defining a function named `rust±mod_pow` (named that way because the normal Rust exponent function is called `rust±pow` and this is the modular version)
- `rust±mod_pow` will take three arguments: `rust±base`, `rust±exp`, and `rust±modulus`, and they all have to be `rust±u64`s -- a Rust primitive type for large-ish positive integers.
- `rust±-> u64` means that `rust±mod_pow` will return a `rust±u64` -- a big positive integer
- Rust makes you declare variables with `rust±mut` for mutating if you're going to change them

Now, what does this loop syntax actually do? In each step, it:

1.  Checks the smallest bit of **exp** to see whether that power of 2 'counts'. In our example, `rust±exp == 11 == 0b1011`, the first, second, and fourth bits will 'count' and the third bit (from the right) won't -- it's a `rust±0`. 
2. If the bit counts, then we multiply that step into our `rust±result`. We multiply `rust±result` by the current power of **base** , modulo **modulus**. In our example, in the first loop step, this will be `rust±base ^ 1 % modulus`, then `rust±base ^ 2 % m`, [4 is skipped], then `rust±base ^ 8 % m` .
3. We right shift our exponent to look at the next bit. That's the `rust±>> 1` part -- it moves `rust±1011` over to `rust±101`, then to `rust±10`, then `rust±1`, and then at `rust±0` we're done.
4. We raise **base** to the next power of 2 (modulo **modulus**), so that we're ready for the next step in our loop.

For e = 11, our result starts at `rust±1`, and the loops go:
- `rust±result = result * base % m`
- `rust±result = result * base ^ 2 % m`
- [skipped, because exp is now `rust±10`, so the last bit is `rust±0`]
- `rust±result = result * base ^ 8 % m`

And then we have consumed all the bits of the exponent, so we're done.

The loop walks through the powers `rust±b ^ 2 * i`, multiplying by each one, depending on whether that bit in the exponent was set. It turns our formula into code!

The rest of the exercise uses this modular exponentiation function to implement parts of the algorithm -- this is the heart of it.

-- 

Hope the math and code were enlightening, they certainly helped me figure out what was going on. If there's a part of the explanation that was more confusing than helpful (or if it is outright wrong), let me know and I can try to fix it!

Shoutout to everyone at Exercism for the great problems, tireless Wikipedia math editors, and the Rust team for the cool language. 

Shoulders of giants, y'all.
