### What is the "state" in this app?

The state is a quote and a color; once we have the state then we know how to render.

Let us first do a synchronous app where we provide n different 
One part of the state is a number from 0 to n-1 inclusive

#### How do the social buttons change given the state?
1. For twitter, use https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent
2. For facebook, use

#### Further challenges:
How do we represent transitional states? We should clear the quote with a transition
and then transition in the new color and the new quote.  Perhaps indicate this with loading dots