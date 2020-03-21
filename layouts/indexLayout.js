import React, { useContext } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import {
  Container, Title, Body, Button, Heading, Card, Footer, ThemeContext,
} from '../components';

const IndexLayout = ({ data }) => {
  const theme = useContext(ThemeContext);
  const skillsCards = [
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


  return (
    <div className="main">
      <style jsx global>
        {`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: Avenir;
            scroll-behavior: smooth;
            white-space: pre-line;
          }
          :root {
            height: 100%;
            width: 100%;
            background: ${theme.colors.background};
            color: ${theme.colors.foreground};
          }
          @font-face {
            font-family: Avenir;
            src: url(/fonts/Avenir-Medium.ttf);
            font-weight: 500;
          }
          @font-face {
            font-family: Avenir;
            src: url(/fonts/Avenir-Book.ttf);
            font-weight: 300;
          }
          @font-face {
            font-family: Avenir;
            src: url(/fonts/Avenir-Heavy.ttf);
            font-weight: 700;
          }
          @font-face {
            font-family: Avenir;
            src: url(/fonts/Avenir-Black.ttf);
            font-weight: 900;
          }
        `}
      </style>
      <style jsx>
        {`
          section {
            padding: 3rem 0;
          }
          .main {
            display: grid;
            margin: auto;
          }

          .card__grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap:1.5rem;
          }
        `}
      </style>
      <Head>
        <title>Andrew Kachnic</title>
        <NextSeo
          title="I'm Andrew Kachnic"
          description="Meet a passionate, energetic web developer."
          openGraph={{
            type: 'website',
            url: 'https://andrewkachnic.now.sh',
            site_name: 'Andrew Kachnic Portfolio',
            locale: 'en_IE',
            title: 'I\' Andrew Kachnic',
            description: 'Meet a passionate, energetic web developer.',
          }}
          twitter={{
            handle: '@su_andrewk',
            cardType: 'summary_large',
          }}
        />
      </Head>
      <Container>
        <section>
          <Title>{data.intro.title}</Title>

          <Body>
            {data.intro.body}
          </Body>
          <Button link="#skills">Learn More</Button>
        </section>
        <section id="skills">
          <Heading>{data.skills.title}</Heading>
          <div className="card__grid">
            { data.skills.skills.map(({ title, body }, index) => (
              <Card title={title} body={body} key={index} />
            )) }
          </div>
        </section>

        <Footer body={data.footerBody}/>
      </Container>
    </div>
  );
};

export default IndexLayout;
