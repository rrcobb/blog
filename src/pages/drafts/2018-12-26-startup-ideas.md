---
layout: post
title: Startup Ideas
description: List of free startup ideas. Hope someone builds them!
date: 2018-12-26T11:04:23-05:00
tags: [Startups, Ideas, List]
---

# Startup Ideas


1. [Introduction](#sec-1)
2. [Lists of Existing Startups](#sec-2)
3. [Prior Work: Other Lists of Startup Ideas](#sec-3)
4. [Mandatory Startup Reading Links](#sec-4)
5. [My List of Startup Ideas](#sec-5)

    a. [Software Services](#sec-5-1)

    b. [B2B](#sec-5-2)

    c. [B2C](#sec-5-3) 

    d. [Clones](#sec-5-4) 

6. [Thoughts and Notes](#sec-6)

## <a id="sec-1"></a>Introduction

> **Ideas are cheap, execution is everything.**
>
> *(attributable to [Chris Sacca](https://www.quotes.net/mquote/848858), [Casey Neistat](https://www.brainyquote.com/quotes/casey_neistat_726902) and [William Hertling](https://www.goodreads.com/quotes/7780748-ideas-are-cheap-it-is-building-them-into-profitable-companies), among others)*

Nevertheless, ideas _do_ matter. For any given good idea, there are different people, organizations, and strategies that could work to turn the idea into reality. With a bad idea, though, no team will make it work.

They're also fun! Thinking in terms of different market opportunities and ideas for products is a lens for looking at the world. 

- It's an exercise in empathy for potential product users
- It's an exercise in technical problem solving to think through what it would take to build a product 
- and it's an exercise in business modeling to think through what it would take to bring a product to market

I've seen some other lists like this around, and have linked them below, along with links to lists of existing startups. Handy in case you wanted to see if an idea is already out there, being implemented, or if browsing other ideas is interesting or helpful for inspiration.

I'd love thoughts / feedback / criticism of my list of ideas, and would love even more if anyone would just build the products, so I could use them. If you've seen startups that are actually these ideas, send links my way!

## <a id="sec-2"></a>Lists of Existing Startups

Not comprehensive, but some decent places to start:

* [Angellist](https://angel.co/companies)
* [Product Hunt](https://producthunt.com)
* [Crunchbase](https://www.crunchbase.com/)
* [List of YCombinator Companies](https://yclist.com/)

There are other lists, and there are startups that aren't on any list. ¯\\\_(ツ)\_/¯ 

## <a id="sec-3"></a> Prior Work: Other Lists of Startup Ideas

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

## <a id="sec-4"></a> Mandatory Startup Reading Links

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

## <a id="sec-5"></a> My List of Startup Ideas

### <a id="sec-5-1"></a>Software Services

#### simple-database

**TLDR;** _What if we had database-as-a-service that was as easy as the new fleet of easy deployment services?_

There's a heap of ways to deploy applications these days, and they are _stupidly easy_. I use [Zeit.co's Now](https://zeit.co/now) for this site. [Heroku](), [Surge](), [Netlify](), and [Github Pages]() all make getting a website up so easy that you can  deploy _whimsically_. [Glitch](https://medium.com/glitch/add-a-custom-domain-to-your-glitch-project-9a455eab2baf), [Repl.it](https://repl.it/site/blog/deploy), and [Codepen](https://blog.codepen.io/projects/project-deployment/) all let you do the same thing from their online editors. If you haven't made a website today, you should. Take you all of 10 minutes, and you'll have a site built with real code that someone else can visit on their phone.

But what if you want a database? Getting a static site is nice, and getting a backend up and running is awesome, but if you want to build a 'real' application, you want to be able to store data. 

Admittedly, Heroku actually bundles this service in, so the landscape isn't totally deserted. You'd think that Firebase would make this easy, but it's actually super intimidating to get a project started there, because the platform is such a behemoth and just getting a handle on what they even offer is a slog.

[Compose](https://www.compose.com/) is the closest thing I've seen to this, but it's too expensive - the key to heroku, surge, now, gh pages, netlify are the _free tier_. Compose lacks that, and is way more expensive than using a cloud database provider. But the tools are *almost* there - see [pronto](https://github.com/vadimdemedes/pronto), which is almost as easy as deploying a static site. *Almost*.

Other thoughts, notes, and noteworthy technologies in the easily-storing-data space:

* [Airtable](https://airtable.com) and Google Sheets are almost good enough (for small data sizes)
    * Airtable has a max row count at the free tier, and is rate-limited
    * Google Sheets API is too complicated to base your whole application logic around
    * Both lock you in - you can't write SQL and change your database layer afterwards
* [LowDB](https://github.com/typicode/lowdb) and [json-server](https://github.com/typicode/json-server) are _amazing_ for speedy local data development and prototyping
* [SQLite](https://www.sqlite.org/index.html) is similarly awesome, if older, and then your app is using real SQL, so you could swap in some other database if you get big enough to warrant it
* [Typeform](https://www.typeform.com/) is amazing for creating fast, full, good-looking 'applications' without code
 
My ideal service would basically be SQLite / lowdb in the cloud. CLI for deploying and configuring the schema would be the key focus, and a web portal for browsing the data would be nice. Docs would have to be dead-simple and top-notch. 

_Hypothesis: good docs why businesses like Heroku and Digital Ocean exist simultaneously with cheaper and more fully-featured alternatives (AWS, Google Cloud, Azure)._

A small and potentially incomplete list of _kinds of datastores_ that a service could support - almost like a list of features:

* SQL
* NoSQL
* Queue (memcached / redis)
* Searchable index
* Text (think blog posts)
* Static Assets (Images, Video, CDN-cacheable resources)

It would be _neat_ but not necessary, if it hooked into different kinds of backing stores, and I could make the data go between different places:
* Airtable
* Glitch
* Sheets
* Aws / azure / heroku / google cloud
* Github
* Gmail
* Dropbox

_\<irony\>Maybe it should be on a blockchain. That'll help everything\</irony\>_

#### not-google-analytics

Google Analytics is an awesome tool for webmasters. Problem is, it's hella creepy. You add 3rd-party javascript to your page, in order for Google to track all of your customers. 👀

_Side Note: Be wary of any big company giving you anything for free. Of course Google can track when folks load fonts from Google Fonts. That's why they built the amazing tool in the first place, so people would use it!_

So, this idea is basically to clone Google's awesome analytics platform, but just not be creepy.

- Easy to install
- $1 / month
- No reselling of the data collected from customers
- Make the trade-off explicit: not as comprehensive as google, but also, not as creepy
- Designed for small sites (anything less than 1 million visitors a day)
- Transparent about how it works and what it does
- Simple, small set of features (no bloat)
- Helps you make decisions about what is working and what isn’t re: your website

The domain name is [available](https://instantdomainsearch.com/#search=not-google-analytics).

#### simple-email-metrics

In the same vein as not-google-analytics: An uncreepy email opens tracker.

In lots of email-centric jobs, you always want to know _'how many folks opened this email?'_ There are tools like this built into a few different plugins and mail sending services. It's not a new technology.

Key features: 

- Transparent about how it works, especially what is and isn’t collected
- Easy to set up, easy to use
- $1 / month
- Data is portable (If you want to get it into another system, its easy)

Product:
- Gmail read receipts
- Email Opens Dashboard view (analytics page for your emails)

Technology:
- Need to add a pixel to outgoing emails
- maybe through a chrome extension, maybe through a plugin to various email services
- server listens for requests for the pixel, logs the requests
- parse those logs to see data about individual emails

One annoying technical challenge might be associating a particular email with the tracking information. You may have to be a little bit clever in the UI to make sure that you can put the right information next to the right email, even when you don't necessarily have identifiers that you've added loaded on the screen. The goal is to show tracking information from the inbox view, but a decent workaround is to show only from the detail view.

On the stats dashboard I'd like to see emails sent, open rate, average # of opens, time to open, response rate, forward rate. Basically, you'd try to send a bunch of emails and see how they did, and then build whatever you'd want to look at to know at a glance how they did.

#### Health Record Schema API

Basic insight: if you can make the _shape_ of the data from different services available, then services will be able to integrate with each other.

Healthcare data is a huge, messy, and enormously lucrative industry. There is a ton of vendor lock-in, and my bet is that it's mostly an issue of incompatible schemas. Solving problem of serving up the _schemas_ of different services might be enough to empower the engineers at different health data outfits to build integrations with each other's software, breaking some of the stasis and anti-competitive practices holding back healthcare tech.

The analagous startup in the K-12 Education space is [Clever](https://clever.com/about), which offers meta-level services (single sign-on, secure sync of student roster data) to schools and the vast ecosystem of software for the classroom. They recognized that teachers were spending a ton of class time getting students to log into different apps, and that the initial configuration and log in overhead of the apps was actually holding teachers back from using tech effectively.

The set of problems in healthcare are different from education, but the same kind of thinking applies - make the fractured and fractious ecosystem healthier and saner for product developers, so they can focus on helping the end user.

### <a id="sec-5-2"></a>B2B

#### Booking Platform for Gig-oriented Professionals

Like skillshare, but not just for classes - a generalized time-booking platform

There are plenty of services that do something like this, but there are enough folks who have and want to book time with each other that the needs are still underserved. It should be super easy for someone (a yogi, a caterer, a photographer, a musician) to put up times they are available to be booked for services. The booking flow should be smooth, and have time tracking and payments built-in.

One version of this might focus on online services, and build in live chat, screensharing, video chat, recording, and streaming features. 

#### visualize-your-business

This one is actually a startup idea with a particular founder in mind. 

[Nicky Case](https://ncase.me/) builds amazing [explorable explanations](https://explorabl.es/). They are fascinating introductions to different ideas, and convey in a few fun minutes what would otherwise be impossible to convey. It's reminiscent of Bret Victor's [Media For Thinking the Unthinkable](http://worrydream.com/MediaForThinkingTheUnthinkable/). 

Businesses often deal with complex systems, with many related parts and complex phenomena. It's frequently hard or impossible to communicate across an organization because teams lack shared understanding, shared experience, and shared language. 

Nicky should make (or teach others to make) custom explorable explanations for businesses. [The Evolution of Trust](https://ncase.me/trust/) is more complicated than most shitty 2-hour powerpoint-slides-driven presentations, and packs more engagement and information than the best of them.

Interactive 'games' like this encourage participants to _play_ with the data and the models in ways that spreadsheets and slides don't afford. It becomes fun and obvious to change different assumptions of some model, and see what the outcome is. 

This is basically no different than most enterprise data-analytics platforms, except in tone. Instead of dry, objective, seriousness, explorable explanations expect that you won't be bored. They are delightful. The focus shifts from understanding the current data to understanding the possibilities. 

Anyone else could do this as a consulting business too, but they probably ought to have a background in making games and making data fun, otherwise it's missed the point.


#### Turn content into a drip / page / newsletter

If you write some content, it should be button-click easy to push it across email, facebook, twitter, instagram, a blog, etc.

Key features:
- strong defaults for dripping it out
- customizable templates for different platforms
- preview version of all the different targets
- dashboard of how content has performed across platforms

### <a id="sec-5-3"></a>B2C

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


### <a id="sec-5-4"></a>Clones

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
*** instagram

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


## <a id="sec-6"></a>Thoughts and Notes

It's wildly fun to keep a running list of ideas. 

What other groups are probably ignored by software builders?
- freelancers of various stripes (dropshippers, podcasters, m turks, artists, instagrammers, youtubers, small time craftsfolks, authors, journalists, camgirls, drivers)

