import React, { useState } from 'react'
import { Text, Container, Row, Col, Div, Image, Icon, Anchor, Button } from 'atomize'

import NewButton  from '../components/Button'
import Card from'../components/Card'
import Switch from '../components/Switch'

export default function App(props) {
    const lightTheme = props.lightTheme
    const darkTheme = props.darkTheme
    const [dark, setDark] = useState(true)
    const gridSizing =  {xs:12, md:6, l:4}
    return (
        <Container bg={dark?darkTheme.mainBg:lightTheme.mainBg} textColor={dark?darkTheme.textColor:lightTheme.textColor}>
                <Button bg={dark?darkTheme.altBg:lightTheme.Bg} w="72px" h="72px" pos="fixed" bottom="15px" right="15px" rounded="50%" onClick={() => {
                    setDark(dark?false:true)
                }}>
                    <Icon name="StarSolid" size="72px" color={dark?lightTheme.mainBg:darkTheme.mainBg}/>
                </Button>
                <Row>

                <Col size={{xs:12, s:12, md:7,l:7}} m="2rem">
                    <Div>
                    <Text tag="h1"  textSize="display3" m={{x:"0", y:"1rem"}}>Hey, I’m Andrew Kachnic &#x1F44B;</Text>
                    <Text tag="h2"  textSize="display2"m={{x:"0", y:"1rem"}}>Meet an energetic, enthusiastic, passionate web developer and designer
                    </Text>
                    <Text textSize="heading">
                    I love working on projects and improving my skills. In fact, I’m currently working on #100Days100Projects, to work on rapid development and turning ideas into working sites.
                    <br/>
                    For over a year, I’ve been honing my skills and creating projects. I currently love minimalism and neomorphism for design and I have been working at incorporating them when I build websites. Other favorites of mine include my favorite font, Inter (used on this site); favorite framework, React, Vue, or Svelte (depends on project). I love web technology and feel free to reach out to me
                    </Text>

                    <NewButton text="Learn More" scroll="#skills"></NewButton>
                    </Div>
                </Col>
                <Col d={{ xs: "none", md: "initial" }} size="5" >
                    <Image src="https://unsplash.it/400/400" d={{ xs: "none", md: "initial" }} m="1rem" w="80%"></Image>
                </Col>
                </Row>
                <Col p="2rem" m="2rem">
                    <Text tag="h2"  textSize="display2" m={{x:"0", y:"1.5rem"}} id="skills">My Skills</Text>
                    
                    <Row flexWrap="wrap"  p={{y:"2rem"}}>
                        <Col size={gridSizing} m={{y:"3rem"}} p="2rem">
                            <Card title="Web Development" body="I am proficient with JavaScript, HTML, and CSS. I'm also familiar with React and Svelte, and using them in a web development workflow" rating="5" dark={dark} darkTheme={darkTheme} lightTheme={lightTheme}></Card>
                        </Col>
                        <Col size={gridSizing} m={{y:"3rem"}} p="2rem">
                            <Card title="API Development" body="I am great at creating and securing REST APIs using the Express.js framework. I'm also capable of integrating many different database structures" dark={dark} darkTheme={darkTheme} lightTheme={lightTheme}></Card>
                        </Col>
                        <Col size={gridSizing} m={{y:"3rem"}} p="2rem">
                            <Card title="DevOps" body="I have been learning how to manage deployed applications and the general process of deployment. I have a strong base of git and how to use it in combination with other tools" dark={dark} darkTheme={darkTheme} lightTheme={lightTheme}></Card>
                        </Col>

                        <Col size={gridSizing} m={{y:"3rem"}} p="2rem">
                            <Card title="Learning New Technologies" body="Perhaps my best skill, I am able to quickly adapt to new technologies, programming languages and frameworks. I can rapidly get up to speed when prompted with something to learn and survive in a new climate" dark={dark} darkTheme={darkTheme} lightTheme={lightTheme}></Card>
                        </Col>
                    </Row>
                </Col>
                <Col p="2rem" m="2rem">
                    <Text tag="h2"  textSize="display2" m={{x:"0", y:"1.5rem"}} id="projects">Projects</Text>
                    <Text tag="p" textSize="subheader">In addition to #100Days100Projects, I’ve also made many other projects that I’ve listed here. If you want to see the projects made for the challenge, check them out on my codepen</Text>
                    <Row flexWrap="wrap"  p={{y:"2rem"}}>
                        <Col size={gridSizing} m={{y:"3rem"}} p="2rem">
                            <Card title="Discord Leaderboard" body="I built a fullstack application for my discord server to rank users. The app uses Express, Svelte and Sapper, and Discord.js. I successfully deployed it to Heroku and zeit.co. I learned about the life cycle of a fullstack site and maintenance on a application. I got a deeper insight into the deployment stage of a website and the importance of uptime" codeLink="https://github.com/ajkachnic/discord-leaderboard-bot" dark={dark} darkTheme={darkTheme} lightTheme={lightTheme}></Card>
                        </Col>
                        <Col size={gridSizing} m={{y:"3rem"}} p="2rem">
                            <Card title="Discord AutoBump" body="I used the Firefox developer tools to investigate Discord, and reverse engineer their API. After this discovery, I wrote a script to automatically send a message promoting my educational discord server. I learned how to use the browser developer tools to reverse engineer APIs and gained a further understanding of API integration" dark={dark} darkTheme={darkTheme} lightTheme={lightTheme}></Card>
                        </Col>
                        <Col size={gridSizing} m={{y:"3rem"}} p="2rem">
                            <Card title="My Portfolio" body="My current portfolio. I designed it in Figma and built it with Next.js, React, and Atomize. I learned more on turning prototypes into a design and how to implement the Atomic Design Strategy" deployLink="https://ajkachnic.now.sh" codeLink="https://github.com/ajkachnic/portfolio" dark={dark} darkTheme={darkTheme} lightTheme={lightTheme}></Card>
                        </Col>
                    </Row>
                </Col>

                <Row m="2rem">
                <Col size={{xs:12, s:12, md:7,l:7}}>
                <Text tag="h2"  textSize="display2" m={{x:"0", y:"1.5rem"}} id="projects">Contact</Text>
                    <Text tag="p" textSize="subheader">If you would like to contact me, you have a few options. You can message me on any of my social medias, <Anchor href="https://discord.gg/CTwgp3e">join my discord server</Anchor>, or <Anchor href="mailto:ajkachnic@protonmail.com">email me</Anchor>. I'm always open to new projects and ideas, so if you want to work with me, don't be afraid to reach out</Text>
                <br/>
                <Div d="flex">
                    <Anchor href="https://dribbble.com/ajkachnic" target="_blank">
                    <Icon name="Dribbble" size="48px" color={dark?darkTheme.textColor:lightTheme.textColor}/>
                    </Anchor>

                    <Anchor href="https://twitter.com/su_andrewk" target="_blank">
                    <Icon name="Twitter" size="48px" color={dark?darkTheme.textColor:lightTheme.textColor}/>
                    </Anchor>
                    <Anchor href="https://github.com/ajkachnic" target="_blank">
                    <Icon name="Github" size="48px" color={dark?darkTheme.textColor:lightTheme.textColor}/>
                    </Anchor>
                    <Anchor href="https://www.linkedin.com/in/andrew-kachnic-3b6691191/" target="_blank">
                    <Icon name="Linkedin" size="48px" color={dark?darkTheme.textColor:lightTheme.textColor}/>
                    </Anchor>
                </Div>
                </Col>
                </Row>
                
        </Container>
    )
}