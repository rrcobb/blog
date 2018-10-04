---
layout: post
title: About the Internet
description: How does this thing work? A brief primer.
categories: blog
date: 2014-04-11T00:00:00+00:00
tags: [blog]
keywords: 
image: 
---
*This post originally appeared on the blog [Learning Learning](https://keeponlearninglearning.wordpress.com/2014/04/11/about-the-internet/)*

I am often surprised when I meet incurious people. As a curious person myself, I am always trying to understand. I love to know the particulars about a subject, but I often find that the most useful knowledge is general – how do the basics of banking work? What are the main types of animals and plants? About how many people live on each continent?

![penguins][penguins]
And how many penguins?

This kind of general knowledge lends insight into daily questions – underlying concepts help frame new data. For instance, knowing a tiny bit about how the international money supply works means that when I see the headline “IMF’s global forecast is most optimistic since crisis,” I know thatNot that this particular information changes things, but you can see how earlier curiosity about the general Way Things Work pays off. 



So, what are the basic things everyone ought to know?This question has plagued me and many others since forever. Should we read all the Classic literature? How far do we need to go in Math? Science? Geography, History, Politics? Pop culture? Classic Movies? I call the general problem of ‘what content to choose’ the Selection Problem. I don’t have a name for this specific subproblem, the “what should everyone know?” question, but I have thought about it lots and still only have musings, not a solid answer. 


![The universe][universe]
It’s a big ol’ place.

It seems likely that we ought to know the basics about the big stuff – the things we interact with every day, the things that shape our lives. We ought to know how our food and water get to us, how people and the universe work. A passing familiarity with money and politics and geography and history are likely candidates. From the post title, you can probably guess that I would also include a basic knowledge of the technology underneath the Internet. 



With the onward march of technological progress, there has been a growing movement for young people to learn more about technology, particularly coding. It’s mostly worked! Lots of people have at least seen code, and maybe written a little bit. They still don’t know the big picture stuff, but at least they know that computers are good at following specific directions and bad at knowing what you want them to do. 



Even if you have seen some code and you’ve remember from somewhere that the Internet was started in 1969 by some scientists or the military or someone somewhere,

1. You are reading this on a computer, and probably 
2. Have only a fuzzy idea of how the words got to your screen.


Lucky for you, I just built a website ([knommon.com][knommon] - go check it out!) and through that process, I learned a ton about how the internet works! I’m here to share what I learned with you.(Note: This is just an intro, and might be flawed: there are lots of other places to read about this, in any level of detail. Search on the terms mentioned here to find literally thousands of pages explaining what’s going on)

So, the Internet is a series of tubes. Right? Haha, ah, hahaha. ha. 


All jokes aside, tubes is not a very useful analogy. I think a much better image is a food court! That’s the one I’m sticking with. 

![food court][food court]
A fancy one, with lanterns!

So, you have your computer, and there are lots of other computers around the world. Some of the computers are like yours – desktops, laptops, phones – in our analogy, the hungry mall-goer looking for a bite to eat. There are also big, professional computers, the ‘servers’ that you have heard about but maybe not grokked. They are like the kitchens behind the food court storefronts, ready to produce your food for you. 



What does a meal consist of? How do you find it and get it? In a food court, it’s pretty easy. On the internet, it’s less familiar. 



Let’s start with what you already know – what you do to access the internet. 



You fire up a web browser, Chrome or Safari or Firefox or Explorer or Opera (okay, not many of you are on Opera). You use the search engine or enter a url into the address bar. The page shows up, or it gives you an error. You do whatever you came to do, browsing, reading, clicking links, playing games, signing in and out, adding items to a virtual shopping cart – generally, conducting transactions. 



What happens back in the kitchens that lets you get the food you want? Underneath the pretty layout of your browser, and floating in ‘the cloud’ is the cool software that makes web browsing possible. Step by step:1. You enter a url (Uniform Resource Locator – the address you type at the top, it starts with ‘http’)  in the browser. This is like you deciding what type of food you want to eat – for this example, Chinese. But, your browser doesn’t know where to look to find that page – so it has to look!2. The browser tries to find out what server that url represents. To find out, it does a Domain Name System (DNS) lookup. DNS is big and hairy and complicated (like some of the mall maps I’ve seen), but you can think of it as asking some mall staff person where to get Chinese food – they might know, or might not, but if they don’t, they’ll at least point you to someone else who knows. Your browser sends a message to the local DNS server, probably the one provided by your internet provider e. 



g. Verizon, which might or might not know the location of the server you want – it might ask some other DNS server. 



3. DNS lookup returns the Internet Protocol (IP) address that corresponds with the url that you entered. The IP address lets your browser locate and send messages to the server where the webpage you want is stored. It’s like knowing which restaurant in the food court to go to if you want Chinese food. 



4. Your browser sends a request to the server located at the IP address it found through the DNS lookup. Once you know where to get the food, you go and put your order in. With the request, your browser sends useful information, like your computer’s IP address, so that the server can send back what you want. 



5. The server responds to your request. For most websites, the server does some internal processing on the information from your request, so that it knows what data to send back to you. Server side processing, like all of the topics I am introducing here, is a huge topic that I can’t even begin to do justice to here. Some of the things it might involve are:All of this is like what is going on in the kitchen and even in the business office of the Chinese Restaurant. They buy food, they prepare it, they cook it, they do all kinds of steps necessary to making your dish that you don’t have to worry about. Servers are like that too, only even less visible. 



6. Your browser interprets the response from the server and renders a beautiful webpage for you to view and interact with. The response it gets is usually in the form of a page of HyperText Markup Language (HTML) with some other files that help make it beautiful and useful. These often include Cascading Style Sheets (CSS), Javascript files, and resources such as images or videos which populate the page. The browser knows the rules to put all of these files and resources together, and it follows them, like you putting the sauces and toppings on your food just how you like it. 



Then you eat! Of course, unlike at the food court, you probably want to visit lots of sites and many different pages on each one – like ordering six items at nine restaurants at an enormous food court with millions of options. 



The basics are still the same – when you click a link, your browser sends a request to the server. If it already knows where the server is, it doesn’t need the whole lookup process, but links to other sites do. When you fill out a form online, your browser turns it into a different kind of request for the server (POST instead of GET), but the general steps of the process are the same. 



Sometimes, the server will send along extra data, so that when you click a button or through a slideshow, your browser already has what it needs, and doesn’t need to request anything more from the server. This is particularly true for games and videos, where a large file will load with a single request. 



What’s best, your browser handles all this for you! And you didn’t have to cook. 

![fish][fish]
Google is just like this fish. Don’t worry about it. 



So that’s how it works! Of course, there are lots more details to learn if you want to really get it. It took actually building and getting a website hosted for me to understand what I do understand about the internet. If for you it means sitting down and writing some code, I highly encourage it! If it means reading more blogs and articles, that’s good too. 



I introduced this post by talking about curiosity, and how we ought to be curious about the world we interact with. Here’s a [much better post about curiosity][curiosity] over on LessWrong, which, if you haven’t stumbled on before, is a great site for learning and being smarter. 



Curiosity is better than solemnly valuing The Truth. Hopefully I have, through my wonderful analogy, made the inner workings of the Internet a little bit less intimidating, so your curiosity can carry you the rest of the way. I could point you to some links, but, wouldn’t it be better if you explored on your own?

Go forth!

![Understand ALL the things!][Understand ALL the things] 


[penguins]: https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/2/28/Kaiserpinguine_mit_Jungen.jpg
[universe]: https://i0.wp.com/th02.deviantart.net/fs70/PRE/f/2013/121/c/8/finding_answers__the_age_of_the_universe_by_hunapo-d63r3n8.jpg
[food court]: https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/b/be/FoxRiverMallFoodCourt_AppletonWisconsinUSA.jpg
[fish]: https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/4/4a/Chinese-style_Nematalosa_come_with_soy_sauce_and_shallots.jpg
[Understand ALL The Things]: https://i0.wp.com/cdn.memegenerator.net/instances/500x/48410011.jpg
[knommon]: http://knommon.com
[curiosity]: http://lesswrong.com/lw/aa7/get_curious/