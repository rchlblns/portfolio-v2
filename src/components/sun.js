import React from "react"
import styled from "styled-components"
import {SunOutline} from "@styled-icons/evaicons-outline/SunOutline"

const SunIcon = styled(SunOutline)`
align-self: center;
cursor: pointer;
width: 1.5em;
display: inline;

@media (max-width: 321px) {
    width: 1.2em;
}
` 

const Sun = (props) => {
    
    const handleClick = () => props.onClick && props.onClick("light")

    return (
    <SunIcon onClick={handleClick} />
    )
}

export default Sun