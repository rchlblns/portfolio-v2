import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Header from "./header"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
a:visited, a:link {
  color: #B06E5F;
  text-decoration: none;
  text-shadow: none;
}
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
      <div style={{ margin: `3rem auto`, maxWidth: 850, padding: `0 1rem` }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
