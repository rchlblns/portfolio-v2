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
    --text: #F5F5F6;
    --link: #E29A9E;
    --link-decoration: linear-gradient(to top, rgba(94,49,53,30) 50%, transparent 50%);
    
    .card {
      background: rgba(63,63,63,0.6);
    }

    .brand {
      color: var(--text);
    }

    .mobile-nav {
      background-color: var(--bg);
    }

    .mobile-menu-icon {
      color: var(--link);
    }

    #work-mobile, #about-mobile, #work, #about {
      &:hover {
        background: var(--link-decoration);
      }
    }
    
    a.active {
      background: var(--link-decoration);
    }
  }

  &.light-mode {
    --bg: #F8F6F1;
    --text: #181818;
    --link: #AF4448;
    --link-decoration: linear-gradient(to top, rgba(249,199,201, 30) 50%, transparent 50%);

    #work-mobile, #about-mobile, #work, #about {
      &:hover {
        background: var(--link-decoration);
      }
    }
    
    a.active {
      background: var(--link-decoration);
    }
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

h1 {
  font-family: "Oxygen";
  font-weight: 700;
  margin-top: 3.5rem;
  margin-bottom: 1.78rem;
}

h2 {
  font-family: "Oxygen";
  font-weight: 700;
  margin-top: 0px;
}

p {
  font-family: "Noto Serif";
  font-weight: 400;
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
