import React from "react"
import styled from "styled-components"
import { LinkedinSquare, Github } from "@styled-icons/boxicons-logos/"

const StyledFooter = styled.footer`
padding-top: 3em;
text-align: center;
`
const SocialLinks = styled.div`
text-align: center;
padding-top: 1em;
`

const Footer = () => {
    return (
        <StyledFooter>
            © {new Date().getFullYear()}, Built with coffee &amp;
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            <SocialLinks>
            <a href="https://github.com/rchlblns" target="_blank" rel="noopener noreferrer" style={{ marginRight: `1rem` }} aria-label="Github"><Github size={32} /></a>
            <a href="https://linkedin.com/in/richellebillones" target="_blank" rel="noopener noreferrer" ><LinkedinSquare size={32} aria-label="LinkedIn"/></a>
          </SocialLinks>
        </StyledFooter>
    )
}

export default Footer