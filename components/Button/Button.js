/*
<Project Name> Component
Button
*/
import React from 'react'
import {Button, Text, scrollTo} from 'atomize' 
const NewButton = (props) => {
	return (
		<Button bg="info600" p={{x:"3rem", y:"2rem"}} align="center" w="15rem" textAlign="center" m={{y:"2rem"}} rounded="md" cursor="pointer" 
		onClick={() => scrollTo(props.scroll)} 
		id={props.id}>
			<Text textColor="white" textSize="heading" textWeight="700">{props.text}</Text>
		</Button>
	)
}

export default NewButton