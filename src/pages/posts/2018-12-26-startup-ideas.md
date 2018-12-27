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
5. [Startup Ideas](#sec-5)
    * [Software Services](#sec-5-1)
        * [Zeit Now for Databases](#sec-5-1-1)
        * [not-google-analytics](#sec-5-1-2)
        * [Simple Email Metrics](#sec-5-1-3)
        * [Health record schema API](#sec-5-1-4)
        * [AWS for Distributed Systems](#sec-5-1-5)
    * [B2B](#sec-5-2)
        * [Booking Platform for Gig-oriented Professionals](#sec-5-2-1)
        * [Business Model Explorable Explanations](#sec-5-2-2)
        * [Drip Campaign Generator](#sec-5-2-3)
        * [Enterprise Software Management](#sec-5-2-4)
        * [Customer Support As A Service](#sec-5-2-5)
        * [Stripe Atlas For Storefronts](#sec-5-2-6)
    * [B2C](#sec-5-3) 
        * [Make Referals Easy](#sec-5-3-1)
        * [Social Network Self-Reflection Tools](#sec-5-3-2)
        * [Washio x Uber](#sec-5-3-3) 
        * [Fundrise x Sofi](#sec-5-3-4) 
        * [Code Learning Newsletter](#sec-5-3-5) 
    * [Clones](#sec-5-4)
        * [Scooters](#sec-5-4-1)
        * [Signal](#sec-5-4-2)
        * [Password Manager](#sec-5-4-3) 
        * [Twilio](#sec-5-4-4) 
        * [ISPs](#sec-5-4-5) 
        * [Instagram](#sec-5-4-6) 
        * [LMSes](#sec-5-4-7) 
        * [SAP Concur](#sec-5-4-8) 
        * [Podcast Apps](#sec-5-4-9) 
6. [Thoughts and Notes](#sec-6)

## <a id="sec-1"></a>Introduction

> **Ideas are cheap, execution is everything.**
>
> *(attributable to [Chris Sacca](https://www.quotes.net/mquote/848858), [Casey Neistat](https://www.brainyquote.com/quotes/casey_neistat_726902) and [William Hertling](https://www.goodreads.com/quotes/7780748-ideas-are-cheap-it-is-building-them-into-profitable-companies), among others)*

Nevertheless, ideas _do_ matter. For any given good idea, there are different people, organizations, and strategies that could work to turn the idea into reality. With a bad idea, though, no team will make it work.

They're also fun! Thinking in terms of different market opportunities and ideas for products is a lens for looking at the world. 

- It's an exercise in empathy for potential product users
- It's an exercise in technical problem solving to think through what it would take to build a product 
- It's an exercise in business modeling to think through what it would take to bring a product to market

I've seen some other lists like this around, and have linked them below, along with links to lists of existing startups. Handy in case you wanted to see if an idea is already out there, being implemented, or if browsing other ideas is interesting or helpful for inspiration.

I'd love thoughts, feedback, and criticism of my list of ideas, and would love even more if anyone would just build the products, so I could use them. If you've seen startups that are actually these ideas, send links my way!

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

## <a id="sec-5"></a> Startup Ideas

### <a id="sec-5-1"></a>Software Services

There are tons of tools for developers. This space is hecka crowded. Still, there's always room for a few more entrants, particularly if they focus on making services that are comprehensible.

#### <a id="sec-5-1-1"></a> Zeit Now for Databases

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
* AWS / azure / heroku / google cloud
* Github
* Gmail
* Dropbox

_\<irony\>Maybe it should be on a blockchain. That'll help everything\</irony\>_

#### <a id="sec-5-1-2"></a> not-google-analytics

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

#### <a id="sec-5-1-3"></a> Simple Email Metrics

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

#### <a id="sec-5-1-4"></a> Health Record Schema API

Basic insight: if you can make the _shape_ of the data from different services available, then services will be able to integrate with each other.

Healthcare data is a huge, messy, and enormously lucrative industry. There is a ton of vendor lock-in, and my bet is that it's mostly an issue of incompatible schemas. Solving problem of serving up the _schemas_ of different services might be enough to empower the engineers at different health data outfits to build integrations with each other's software, breaking some of the stasis and anti-competitive practices holding back healthcare tech.

The analagous startup in the K-12 Education space is [Clever](https://clever.com/about), which offers meta-level services (single sign-on, secure sync of student roster data) to schools and the vast ecosystem of software for the classroom. They recognized that teachers were spending a ton of class time getting students to log into different apps, and that the initial configuration and log in overhead of the apps was actually holding teachers back from using tech effectively.

The set of problems in healthcare are different from education, but the same kind of thinking applies - make the fractured and fractious ecosystem healthier and saner for product developers, so they can focus on helping the end user.

#### <a id="sec-5-1-5"></a> AWS for distributed systems

On the less-well-thought-through ideas on this shelf, but reading this [CIDR 2019 paper on problems with serverless architectures](https://arxiv.org/pdf/1812.03651.pdf) makes me wonder if there's an opportunity here. 

The basic point of the paper is that a bunch of the past 40 years of good ideas from database design, distributed system design, and programming in general are mostly ignored or forgotten in 'serverless' products (AWS Lambdas in particular). If you built the platform with the right primitives and pricing structure for computing on big data, and you could sell it... 

There's a lot of opportunity there.

### <a id="sec-5-2"></a>B2B

#### <a id="sec-5-2-1"></a> Booking Platform for Gig-oriented Professionals

Like Skillshare, but not just for classes - a generalized time-booking platform.

There are plenty of services that do something like this, but there are enough folks who book time with each other that their needs are still underserved. It should be _super easy_ for someone (a yogi, a caterer, a photographer, a musician) to put up times they are available, and turn that into a booking page for their potential clients. The booking flow should be smooth, and have time tracking and payments built-in.

As someone who has booked time with folks (dentists, plumbers, fitness instructors, chefs), the software is bad enough that sophisticated (read: I am smug) end users still end up calling on the phone instead of booking through the website.  

One version of this might focus on online services. It would build in live chat, screensharing, video chat, recording, and streaming features. It would cater to youtubers, gamers, etc. who are not monetizing well enough with Twitch and Youtube, possibly because broadcast-centric platforms don't actually provide 'book a time with me' flows.

#### <a id="sec-5-2-2"></a> Business Model Explorable Explanations

This one is a startup idea with a particular founder in mind. 

[Nicky Case](https://ncase.me/) builds amazing [explorable explanations](https://explorabl.es/). They are fascinating introductions to different ideas, and convey in a few fun minutes what would otherwise be impossible to convey. It's reminiscent of Bret Victor's [Media For Thinking the Unthinkable](http://worrydream.com/MediaForThinkingTheUnthinkable/). 

Businesses often deal with complex systems, with many related parts and complex phenomena. It's frequently hard or impossible to communicate across an organization because teams lack shared understanding, shared experience, and shared language. 

Nicky should make (or teach others to make) custom explorable explanations for businesses. [The Evolution of Trust](https://ncase.me/trust/) is more complicated than most shitty 2-hour powerpoint-slides-driven presentations, and packs more engagement and information than the best of them.

Interactive 'games' like this encourage participants to _play_ with the data and the models in ways that spreadsheets and slides don't afford. It becomes fun and obvious to change different assumptions of some model, and see what the outcome is. 

This is basically no different than most enterprise data-analytics platforms, except in tone. Instead of dry, objective, seriousness, explorable explanations expect that you won't be bored. They are delightful. The focus shifts from understanding the current data to understanding the possibilities. 

Anyone else could do this as a consulting business too, but they probably ought to have a background in making games and making data fun, otherwise it's missed the point.


#### <a id="sec-5-2-3"></a> Drip Campaign Generator

If you write some content, it should be button-click easy to push it across email, facebook, twitter, instagram, a blog, etc.

Key features:
- strong defaults for dripping it out
- customizable templates for different platforms
- preview version of all the different targets
- dashboard of how content has performed across platforms

This seems too obvious a tool to not exist, and something like it is built into Wordpress already. Still, if you are aggressive about supporting all of the different platforms where people are writing and making their cross-posting of content absurdly easy, then you can still win.

#### <a id="sec-5-2-4"></a> Enterprise Software Management

Somehow, Single Sign On portals have become the default way that most employees at large organizations discover what software exists for them to use. The discovery experience on those portals is _possible_ but not well designed. I have to do a lot of clicking-through to tell whether a piece of software is something I need to use or know about. A great UI would hint at which software I am likely to need, and what I'll use it for. It would help with onboarding, and help employees learn software tools faster.

The real opportunity here, however, is in software management. The same data you need in order to build the hint UI would be more powerful as a dashboard for whoever is purchasing software. How many people are actually using X piece of software? How does that compare to its alternatives? How much are we paying per seat again?

The Enterprise Software App Store would have to provide more enterprise software management kinds of features than standard App Stores.

#### <a id="sec-5-2-5"></a> Dispute Resolution / Customer Support As-A-Service

Customer support is one of the hardest things for businesses to get right, and one of the most consistently frustrating things about different companies as a user. Yet, customer service is actually pretty similar for most products - there's a support tree of various common problems, and a system for escalation when a problem is unfamiliar or a customer is particularly difficult. 

Once again, this is not a new idea. There are companies that will sell this to you. Still, there are enough bad customer support experiences that it still smells like a market opportunity.

#### <a id="sec-5-2-6"></a> Stripe Atlas / WeWork for Storefronts

There are some upcoming trends that are still early, and an entrant might be able to beat the established players to the punch. [Stripe Atlas](https://stripe.com/atlas) helps new (internet) businesses get through the drudgery and paperwork so they can focus on creating a great product. [WeWork Labs](https://www.wework.com/labs) is focused on the other side - providing physical space, mentoring, an ecosystem of support.

So far, no one (that I know) has got this kind of drudgery-obviating service for storefronts. Finding, leasing, and building out a brick-and-mortar store is still a massive amount of work. Entrepreneurs are not creating new value by solving the same find-lease-build out problems again and again. Shared problems want shared solutions. 

This is a tough space, since lots of the local and physical work doesn't scale particularly well. It could be that upon a closer look, the shape of the business is some bite out of this problem rather than the whole thing. Services like [Managed by Q](https://www.managedbyq.com/) seem like they are headed in that direction.

### <a id="sec-5-3"></a>B2C

#### <a id="sec-5-3-1"></a> Make Referals Easy

Many companies have internal programs to incentivize recommendations. The labor market is tight, and referrals drive some huge portion of hiring. 

Somehow, figuring out which of my friends and acquaintances are good matches for roles within my company is a non-trivial research task. I took a few hours on Facebook and Linkedin last month searching for friends who might make good referrals to open positions where I work, but the tools felt awkward. 

The right tool would:

- let you sign in to all the platforms that make sense (OAuth to Facebook, Google, Twitter, Github, Linkedin, Outlook, Contacts, Gmail, Snapchat, Instagram...)
- Load in the list of available positions at your company (and let you add more, customize, hint, etc.)
- Help you browse your list of friends
- Sort, filter, take notes
- Let you message them on your platform of choice (text / email / messenger / twitter dm / linkedin message)
- manage the conversations through different stages (catching up, letting them know about what your company is doing, seeing if they are open to opportunities, asking them to join your company)
- manage your follow ups with some kind of pipeline view

It would be awesome if it were also integrated into whatever recruiting-pipeline management software your company was already using (Greenhouse, Lever, ZipRecruiter, WorkDay...). Then you could add in team features like

- compare notes with teammates
- template message to send to folks
- track progress through lever / greenhouse / etc

For me, the big opportunity is in the _workflow tool_ for inviting people to join your company. That part is currently super annoying, and has stopped me from making all the referrals that I ought to.

Some copy for the splash page:

- find people in your network
- get to work with your friends
- make your boss happy
- get that referral $$$
- Gif of workflow use shows conversation:
    - _"A: Hey, you hear I started at etsy?"_
    - _"B: Its an amazing team. Lets get coffee and catch up!"_
    - _"A: Sounds great, Wednesday morning?"_

The pricing could also be tied to actually successfully referring people. The money in recruiting is so good that even a piece of the referal bonus is possibly enough to build a company around.

#### <a id="sec-5-3-2"></a> Social Network Self-Reflection Tools

Generalizing from the idea of recruiting your friends - the social graph should be useful to the people who make it up.

Currently, all the various social graph apps - Facebook, Twitter, Instagram, Snapchat, Gmail, Slack, WhatsApp, WeChat - all present you with a feed of updates or messages from your friends. They give the insights about your activity to someone else - advertisers and internal product designers, mostly.

Driving your own understanding of your relationships and life isn't currently something that those platforms support. Apple's new screentime feature points to a desire for more reflective ability on our technology use. Now that we can _see_ our consumption, we can reflect on it, set goals, and (hopefully) feel better in the long run.

Newsfeeds don't lend themselves to personal growth.

Instead, they are addictive - and big $$ for the platforms and advertisers. 

This is more of a plea and less of a business idea, but I would love for these apps to give me more insight into who I hang out with, who I communicate with, and who I am. I suspect that third-party apps could take different angles on this (like the recruiting angle above) and turn them into viable businesses.

#### <a id="sec-5-3-3"></a> Washio x Uber

[Washio shut down](https://techcrunch.com/2016/08/30/washio-on-demand-laundry-service-shuts-down-operations/) back in 2016, but the core of the idea still seems valid. Laundry sucks. Someone else might do chores like this with greater efficiency and specialization and get some kind of benefits of scale. Or maybe there are just people who can trade their money for more time and convenience.

The Instacart / Uber model for laundry seems ripe for the picking. Somebody make it!

#### <a id="sec-5-3-4"></a> Fundrise x Sofi

The democratization of banking and finance is happening on all fronts. [Robinhood](https://www.robinhood.com) makes trading easy, [Republic](https://republic.co/) lets the crowd act as VCs, [Fundrise](https://fundrise.com) lets everyone do real estate investing. [Sofi](https://www.sofi.com/), [Earnest](https://www.earnest.com/), [Kabbage](https://www.kabbage.com/), and all make getting loans easier, and hopefully their technology is giving them some edge.

Someone should build the end-to-end democratized lender - peer to peer loans, facilitated by technology instead of vertically integrated middlemen.

I realized as I'm writing this that I'm actually behind on this one. There are a handful of peer to peer lending sites that already exist. [Lending Club](https://www.lendingclub.com/), [Upstart](https://www.upstart.com/), [Funding Circle](https://www.fundingcircle.com/us/), [Prosper Marketplace](https://www.prosper.com/), [Peerform](https://www.peerform.com/), the list goes on. Maybe this one is played out, maybe there's still room for better services. 

#### <a id="sec-5-3-5"></a> Code Learning Newsletter

Paid newsletters seem like a good business. The Information and The Skimm are shining examples among thousands of smaller, but still successful, businesses. Similarly, there are a ton of great learn-to-code resources out there. Some of them have strong newsletters. There are millions of folks who are trying to learn to code. They are hungry for newsletter content. I'm betting there is room for a small business around a learning to code daily or weekly newsletter. 

Existing examples of this kind of thing:

- https://www.destroyallsoftware.com/screencasts
- https://wesbos.com/
- https://egghead.io/
- https://reacttraining.com/
- https://pragprog.com/
- https://www.patreon.com/getify

There's always room for great content.

### <a id="sec-5-4"></a>Clones

There are a lot of existing businesses that have some kind of room to be knocked off their perch. Enterprise software is particularly appalling. There are also a few industries and applications where there are fewer dominant players than the market can bear. If you have an angle and can serve customers better than the big companies, you can beat them.

#### <a id="sec-5-4-1"></a> Scooters 

Lime, Jump, Skip, Spin, Bird - there are so many companies coming into the space that it's hard to tell who is leading and who is following on fast. The amazing thing is that this didn't happen five years ago.

There's a bunch of room for peripheral companies, but the big opportunities are probably in figuring out what is wrong with the existing scooter companies and beating them at their own game. If you are into hardware, becoming the dominant scooter manufacturer also seems like a cool idea.

#### <a id="sec-5-4-2"></a> Signal

Signal is the current leader in secure messaging. It's fine, but it's not as good of a messaging platform as Messenger or WhatsApp or iMessage.

#### <a id="sec-5-4-3"></a> Password Manager

Privacy and security are hard. Password managers are one great step towards helping everyone be more secure. Lastpass, 1Password, Dashlane, and a host of others are pretty awesome products.

There's still room for new entrants in this space, particularly ones that help organizations manage their overall security. Who has access to which passwords? What's the policy for rotating those passwords? Has everyone been trained on how to use their password manager appropriately?

Tools that help solve the individual, personal security problems that lead to large corporate cybersecurity breaches are a big market gap. Focus on user education, security audit, organizational policy management, and helping get more people into a multi-factor auth world.

#### <a id="sec-5-4-4"></a> Twilio

There's somehow only one name in internet telephony for apps. Sending text messages and making voice calls is a key piece of tons of software. Someone should figure this out and crush them.

#### <a id="sec-5-4-5"></a> ISPs

Speaking of monopolies that need to be taken on, XFinity / Time Warner / Verizon are living off their investments in infrastructure. Customers don't love them, but you'd have to beat them on price and quality. This one might need a new technical solution. If you can do something like sell a router that acts as a perma-4G-hotspot, maybe you can skip wires and beat the incumbents.

#### <a id="sec-5-4-6"></a> Instagram

Facebook will slowly, steadily choke it to death. Snapchat is a little too weird. Something else will have to take the place that Instagram did. This one seems more like a prediction than a startup idea, since there will always be tons of clones ready in the wings, and there's no great reason why yours will beat theirs. Still, something's gonna do it.

#### <a id="sec-5-4-7"></a> LMSes

Blackboard, Canvas, Moodle, Brightspace, Sakai. They're all...meh. Designing an LMS that meets everyone's needs is hard. There have been a lot of different attempts at building LMSes. Since they all have to meet so many different needs, they end up with tons of features. More features means the tools are hard for teachers and students to use. Every feature is a slew of bugs waiting to happen.

If I had my way, an LMS would be limited in scope and led by designers instead of engineers or administrators. It would avoid the massive feature bloat that LMSes tend to succumb to.

If you have a narrow audience whose needs aren't being met by the big players, you could steal some market share, and then take on more and more. A disruptive LMS might support learning some new way, or market itself differently than the others, or offer a nicer UI and reduce switching costs by promising clean data importing from the others. 

#### <a id="sec-5-4-8"></a>SAP Concur 

Basically any enterprise software tool is a target for a startup. There are a few dozen-odd alternatives to Concur, but nothing has dethroned the king of big company expense management. Still, Concur is massive and old, and given the way that software projects tend to age, it's a good bet that they are anti-nimble.

Make something that meets the needs of employees at the biggest companies better than SAP, and find a way to sell it to them.

#### <a id="sec-5-4-9"></a>Podcast Apps 

I listen to a lot of podcasts, and have bounced between a few different apps. Apple podcasts is reliable for the listening experience, but the search and suggestions are weak, and the scrubbing and listening speeds don't give me a lot of options. Stitcher was like that but worse, Breaker is awesome for discovery and has nice speed options, but I've had playback issues. Spotify is a decent listening experience when I've found a podcast, but it's so music centric that I just don't go to it for podcasts. None of them give me what I want, which is to view the time-synced transcript while I'm listening.

I'm not a podcaster myself, but my assumption is that the tools for making podcasts are also poor. Who is listening at what point in your podcast? What other podcasts do your listeners like? The current suite of listening platforms are unlikely to give you that kind of data. If you wanted to make all the podcasters love you, you'd build with the platform focus in mind - make it dead simple to get your podcast up and published, monetized, and measured.

## <a id="sec-6"></a>Thoughts and Notes

This turned out to be a round 20 ideas. 11 new-ish, 9 clones or vulnerable-seeming monopolies. It was pared down a little bit as I realized that some ideas I had were really for side projects, not for startups. Even among this list, there are a few that lean that direction.

The range of sizes and difficulties seems pretty broad - a newsletter is something you could probably try out in a few hours; a easy-button storefront solution or ISP probably requires funding. Most, but not all, of the ideas are primarily software businesses. My analysis of the ideas ranges from very shallow to a page or so of writing. My guess is that deeper analysis of each idea would probably lead to throwing out about 3/4 of them, though I would struggle to say which ones they'd be right now.

It's wildly fun to keep a running list of ideas, and it's been super fun to write them all out like this. It definitely makes me want to go and start working on some of these, but at least for now I think I'm happy with what I'm up to.

A few themes I notice in my own ideas: 

- Serving freelancers / gig-sters / entrepreneurs
- Making social graph data useful to the users
- Selling direct to employees at companies, instead of selling to the companies
- Opportunities in 'Not being creepy when others are creepy'. Choosing a different point on the creepiness / quality curve seems more general than DuckDuckGo.

What other groups are probably ignored by software builders?

- dropshippers
- podcasters
- mechanical turks
- artists
- instagrammers
- youtubers
- small time craftsfolks and artisans
- authors
- journalists
- camgirls
- drivers
- folks in big companies

Maybe software builders are ignoring you too! Building good software, it turns out, is pretty hard. But not so hard that you can't do it!

Even easier than building software is coming up with ideas - problems that need solving, solutions that need a problem. Hopefully this list gets your gears turning, whether it's to take one of these ideas and run with it, or to come up with an idea of your own! I'd love to chat with you either way.

