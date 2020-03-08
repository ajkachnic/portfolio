/*
<Project Name> Component
Button
*/
import React from 'react'
import {Button, Text, scrollTo} from 'atomize' 
const NewButton = (props) => {
	return (
		<Button bg="highlight" hoverBg="info700" m={{y:"2rem"}} rounded="sm"
		onClick={() => scrollTo(props.scroll)} 
		id={props.id} textColor="white" textSize="heading" textWeight="500" shadow="2" hoverShadow="4" p="2rem">
			{props.text}
		</Button>
	)
}

export default NewButton