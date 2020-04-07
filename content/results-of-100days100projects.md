---
title: "My Results with 100 Days 100 Projects"
date: "2020-04-07"
description: "The final chapter in the story that is my run of 100 Days 100 Projects"
tags: [
  "challenge",
  "webdev",
]
---
A few days ago, I finished the [100days100projects](https://www.florin-pop.com/blog/2019/09/100-days-100-projects/) challenges, started by [Florin Pop](https://twitter.com/florinpop1705). I originally intended to do it for 30 days, but I just kept going.

Throughout the challenge, I drew some conclusions and found some resources that helped.



## Some Conclusions
I found that when I was making projects, it was easier to either focus on a nice, clean UI or a functional project. Most times, it was either one or the other.

For most of them, I got right into the programming rather than designing them beforehand. This allowed me to quickly develop the site, instead of focusing on the design.

Finally, I found that I was able to do these projects fairly quickly when I focused on good design or good functionality.

## Tips and Tricks
The most helpful tip I can give is making a boilerplate code snippet. Something that setups up your fonts, CSS variables (custom properties), and basic HTML structure. Here is an example

`index.html` - 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Template</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="content">
    </div>
</body>
<script src="index.js"></script>
</html>
```
`style.scss` - 
```css
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:root {
  --accent:#1187fc;
  --dark: #333;
  --neutral: #ddd;
  --light: #fff;
  --body: #151515;

  width: 100%;
  height: 100%;
}


body {
  font-family: sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125em;
  line-height: 1.6;
  color: var(--body);
  background: var(--neutral);
  overflow-x: hidden;
}

a { 
  color: var(--accent);
}

.content {
  background: var(--light);
  width: 70vw;
  padding: 3em;
  box-shadow: 0 0 3em rgba(0,0,0,.15);
}
```
[This snipper generator](https://snippet-generator.app/) should help you out with this


Setting up templates allows you to get out of the repetitive setup and into the actual programming

My second tip is to try to be distraction-free while working on the project. You will be much more focused if you are away from distractions.

## Resources
- [Florin Pop's list](https://www.florin-pop.com/blog/2019/09/100-days-100-projects/)
- [CollectUI](http://collectui.com/)
- [Dribbble](https://dribbble.com/)
- [dev.to](https://dev.to)

All of these gave me inspiration on my journey. Later on in the challenge, one of the biggest bits of help was CollectUI's navigation section (the list of types of projects). It helped a lot when I was out of ideas.

Also, just looking up project ideas can ***sometimes*** yield great results. It just depends on what you search and how deeply you look.

## What's Next
For me personally, I'm gonna take a 1-2 break from challenges. Afterward, I will probably try out [1 Product a Week](https://1productaweek.com/) or [12 Startups in 12 Months](https://levels.io/12-startups-12-months/).

I'm going to continue programming every day that I can and working hard to improve my skills.

## Wrapping Things Up
If you read this, thank you for your time ❤️. If you got to this point and you are debating whether you should try the challenge, try it. You can start with a shorter time and if you like it, extend it. 

I hope you enjoyed reading this as much as I enjoy writing it. Please like and comment if you did enjoy, this article was 100 days in the making.

**Social Media**

- [Twitter](https://twitter.com/su_andrewk)
- [Github](https://github.com/ajkachnic)
- [My Website](https://andrewkachnic.now.sh)