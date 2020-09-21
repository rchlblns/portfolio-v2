import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const Brand = styled.h3`
  color: #191919;
  display: inline;
`

const Header = ({ siteTitle }) => (
  <div style={{ margin: `3rem auto`}}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <Brand>{siteTitle}</Brand>
      </Link>
      <ul style={{ listStyle: `none`, float: `right`, display: `inline-block`}}>
        <Link to="/work" style={{marginRight: `1rem`}}>Work</Link>
        <Link to="/about" style={{marginRight: `1rem`}}>About</Link>
        <a href="https://github.com/rchlblns" target="_blank" rel="noopener noreferrer" style={{marginRight: `1rem`}}>Github</a>
        <a href="https://linkedin.com/in/richellebillones" target="_blank" rel="noopener noreferrer" >LinkedIn</a>
      </ul>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
