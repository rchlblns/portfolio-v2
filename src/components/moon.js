import React from "react"
import { MoonOutline } from "@styled-icons/evaicons-outline/MoonOutline"

const Moon = (props) => {
    
    const handleClick = () => props.onClick && props.onClick("dark")

    return (
    <MoonOutline size={32} style={{ alignSelf: "center" }} onClick={handleClick} />
    )
}

export default Moon