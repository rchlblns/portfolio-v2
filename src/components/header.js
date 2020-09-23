import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { SunOutline, MoonOutline, MenuOutline } from "@styled-icons/evaicons-outline/"

const Navbar = styled.div`
padding-bottom: 1.5em;
display: flex;
position: relative;
justify-content: space-between;

@media (max-width: 530px) {
position: sticky;


}
`

const NavLink = styled(Link)`
margin-right: 1em;
`

const Brand = styled.h3`
color: #181818;
display: inline;
`
const Toggle = styled(MenuOutline)`
display: none;
height: 100%;
cursor: pointer;
height: 2em;

@media (max-width: 530px) {
  display: flex;
}
`
const Navbox = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;

@media (max-width: 530px) {
  flex-direction: column;
  position: fixed;
  width: 100%;
  justify-content: flex-start;
  padding-top: 10vh;
  // background-color: #fff;
  transition: all 0.3 ease-in;
  top: 8vh;
  left: ${props => props.open ? "-100%" : "0"}
}
`

const Hamburger = styled.div`
background-color: #111;
align-self: center;
position: relative;

`

// const ThemeButton = styled.div`
// float: right
// `


const Header = ({ siteTitle }) => {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navbar>
      <NavLink to="/">
        <Brand>{siteTitle}</Brand>
      </NavLink>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavLink to="/work" >Work</NavLink>
          <NavLink to="/about" >About</NavLink>
        </Navbox>
      ) : (
          <Navbox open>
            <NavLink to="/work" >Work</NavLink>
            <NavLink to="/about" >About</NavLink>
          </Navbox>
        )}
      <SunOutline size={32} style={{ display: "inline-block" }} />
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
