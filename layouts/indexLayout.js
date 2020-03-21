import React, { useContext } from "react";
import { useSpring, animated } from 'react-spring';

import {
  Container,
  Title,
  Body,
  Button,
  Heading,
  Card,
  Footer,
  ThemeContext
} from "../components";


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
        `}
      </style>

      <Container>
        <section>
          <Title>{data.intro.title}</Title>

          <Body>{data.intro.body}</Body>
          <Button link="#skills">Learn More</Button>
        </section>
        <section id="skills">
          <Heading>{data.skills.title}</Heading>
          <div className="card__grid">
            {data.skills.skills.map(({ title, body }, index) => (
              <Card title={title} body={body} key={index} />
            ))}
          </div>
        </section>

        <Footer body={data.footer.body} />
      </Container>
    </div>
  );
};

export default IndexLayout;
