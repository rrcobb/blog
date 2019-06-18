# Day 2 at Fin

## Chronologically:
  - Walked in myself, Kyle is trying to recover from bronchitis
  - listened to my podcast, the story is getting pretty good
  - fixed the specs for adding agent to entries, cleaned it up and pushed
  - everything is falling! reminders not getting sent because of an uncaught bug in my refactoring from yesterday...
  - work work work to fix the bug and get the fix into production
  - updated the specs so that a similar bug would get caught instead of breaking production
  - working on figuring out how to throttle requests to the api
  - lunch with kortina from whole foods, talked about the company.
    - values - how does Fin view people? how do our values come across in the interactions between users and Fin?
    - Futurism, Books
  - Throttled those durn requests, underscore.js makes things way cooler.
  - Learned about the flows of the data around React, improving my meta-skills of finding the spots in the code where things ought to happen
  - Throttling was breaking some jasmine tests, learned about faking methods with Jasmine's spy, so that the tests wouldn't get throttled the same way
  - Diving into optimizing another part of the api - the user list page. Lots of db queries, how to reduce them?
  - Lots of time in Rails working on the user model, caching some values so that we could do constant queries rather than 2n
  - Lots of time trying to figure out if it was working or broken - still not 100% sure!
  - Push! Next up, adding a checkbox to the dashboard so that we can see whether users actually need briefings or not

## Memorable:
Lots of help from matt, seeto, chris. The team is super great, and it's awesome working with them. Tons of patience from Matt especially.
Lunch with Kortina was good - nice to check up, nice to learn more about each other, nice to talk about the big picture some.
Breaking reminders was interesting - didn't like that feeling, but it's nice to know that the world didn't end - just some reminders that didn't get sent out.
Break deploys into two if adding a required field in a migration - race condition when users can still interact with the old version, even if the migration backfills
Lots of support from the team on figuring out the tests for the throttling, and lots of celebration about that win. Pretty awesome feeling.
the /\/\/\/\/\/\_@_ Rollercoaster of emotions is pretty real through a day - tried to stay calm and let it roll off, but it's hard!
