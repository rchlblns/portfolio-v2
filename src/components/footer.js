import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
padding-top: 3em;
text-align: center;
`


const Footer = () => {
    return (
        <StyledFooter>
            Richelle Billones © {new Date().getFullYear()}, Built with coffee &amp;
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </StyledFooter>
    )
}

export default Footer