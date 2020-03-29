---
title: "My Take on Atomic Design in React"
date: "2020-03-28"
description: "Learn how Atomic Design could work out in React"
tags: [
  "javascript",
  "design",
  "react",
]
---
***Cross posted from [dev.to](https://dev.to/ajkachnic/my-take-on-atomic-design-in-react-2dmf)***

For around a week, I have been working on a side project, and I am currently working on the frontend of it. [I previously used Atomize](https://dev.to/ajkachnic/my-experience-with-atomize-and-next-js-4e9d) as a UI framework, on other projects. But, I still prefer the freedom of creating my own components

One thing I did like about [Atomize](https://atomizecode.com) was that it employed [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), hence the name. If you don't know what Atomic Design is, here is a summary from their website

> Atomic design is methodology for creating design systems. There are five distinct levels in atomic design:
>
> 1. Atoms
> 2. Molecules
> 3. Organisms
> 4. Templates
> 5. Pages

Fundamentally, as you go up this tree, the components get more complex. Molecules are made up of Atoms, Organisms are made up of Molecules and so on.

It's worth noting that for this project, I am using Next.js on top of React.

So for that reason, I will be focusing solely on the `component` directory and not involving other folders. This is to simplify it and make it more universal.

Here is what a normal React components folder may look like

```
- components
  - button.jsx
  - title.jsx
```
There would be more components, maybe they would be within their folders, but the point remains the same. The components are all together and not organized. That is okay as long as they are consistent. 

However, "okay" doesn't have to be the standard. We can do better than "okay".

This is what a more complex file system looks like, using normal component structuring. After that, there is the same structure, but using Atomic Design.
```
// Normal
- components
  - Button
    - index.jsx
  - Title
    - index.jsx
  - Hero
    - index.jsx
  - Navbar
    - index.jsx
  - Dropdown
    - index.jsx

// Atomic
- components
  - atoms
    - Button
      - index.jsx
    - Title
      - index.jsx
  - molecules
    - Dropdown
      - index.jsx
  - organisms
    - Hero
      - index.jsx
    - Navbar
      - index.jsx
```

Now, at least to me, I like the extra organization of these components. But, there is more to Atomic Design then moving some folders. The meat and potatoes of this strategy is making modular components and having them depend on each other.

For example, instead of using an `h1` element in your hero section, build a component for a Title and use it throughout your project. Components at higher levels should rely on lower components, whenever possible.

So, your Hero section might use a Title, a Body text, and a Button component. 

One of the best benefits of using Atomic Design is that the site should consistent, with components remaining similar throughout the website. This is extremely important in larger projects, with multiple developers. 

Another good thing about using this technique is that it is easier to get accommodated. If I am starting contributing to some open source project, it is much easier for me to understand it if the project includes a basic structure. I would almost have an entry point to the project, either by looking at the Atoms or the Pages. The Atoms show a lot of the underlying code, and the Pages offer a higher-level view of the project, from which I can dive into the components.

I think that Atomic Design is worth serious consideration, especially if the project has a scattered and inconsistent code-base.

# What to take from this

I think that even if you don't implement Atomic Design (it's not for everyone), I think you should try to be aware of how you are structuring your components and keeping consistency, both within structure and design.

Thanks for reading ❤️. I hope you enjoyed it. I appreciate all feedback and suggestions. If you have any ideas for anything you think I should cover, feel free to let me know.

**Social Media**

- [Twitter](https://twitter.com/su_andrewk)
- [Github](https://github.com/ajkachnic)
- [My Website](https://andrewkachnic.now.sh)