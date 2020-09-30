import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import Header from "./header"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
body {
  background-color: var(--bg);
  color: var(--text);

  &.dark-mode {
    --bg: #292929;
    --text: #F5F5F5;
    --link: #DCA7A8;
  }

  &.light-mode {
    --bg: #F8F6F1;
    --text: #181818;
    --link: #AF4448;
  }
}

.page-title {
  font-size: 52px;
  line-height: 1.0;
}

a:visited, a:link {
  color: var(--link);
  text-decoration: none;
  text-shadow: none; 
}
`

const Wrapper = styled.div`
  margin: 2.5rem auto;
  max-width: 1000px;
  padding: 0 1rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        } 
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
        <Wrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer />
        </Wrapper>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
