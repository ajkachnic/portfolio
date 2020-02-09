import React from 'react'
import { Text, Container, Row, Col, Div, Image, Icon, Anchor } from 'atomize'

import Button  from '../components/Button'
import Card from'../components/Card'

export default function App() {
    const gridSizing =  {xs:12, md:6, l:4}
    return (
        <Container bg="info100">
            <Row m="2rem">
                <Col size={{xs:12, s:12, md:7,l:7}}>
                    <Div>
                    <Text tag="h1"  textSize="display3" m={{x:"0", y:"1rem"}}>Hey, I’m Andrew Kachnic 👋</Text>
                    <Text tag="h2"  textSize="display2"m={{x:"0", y:"1rem"}}>Meet an energetic, enthusiastic, passionate web developer and designer
                    </Text>
                    <Text textSize="heading">
                    I love working on projects and improving my skills. In fact, I’m currently working on #100Days100Projects, to work on rapid development and turning ideas into working sites.
                    <br/>
                    For over a year, I’ve been honing my skills and creating projects. I currently love minimalism and neomorphism for design and I have been working at incorporating them when I build websites. Other favorites of mine include my favorite font, Inter (used on this site); favorite framework, React, Vue, or Svelte (depends on project). I love web technology and feel free to reach out to me
                    </Text>

                    <Button text="Learn More" scroll="#skills"></Button>
                    </Div>
                </Col>
                <Col>
                    <Image src="https://unsplash.it/400/400" d={{ xs: "none", md: "flex" }}></Image>
                </Col>

            </Row>
            <Row m="2rem">
                <Col p="2rem">
                    <Text tag="h2"  textSize="display2" m={{x:"0", y:"1.5rem"}} id="skills">My Skills</Text>
                    
                    <Row flexWrap="wrap"  p={{y:"2rem"}}>
                        <Col size={gridSizing} m={{y:"3rem"}} p="2rem">
                            <Card title="Web Development" body="I am proficient with JavaScript, HTML, and CSS. I'm also familiar with React and Svelte, and using them in a web development workflow" rating="5"></Card>
                        </Col>
                        <Col size={gridSizing} m={{y:"3rem"}} p="2rem">
                            <Card title="API Development" body="I am great at creating and securing REST APIs using the Express.js framework. I'm also capable of integrating many different database structures"></Card>
                        </Col>
                        <Col size={gridSizing} m={{y:"3rem"}} p="2rem">
                            <Card title="DevOps" body="I have been learning how to manage deployed applications and the general process of deployment. I have a strong base of git and how to use it in combination with other tools"></Card>
                        </Col>

                        <Col size={gridSizing} m={{y:"3rem"}} p="2rem">
                            <Card title="Learning New Technologies" body="Perhaps my best skill, I am able to quickly adapt to new technologies, programming languages and frameworks. I can rapidly get up to speed when prompted with something to learn and survive in a new climate"></Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row m="2rem">
                <Col p="2rem">
                    <Text tag="h2"  textSize="display2" m={{x:"0", y:"1.5rem"}} id="projects">Projects</Text>
                    <Text tag="p" textSize="subheader">In addition to #100Days100Projects, I’ve also made many other projects that I’ve listed here. If you want to see the projects made for the challenge, check them out on my codepen</Text>
                    <Row flexWrap="wrap"  p={{y:"2rem"}}>
                        <Col size={gridSizing} m={{y:"3rem"}} p="2rem">
                            <Card title="Discord Leaderboard" body="I built a fullstack application for my discord server to rank users. The app uses Express, Svelte and Sapper, and Discord.js. I successfully deployed it to Heroku and zeit.co. I learned about the life cycle of a fullstack site and maintenance on a application. I got a deeper insight into the deployment stage of a website and the importance of uptime" codeLink="https://github.com/ajkachnic/discord-leaderboard-bot"></Card>
                        </Col>
                        <Col size={gridSizing} m={{y:"3rem"}} p="2rem">
                            <Card title="Discord AutoBump" body="I used the Firefox developer tools to investigate Discord, and reverse engineer their API. After this discovery, I wrote a script to automatically send a message promoting my educational discord server. I learned how to use the browser developer tools to reverse engineer APIs and gained a further understanding of API integration"></Card>
                        </Col>
                        <Col size={gridSizing} m={{y:"3rem"}} p="2rem">
                            <Card title="My Portfolio" body="My current portfolio. I designed it in Figma and built it with Next.js, React, and Atomize. I learned more on turning prototypes into a design and how to implement the Atomic Design Strategy" deployLink="https://ajkachnic.now.sh" codeLink="github.com/ajkachnic/portfolio"></Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row m="2rem">
                <Row>
                <Col size={{xs:12, s:12, md:7,l:7}}>
                <Text tag="h2"  textSize="display2" m={{x:"0", y:"1.5rem"}} id="projects">Contact</Text>
                

                    <Text tag="p" textSize="subheader">If you would like to contact me, you have a few options. You can message me on any of my social medias, join my discord server, or email me.</Text>
                <br/>
                <Div d="flex">
                    <Anchor href="https://dribbble.com" target="_blank">
                    <Icon name="Dribbble" size="48px" />
                    </Anchor>

                    <Anchor href="https://dribbble.com" target="_blank">
                    <Icon name="Twitter" size="48px" />
                    </Anchor>
                    <Anchor href="https://dribbble.com" target="_blank">
                    <Icon name="Github" size="48px" />
                    </Anchor>
                </Div>
                </Col>
                </Row>

            </Row>
        </Container>
    )
}