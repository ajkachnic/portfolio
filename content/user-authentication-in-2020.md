---
title: "User Authentication, In 2020"
date: "2020-03-25"
description: "An extensive journey into the different options for authentication"
tags: [
  "security",
  "privacy",
]
---
> In 2020, for many startups, side projects, and companies, using prebuilt authentication systems the likes of Firebase, Authpack, and Auth0 can be more secure and efficient than building out their own system.

And if you think about it, it makes sense. It's not like every company writes their own JavaScript framework. Why should companies reinvent the wheel?

With that said, in this article, we will be exploring a few different options and categories for authentication.

- [Prebuilt traditional authentication](#prebuilt-traditional-authentication)
  - [My recommendations](#my-recommendations)
- [Password-less authentication](#password-less-authentication)
  - [My Recommendations](#my-recommendations-1)
- [Social Login](#social-login)
  - [My recommendations](#my-recommendations-2)
- [Implementing your own](#implementing-your-own)
  - [My recommendations](#my-recommendations-3)

So without further ado, let's get started

# Prebuilt traditional authentication

So this is the old-fashioned standard that most sites are using. The site usually requires a username or an email and a password.

While this is the most common setup, I would argue that it can lead to lower security compared to password-less standards.
A cryptographically secure randomly generated code is much harder to guess than your average password.

But, many users prefer this method because it is what they are used to. The most popular option isn't always the best, but traditional authentication has the advantage of being well-known and recognized. Everyone and their mother understands the concepts of it, mostly because it isn't rooted in a mysterious technology. Going the conventional route allows users to be accustomed to your platform from the beginning.

So, if you don't wanna spend one of your innovation tokens ([read this](https://mcfunley.com/choose-boring-technology)) or prefer familiarity with your user base, then this may be the way to go.

## My recommendations

1. [Authpack](https://authpack.io):
   **Extremely** generous free tier with unlimited users. Great support and documentation. Stripe payments also integrated. Incredible user experience
2. [Auth0](https://auth0.com/): Has a more enterprise-focused angle. Free plan with 7000 active users
3. [Firebase Auth](https://firebase.google.com/docs/auth/): Part of Firebase. Includes many other options including anonymous, social login, and Phone Auth. Phone Auth limited to 10k for free

# Password-less authentication

Recently, a few companies have begun offering password-less as a less risky alternative to traditional authentication.

These use public-private encryption algorithms to generate key pairs. The public key is saved to a database associated with another piece of data, often an email or phone number. Then, a “challenge” is sent, and the browser uses the private key to solve. The server sends a unique token to the browser and the transaction is over. [Read about this more from one of the providers](https://did.app/articles/how-did-works).

I reached out to [DID.app](https://did.app) for a one -sentence summary, and this is what they said.

> DID.app is an Identity Provider, that authenticates users by verifying access to either an email address or securely stored private key.

Security is greatly improved by this process and the user experience may also be better, but only when they've gotten used to it. If you want to try a new, promising technology, password-less may be the route to go down.

## My Recommendations

1. [DID](https://did.app): 1,000 users. Unlimited applications. Reasonably priced and very open about the technology
2. [Auth0](https://auth0.com/): Enterprise-facing. Has support for password-less (obviously)

# Social Login

This seems to be a perfect solution for both users and companies. Users get a much quicker registration process and companies barely have to manage their authentication or paying for it.

These usually rely on the 0Auth standard to authorize the Application

Social login can also end up allowing some great concoctions, such as [SOA (Son of Anton)](https://soa.ai)

You can implement these yourself fairly easily using [passport](https://passportjs.org) (which is sponsored by Auth0) and Express or use one of these platforms. Implementing your own solution with passport is relatively safe, and gives you the flexibility of adding pretty much any social provider. If you need an integration with a lesser-known service, this may be your only feasible option.

## My Recommendations

1. [Authpack](https://authpack.io): Only four options currently (Google, Facebook, Slack, Github), but the creator is open to adding new ones upon request. Same features mentioned earlier
2. [Firebase Auth](https://firebase.google.com/docs/auth/): Many providers supported, but most likely harder to get one added
3. [Auth0](https://auth0.com/): Unclear what social login providers are supported. Sign in with Google supported

# Implementing your own

Building your own authentication system for production is not recommended. There are many security risks involved in doing this. Let's just say it's not a task for the faint of heart.

If you do want to attempt this challenge, assume you will be hacked. It's not a matter of if, it is a matter of when and how.

A strong understanding of security on the web should be possessed if you are going down this route. Knowledge of hashing functions, encryption, SSL and TLS, Sessions, and much more is essential.

I recommend using [Express](https://expressjs.com/) as a server, [passport](https://passportjs.org) and [passport-local](http://www.passportjs.org/packages/passport-local/), and [helmet](https://github.com/helmetjs/helmet) for some added security.

## My Recommendations
[The definitive guide to form-based authentication](https://stackoverflow.com/questions/549/the-definitive-guide-to-form-based-website-authentication)

[These OWASP cheat sheets should also help](https://cheatsheetseries.owasp.org/)

# Wrapping things up

My #1 recommendations for Auth are [Authpack](https://authpack.io) and [DID.app](https://did.app). They both are extremely well-thought-out services that are quite useful within their categories.

I hope you enjoyed this article. I spend a lot of time writing it and I appreciate any feedback or suggestions. If you would like me to write an article about implementing any of these services, please let me know.

Thank you for reading, and remember, **hash your passwords!**