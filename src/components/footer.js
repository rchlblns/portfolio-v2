import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
padding-top: 3em;
`


const Footer = () => {
    return (
        <StyledFooter>
            © {new Date().getFullYear()}, Built with coffee &amp;
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </StyledFooter>
    )
}

export default Footer