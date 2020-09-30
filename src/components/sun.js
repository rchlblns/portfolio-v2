import React from "react"
import {SunOutline} from "@styled-icons/evaicons-outline/SunOutline"

const Sun = (props) => {
    
    const handleClick = () => props.onClick && props.onClick("light")

    return (
    <SunOutline size={32} style={{ alignSelf: "center" }} onClick={handleClick} />
    )
}

export default Sun