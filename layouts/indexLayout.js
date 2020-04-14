import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

import {
  Container,
  Title,
  Body,
  Button,
  Heading,
  Card,
  Footer,
  ThemeContext,
} from "../components";
import Head from "next/head";
import Link from "next/link";

const IndexLayout = ({ data }) => {
  const theme = useContext(ThemeContext);

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
            gap: 1.5rem;
          }
          .icon__grid {
            display: grid;
            grid-template-columns: repeat(4, 48px);
            gap: 2rem;
          }
          li.nav__item a {
            color: #fff;
            text-decoration: none;
          }
          nav {
            position: fixed;
            width: 100%;
            background: ${theme.colors.background};
            top: 0;
            padding: 1.5rem 0;
            left: 0;
            z-index: 2;
          }
          nav ul.nav {
            list-style: none;
            display: flex;
            justify-content: space-around;
            width: 100%;
          }
          .nav__item {
            font-weight: 700;
            font-size: 1.25em;
          }
        `}
      </style>

      <Container>
        <nav>
          <ul className="nav">
            <li className="nav__item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/blog">
                <a href="/blog" target="_parent">
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <section>
          <Fade top>
            <Title>{data.intro.title}</Title>
          </Fade>
          <Fade>
            <Body>{data.intro.body}</Body>
            <Button link="#skills">Learn More</Button>
          </Fade>
        </section>
        <section id="skills">
          <Fade top>
            <Heading>{data.skills.title}</Heading>
          </Fade>
          <div className="card__grid">
            {data.skills.skills.map(({ title, body }, index) => (
              <Fade top key={index}>
                <Card title={title} body={body} key={index} />
              </Fade>
            ))}
          </div>
        </section>

        <section id="projects">
          <Fade top>
            <Heading>{data.projects.title}</Heading>
          </Fade>
          <div className="card__grid">
            {data.projects.projects.map(({ title, body, link }, index) => (
              <Fade top key={index}>
                <Card title={title} body={body} key={index} />
              </Fade>
            ))}
          </div>
        </section>
        <section id="contact">
          <Fade top>
            <Heading>{data.contact.title}</Heading>
          </Fade>
          <Fade top>
            <Body>{data.contact.body}</Body>
          </Fade>

          <div className="icon__grid">
            <a href="https://discord.gg/CTwgp3e">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"
                  fill={theme.colors.foreground}
                />
              </svg>
            </a>
            <a href="https://twitter.com/su_andrewk">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  scale="2"
                  fill={theme.colors.foreground}
                  viewBox="0 0 48 48"
                  d="M20.4240011,6.75697057 C19.7837813,7.05498022 19.0944711,7.25651193 18.3714114,7.34655801 C19.1098119,6.88346388 19.6763962,6.14915952 19.9433249,5.27442615 C19.2519693,5.70321702 18.488001,6.01516237 17.6718741,6.18239081 C17.0214272,5.45451832 16.0917789,5 15.0629273,5 C13.0901094,5 11.48956,6.67764426 11.48956,8.74656019 C11.48956,9.04028193 11.5202414,9.32542786 11.5816043,9.59985401 C8.6106163,9.44334534 5.97712432,7.95329709 4.21294038,5.68392143 C3.90510307,6.2392056 3.72919603,6.88346388 3.72919603,7.56952926 C3.72919603,8.86876558 4.36021139,10.0157812 5.31951837,10.6879108 C4.7345252,10.6696872 4.18225892,10.4992429 3.69953729,10.2205288 L3.69953729,10.2666238 C3.69953729,12.0825531 4.93190926,13.5972569 6.56825378,13.9402895 C6.26859819,14.0281917 5.95257916,14.0721427 5.62633297,14.0721427 C5.39622202,14.0721427 5.17122464,14.0496312 4.95338628,14.0056802 C5.4084946,15.4935845 6.72779738,16.5773534 8.29255183,16.6062968 C7.0693843,17.6118113 5.52712958,18.2110466 3.85294458,18.2110466 C3.56453886,18.2110466 3.27920128,18.1938949 3,18.1595917 C4.58214061,19.2208491 6.46189139,19.8415238 8.47970874,19.8415238 C15.0557683,19.8415238 18.6506127,14.1332454 18.6506127,9.18178292 C18.6506127,9.01884239 18.6475445,8.85590186 18.6414083,8.69617726 C19.3399228,8.16769252 19.946393,7.50842656 20.4240011,6.75697057"
                />
              </svg>
            </a>
            <a href="https://github.com/ajkachnic" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  fill={theme.colors.foreground}
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/andrew-kachnic-3b6691191/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill={theme.colors.foreground}
              >
                <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </section>
        <Footer body={data.footer.body} />
      </Container>
    </div>
  );
};

export default IndexLayout;
