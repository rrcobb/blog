  - [Yak Shave: Terminal Prompt Borkedness](#sec-1)
    - [Overview](#sec-1-1)
    - [TLDR;](#sec-1-2)
    - [Intro](#sec-1-3)
      - [Problem:](#sec-1-3-1)
    - [Background: PS1 and `tput`](#sec-1-4)
      - [PS1 (not the playstation):](#sec-1-4-1)
      - [`tput`](#sec-1-4-2)
    - [Diagnosing this particular problem](#sec-1-5)
    - [References](#sec-1-6)

# Yak Shave: Terminal Prompt Borkedness<a id="sec-1"></a>

## Overview<a id="sec-1-1"></a>

-   Today's yak shave: Debugging Terminal Prompt messed-up-edness
-   You know how you see people with really cool terminal prompts in screencasts?
-   Them: :sunglasses: Me: :eyes:
-   Messing with your terminal sometimes breaks things!
-   Per always, a little patience, curiosity, and googling solves it. (aka, any excuse for a yak shave!)

## TLDR;<a id="sec-1-2"></a>

Broken:

```
export PS1="\[\u $(tput bold)$(tput setaf 4)\]\W\[$(tput sgr0)\] \$: "
```

Fixed:

```bash
export PS1="\u \[$(tput bold)$(tput setaf 4)\]\W\[$(tput sgr0)\] \$: "
```

-   <https://unix.stackexchange.com/questions/191004/bash-the-prompt-gets-visually-broken>
-   <https://unix.stackexchange.com/questions/28827/why-is-my-bash-prompt-getting-bugged-when-i-browse-the-history>

## Intro<a id="sec-1-3"></a>

-   For a long time, I was using <https://github.com/nojhan/liquidprompt> to style my prompt
-   Pretty great!
-   But, it cost me a teensy bit of startup time when I opened a new terminal tab
-   Plus, I wanted to understand what was happening with my terminal
-   So I decided to learn a little bit and use a prompt of my own design
-   Took out liquidprompt and add a little sumthin to my \`.bashrc\`:

```
export PS1="\[\u $(tput bold)$(tput setaf 4)\]\W\[$(tput sgr0)\] \$: "
```

-   pretty cool! Now my terminal looks like:

![img](/Users/robertcobb/Desktop/Screen Shot 2018-10-13 at 12.46.32 PM.png)

### Problem:<a id="sec-1-3-1"></a>

-   I started noticing that sometimes, especially when I scroll backwards through my bash history, my prompt would get messed up

![img](/Users/robertcobb/Desktop/Screen Shot 2018-10-13 at 12.57.30 PM.png)

-   My cursor wouldn't show where I expected, the text got bumped all over, everything was pretty messed up

## Background: PS1 and `tput`<a id="sec-1-4"></a>

-   Amusingly, searches for PS1 console will end up with results for the Sony gaming machine.
-   "ps1 prompt" gets better results
-   Good guide here: <https://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html>
-   Okay, so I ran `echo $PS1`. WTF is `\\u@\h \\W]\\$`?

### PS1 (not the playstation):<a id="sec-1-4-1"></a>

-   `PS1` is a bash variable that sets the prompt
-   Bash prompts have a DSL! (Domain Specific Language)
-   `\u`, `\h`, `\W` - all of these **mean something** to bash
-   (Full list in the post above)

### `tput`<a id="sec-1-4-2"></a>

-   `tput` is freaking cool for styling terminal output
-   It inserts <span class="underline">non-printing characters</span> that change color, bold, and back
-   For instance, `tput bold` prints out `\033[1m$`
-   this doesn't show up in the terminal &#x2013; it turns text to bold!

Prompt Breakage:

-   Critical section in the full list of PS1 options:

```text
\[ : begin a sequence of non-printing characters, which could be used to embed a terminal control sequence into the prompt
\] : end a sequence of non-printing characters
```

-   This is how terminals get messed up!
-   Let me expand:
    -   Bash is keeping track of how many characters are in your prompt
    -   if you have characters that <span class="underline">don't print</span> in your prompt (like ~tput ~, bash thinks your cursor is further than it should be
    -   if you have characters `\[` in between these guys `\]`, bash does not count them towards where your cursor will get placed

## Diagnosing this particular problem<a id="sec-1-5"></a>

-   Now that we've got a picture for how the `PS1` variable works and how `tput` is styling the prompt, we can debug!
-   My broken `PS1` was:

```
export PS1="\[\u $(tput bold)$(tput setaf 4)\]\W\[$(tput sgr0)\] \$: "
```

-   Look! The `\u` in my `$PS1` is inside of these bad boys `\[` `\]`!
-   That means bash thinks that `\u` is non-printing characters
-   <span class="underline">bash won't count my username as characters for the prompt</span>
-   Now that I understand the bug, the solution is easy:

```
export PS1="\u \[$(tput bold)$(tput setaf 4)\]\W\[$(tput sgr0)\] \$: "
```

-   Moving the `\u` outside of the non-printing section means that bash will count it towards my prompt characters
-   Now I can scroll through my bash history without my prompt getting b\*rked :relieved:.

## References<a id="sec-1-6"></a>

-   <https://unix.stackexchange.com/questions/28827/why-is-my-bash-prompt-getting-bugged-when-i-browse-the-history>
-   <https://unix.stackexchange.com/questions/105958/terminal-prompt-not-wrapping-correctly>
-   <https://unix.stackexchange.com/questions/191004/bash-the-prompt-gets-visually-broken>
-   <https://unix.stackexchange.com/questions/213504/how-to-print-control-characters-with-escape-sequences>
-   <https://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html>
-   <http://linuxcommand.org/lc3_adv_tput.php>
