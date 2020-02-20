/*
<Project Name> Component
Card
*/
import React from 'react'
import {Div, Text, Col, Icon, Anchor} from 'atomize'

const Card = (props) => {
	return (
		<Div bg="altBgColor" shadow="3" hoverShadow="9" maxW="40rem" p={{x:"1rem", y:"1rem"}} rounded="md" m={{y:"1rem"}} textColor="foregroundColor">
			<Col>
			<Text textSize="heading" tag="h2" textWeight="700" m={{t:".5rem", b:"1rem"}}>
				{props.title}
			</Text>
			</Col>

			<Text textSize="title" m={{t:".5rem", b:"1rem"}} textColor="altFgColor">
				{props.body}
			</Text>
			{props.deployLink? <Anchor href={props.deployLink} target="_blank" textSize="subheader">Try it!</Anchor>:<></>}
			<br></br>
			{props.codeLink? <Anchor href={props.codeLink} target="_blank" textSize="subheader">See The Code!</Anchor>:<></>}
		</Div>
	)
}

export default Card