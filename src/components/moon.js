import React from "react"
import styled from "styled-components"
import { MoonOutline } from "@styled-icons/evaicons-outline/MoonOutline"

const MoonIcon = styled(MoonOutline)`
align-self: center;
cursor: pointer;
width: 1.5em;
display: inline;

@media (max-width: 321px) {
    width: 1.2em;
}
`

const Moon = (props) => {
    
    const handleClick = () => props.onClick && props.onClick("dark")

    return (
    <MoonIcon onClick={handleClick} />
    )
}

export default Moon