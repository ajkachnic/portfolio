import React from 'react';
import IndexLayout from '../layouts/indexLayout';

const App = () => {
  const skills = [
    {
      title: 'Web Development',
      body: 'The main focus of my learning has been on web development. As a result, I am proficient with JavaScript, HTML, CSS, along with other technologies. I spend a lot of time working on web-based projects',
    },
    {
      title: 'API Development',
      body: 'To complement my front-end projects, I am also good a backend development. I have an understanding of frameworks like Express and creating REST APIs with vanilla JavaScript. I also have experience implementing many different database platforms',
    },
    {
      title: 'DevOps',
      body: 'Recently, I have been learning many common tools involved in DevOps, like Docker, and CI/CD\'s. I have a solid understanding of Linux and deploying and managing projects',
    },
    {
      title: 'Learning New Technologies',
      body: 'Perhaps my best skill, I am able to quickly adapt to new technologies, programming languages and frameworks. I can rapidly get up to speed when prompted with something to learn and survive in a new climate',
    },
  ];

  const projects = [
    {
      title:'Interium',
      body:'A NoSQL Database I\'m building with Golang. I am planning on making packages for a bunch of programming languages. Currently it uses HTTP',
    },
    {
      title: 'KennyK BBQ Site',
      body: 'A website I built for my father\'s catering business. The site offers much more customization with that of a website builder. I wrote it using Next.js and NetlifyCMS.'
    },
    {
      title: 'Discord Leaderboard',
      body: 'I created a discord bot for my server. I also wrote a backend using Express and MongoDB for storage. It turned out pretty well'
    }
  ]

  return (
    <>
    <IndexLayout
      data={{
        intro: {
          title: 'Hey, I\'m Andrew Kachnic',
          body: `I am a passionate, energetic web developer. From the first line of code I wrote, I fell in love with programming and pursuing learning. Everything I create has my heart poured into it. Rapid prototyping and development is one of my specialties. I am devoted to the craft of coding and the challenges involved.
          
          For a year and a half, I have been honing my skills and working
          on projects. Minimalism is always something I like to having
          accompany my designs. I have mainly used React as my javascript
          framework, but I am branching out to different technologies and trying to learn about them. If you have any questions or just want to talk, feel free to reach out to me.
          `
        },
        skills: {
          title: 'My Skills',
          skills
        },
        footer: {
          body: 'This site is currently a work in progress. I am actively developing it',
        },
        projects: {
          title: 'Projects',
          projects
        },
        contact: {
          title: 'Contact me',
          body: `If you would like to contact me, you can reach on any of me social media, or on my discord server (all linked below). You can also email me at ajkachnic@protonmail.com
          
          I'm always open to new projects and ideas, so if you want to work with me, don't be afraid to reach out
          `
        }
        
      }}
    />
    </>
  );
};

export default App;
