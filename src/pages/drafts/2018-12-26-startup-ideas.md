---
layout: post
title: Startup Ideas
description: List of free startup ideas. Hope someone builds them!
date: 2018-12-26T11:04:23-05:00
tags: [Startups, Ideas, List]
---

# Startup Ideas


1. [Introduction](#sec-1-1)
2. [Lists of Existing Startups](#sec-1-1)
3. [Prior Work: Other Lists of Startup Ideas](#sec-1-2)
3. [Mandatory Startup Reading Links](#sec-1-2)
4. [My List of Startup Ideas](#sec-1-3)
    a. [Software Services](#sec-1-4-1)
    b. [B2B](#sec-1-4-2)
    c. [B2C](#sec-1-4-3) 
    d. [Clones](#sec-1-4-3) 
5. [Thoughts and Notes](#sec-1-4)

## Introduction

> Ideas are cheap, execution is everything
>
> *(attributable to [Chris Sacca](https://www.quotes.net/mquote/848858), [Casey Neistat](https://www.brainyquote.com/quotes/casey_neistat_726902) and [William Hertling](https://www.goodreads.com/quotes/7780748-ideas-are-cheap-it-is-building-them-into-profitable-companies) among others)*

Nevertheless, ideas _do_ matter. For any given good idea, there are different people, organizations, and strategies that could work to turn the idea into reality. With a bad idea, though, no team will make it work.

They're also fun! Thinking in terms of different market opportunities and ideas for products gives me a lens for looking at the world. 

- It's an exercise in empathy for those whose needs a product idea would try to meet
- an exercise in technical problem solving to think through what it would take to build a product, 
- and an exercise in business modeling to think through what it would take to bring the product to market

I've seen some other lists like this around, and have linked them below, along with links to lists of existing startups. Handy in case you wanted to see if an idea is already out there, being implemented, or if browsing other ideas is interesting or helpful for inspiration.

I'd love thoughts / feedback / criticism of my list of ideas, and would love even more if anyone would just build the products, so I could use them. If you've seen startups that are actually these ideas, send links my way!

## Lists of Existing Startups

Not comprehensive, but some decent places to start:

* [Angellist](https://angel.co/companies)
* [Product Hunt](https://producthunt.com)
* [Crunchbase](https://www.crunchbase.com/)
* [List of YCombinator Companies](https://yclist.com/)

There are other lists, and there are startups that aren't on any list. ¯\\\_(ツ)\_/¯ 

## Prior Work: Other Lists of Startup Ideas

Some are a little old, but these were the inspiration for me to keep a running list and to eventually write this post.

* [Y Combinator: Startup Ideas We'd Like to Fund](http://old.ycombinator.com/ideas.html)
* [Y Combinator blog: 13 Startup Ideas](https://blog.ycombinator.com/13-startup-ideas/)
* [Pioneer: 8 Side Project Ideas that could get big](https://pioneer.app/ideas)
* [Gwern: Miscellaneous Project Ideas](http://www.gwern.net/Statistical-notes#someone-should-do-something-wishlist-of-miscellaneous-project-ideas)


And some in the same vein that I found in the course of writing this post:

* [Ask Product Hunt Thread](https://www.producthunt.com/ask/5408-what-are-some-side-project-ideas-you-d-like-to-see-built)
* [ideasareworthless.io](https://ideasareworthless.io/)
* [100 Ideas For the Future of Computing](https://github.com/samsquire/ideas)
* [awesome-app-ideas](https://github.com/tastejs/awesome-app-ideas) (in the tradition of awesome-*, a la [awesome-awesome](https://github.com/sindresorhus/awesome))

## Mandatory Startup Reading Links

If you are thinking about startup stuff, and haven't yet read a lot of Y Combinator / Paul Graham / Sam Altman stuff, then it's important that you do! I'm nobody - I've been on startup teams and been near startups for a little bit, but they've founded successful startups, funded successful startups, and coached hundreds of successful founders.

You should read their stuff.

* Sam Altman:
    * [Startup Playbook](https://playbook.samaltman.com/)
    * [How to Start a Startup (heavily video)](https://startupclass.samaltman.com/)
* Paul Graham:
    * [Advice about ideas](http://paulgraham.com/startupideas.html)
    * [Older but also still relevant advice about ideas](http://paulgraham.com/ideas.html)
    * [Things you wish someone would build for you](http://www.paulgraham.com/organic.html)
    * [Schlep Blindness](http://paulgraham.com/schlep.html)
    * [Scary Ideas](http://www.paulgraham.com/ambitious.html)
    * [Once you have an idea](http://paulgraham.com/start.html)
    * [Marginal](http://paulgraham.com/marginal.html)

## My List of Startup Ideas

### Software Services

** simple-database
*** https://www.compose.com/ is too expensive
*** But the tools are *almost* there (see https://github.com/vadimdemedes/pronto)
*** firebase is too complicated
*** Airtable / glitch / sheets are almost good enough for small data sizes
*** Airtable has a max row count :(
*** What if we just had cloud-easy-sqlite?
*** and maybe lowdb in the cloud too?
*** Options needed:
**** SQL
**** NoSQL
**** Queue (memcached / redis)
**** Text
**** Assets
**** Searchable index
*** potential backends
[2018-12-02 Sun 19:55]
**** Airtable
**** Glitch
**** Sheets
**** Aws / azure / heroku / google cloud
**** Github
**** Gmail
**** Dropbox
**** Some kind of blockchain, bc why not
*** Easy in, easy out
**** for data
**** for entering / leaving the platform
**** E-I-E-I-O
*** Names:
**** save data
**** pc (like cp, but persist-cloud)
**** 'save' or 'data'
**** 'forever' (like now, but for data)

** not-google-analytics.com
[2018-10-27 Sat 16:00]
- Easy to install analytics platform
- for a dollar / month
- No reselling of the data we collect from customers
- make the trade off explicit: not as comprehensive as google but also, not as creepy
- Designed for small sites (anything less than 1 million visitors a day)
- transparent about how it works / what it does
- simple, small set of features (no bloat)
- helps you make decisions about what is working and what isn’t re: your website

** simple-email-metrics
[2018-10-27 Sat 11:40]
Uncreepy email opens tracker
How many folks opened which email?
Transparent about how it works / what is and isn’t collected
Easy to set up / easy to use
$1 / month

Data is portable
If you want to get it into another system, its easy
*** Chrome read receipts
**** Email Opens Radar
**** Tracking pixel system
chrome ext
server


possible architectures:
backend
sinatra / sqlite
nginx logs / something that parses them (clojure?!?)


frontend 
chrome ext (js / typescript / clojurescript)

requests:
new tracking pixel
stats about some email
get image (and log access)


challenge:
how to associate an email with the tracking information?

possible solutions: 
hash email contents / save email contents
some unique email identifier (message-id?)
Key is that it has to be available from the chrome extension)

goal is to show tracking information from the inbox view / workaround is to show only from the detail view

stats page? (Emails sent, open rate, average # of opens, time to open, response rate, fwd rate)

** Health record schema api
[2018-11-06 Tue 19:49]
*** basic insight
**** if you can make the _shape_ of the data from different services available
**** then services will be able to integrate with each other
**** Clever, but for hospitals + health providers instead of schools



### B2B
** book-time 
 [2018-12-23 Sun 00:46]
*** like skillshare but it could be anything
*** spin off of gamertrainer, generalized uber-for-time-with-youtubers

** visualize-your-business
[2018-10-27 Sat 12:32]
*** Business / market research tools
*** Build an explorable explanation of your own business
*** Turn your excel model into a web visualization
*** how should software help people understand some situation?
*** what would be better than a spreadsheet / powerpoint?
Chart by geography
Chart by roles
Chart by ‘flows’ of money, people, products

*** Nicky case should make custom explorable explanations for businesses
[2018-10-27 Sat 22:44]

** Tool to turn some content into a drip / page / newsletter
   [2018-10-27 Sat 12:55]
Tweet / post / email / webpage versions of some content
  - strong defaults for dripping it out
  - tool for seeing all the places you’ve shared / linked, how they’ve done


### B2C

** refer-your-friends
*** drive referrals internally
[2018-10-25 Thu 08:36]
*** Help you browse your list of friends
*** message them on your platform of choice, and ask them to join your company
*** Tool Flow
[2018-10-27 Sat 11:58]
**** oauth facebook, google, twitter, linked in, github, contacts, (what else?)
**** browse / sort / filter / take notes on friends
**** compare notes with teammates
**** template message to send to folks
**** text / email / messenger / twitter dm / linkedin message to get in touch
**** import into lever / greenhouse / etc
**** follow up to reach out / pipeline view
*** Focus is on the -workflow tool- for inviting people to join your company
*** Splash page:
**** find people in your network
**** get to work with your friends
**** make your boss happy
**** get that referral $$$
**** Gif of workflow use:
“ Hey, you hear I started at etsy? Its an amazing team. Lets get coffee and catch up, I want you work with you again! “

*** Money back if you don’t refer someone sucessfully

** who-i-know
[2018-10-24 Wed 01:42]
*** Social graph should be useful to people
*** driving their own understanding of their relationships and lives
*** Currently doesn’t provide a lot of reflective ability
*** Doesn’t lend itself to personal growth
*** Instead $$ to big cos and advertisers
** Washio x Uber
[2018-11-15 Thu 08:18]
** Dispute resolution / customer support as a service
[2018-11-15 Thu 08:23]
** Opportunity at the high end to build “AWS for distributed systems?”
 [2018-12-26 Wed 10:08]
 https://arxiv.org/pdf/1812.03651.pdf


** learning-kata
*** agnostic learning progress tracker
**** Platform-agnostic
***** platform-agnosticism is actually sophisticated platform-awareness and testing
**** Content-agnostic
***** Content agnosticism is actually sophisticated content-awareness
*** concept measurement tool
*** knowledge diagnostic
Rough sense -> fine grained
Quickly, based on heuristics

What text editor do you use?
What programming languages have you heard of?
Which have you used?
Which vcs have you used?

Do you have a website? Blog?
Do you use a password manager?
Do you use twitter? HN? SO? GH?
*** logarithmic assessment
Do as many problems of this type as you can
Problems get harder and harder
Should serve to find actual level of students
No one should get 100%
*** driven by common misconceptions
*** 'Add your own' - community driven
*** Question: Should shared / curated decks be the dominant mode?
*** social construction - conversation and collaboration on decks
*** encourage prioritization
*** capture concept relations
*** mix concepts instead of isolating silos
*** metrics / measurements built in
**** finding out the sticky points
**** finding orphaned concepts
**** finding missing dependencies
**** finding poorly structured questions / cards
**** rate / report a card as poorly worded
*** principles for content
**** place in larger context 
**** provide context clues 
**** orientation
**** personalization
***** drawn from your own life
**** emotional connection
**** connectedness
**** Signpost knowledge
***** (like editor folding, for ideas)
**** minimum information principle
***** More smaller things is easier than fewer bigger things
**** build on the basics
**** lots of variants of the same question
**** spaced repetition
**** detect and eliminate memory interference 
**** Optimize wording
**** Assume no side-effects
**** swap questions and answers
**** provide reasoning clues
**** provide source links
**** date-stamp for detection of obsolete content
*** types of content
**** Introduction
***** Good to make sure users aren't punished for not knowing something new
***** How to ask good questions at different points in the learning process
**** Flip card
**** Multiple choice
**** Image card
**** Cloze deletion
**** Image Cloze Deletion
**** Mnemonics: Build-a-memory-map
**** Explorable

** podcast-er
*** react-native?
** code-learning-newsletter
[2018-10-24 Wed 20:00]
Paid code teaching newsletter


### Clones

*** scooter companies
*** stripe atlas / wework for storefronts

** Tools that could maybe be knocked off:
[2018-10-27 Sat 13:09]
*** signal
*** hootsuite (manage your online presence)
*** lmses
*** enterprise software manager (what tools do we even use?)
*** SAP Concur / basically any enterprise software tool
*** podcast apps (how should payment work?)
*** - payment to podcasters built in
*** - platform focus
*** lastpass / 1password
*** twilio
*** comcast / time warner / verizon

*** insta clone

*** has a market, so long as its got data privacy
[2018-11-16 Fri 18:08]
*** Mammoth for instagram

* Make-a-group-thread website tool
*** Mastodon for my friend group

** Oldtwitter.com
*** shows the real timeline, ordered chronologically
*** sso with twitter
*** you just see your old twitter timeline
** Dodo: mastodon x twitter
[2018-10-31 Wed 23:30]
Logo - twitter logo with stick figure legs

** Independent, networked code teachers
 [2018-11-20 Tue 08:12]
** system for betting on individuals
[2018-11-11 Sun 22:03]
*** And maybe training them?

** Service discovery
[2018-11-18 Sun 11:36]
*** App stores are broken
*** Service splash pages are broken
*** Product hunt is great for new things
*** But there are a ton of old/free/quiet things that are the ‘right’ tool for some task
*** Service discovery in learning / service discovery in bash commands
[2018-11-18 Sun 12:33]


## Thoughts and Notes

It's wildly fun to keep a running list of ideas. 

What other groups are probably ignored by software builders?
- freelancers of various stripes (dropshippers, podcasters, m turks, artists, instagrammers, youtubers, small time craftsfolks, authors, journalists, camgirls, drivers)

