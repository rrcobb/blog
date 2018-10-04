---
layout: post
title:  "But I Wrote This Script!"
description: Tales from learning coding.
date: 2015-01-09T14:33:30+00:00
categories: blog
---

In my downtime the Winter Term Workshop, I've been learning some web scraping, setting up this Jekyll site, and learning a little bit about bash scripting. I wrote my first shell script, which creates a new post for the website, stamping it with the date and a title, and helping with the markdown header jekyll expects. 

Of course, after writing a functioning but understandably bad version of the script, I realized that I ought to check to see if someone else had written something that does the same thing. Of course they had. 

Some googling led me to [Jekyll Tips and Tricks on the metaskills blog](http://metaskills.net/2013/09/02/jekyll-tips-and-tricks/) which had a nice little script, and a nice [interactive script](https://gist.github.com/pibby/6911493) from pippy on Github.

While I am proud of what I wrote, and glad that I goto to practice a new skill, I am swapping out my script for someone else's (I am picking the pippy script, since it is nicely interactive). It's better for a few reasons - it has more functionality, letting me input a description, tags, keywords, and images from the prompt. It is also slightly more correct, downcasing any uppercase letters in the post title for the filename and getting rid of punctuation that rightly shouldn't be in the URL. 

I am generally interested in how people learn to code, and this situation seems worth a few lessons:

1. My instinct to automate a repeated task was a good instinct
2. My confidence that I could learn how to write the script I needed was well-founded
3. I should first look to see if anyone else has made a tool for what I need before making it myself

Automating tedious tasks is a great place to find small projects to learn coding. The problem
is real, you know exactly what success looks like, and you probably don't need anything fancy in order to make something that works. 

Thinking more about it, 

4 - I should have written the script in Ruby!

Using what you know is almost always faster and better than trying to learn something new. If I had decided to write the script in Ruby, I wouldn't have learned as much, but I would have had a working script in a few minutes, rather than a few hours. 

Lots of lessons learned! If you want to learn coding, find a few problems that are interesting to you and someone willing to help you, and get started!