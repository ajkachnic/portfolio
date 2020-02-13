import React from 'react'
import { Icon, Div, Button } from 'atomize'


const Switch = props => {
    return (
        <Button bg="info700" shadow="2" w="72px" h="72px" pos="fixed" bottom="0px" right="0px" rounded="50%">
            <Icon name="RBUnchecked" size="72px" />
        </Button>
    )
}

export default Switch