import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const Navbar = styled.div`
padding-bottom: 1.0em;
`

const NavLink = styled(Link)`
margin-right: 1em;
`

const NavList = styled.ul`
list-style: none;
float: right;
display: inline-block;
`

const Brand = styled.h3`
  color: #181818;
  display: inline;
`

const Header = ({ siteTitle }) => (
  <Navbar>
    <Link to="/">
      <Brand>{siteTitle}</Brand>
    </Link>
    <NavList>
      <NavLink to="/work" >Work</NavLink>
      <NavLink to="/about" >About</NavLink>
    </NavList>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
