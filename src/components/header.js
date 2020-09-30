import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { MenuOutline } from "@styled-icons/evaicons-outline/MenuOutline"
import Sun from "./sun"
import Moon from "./moon"
import useDarkMode from "use-dark-mode"

const Navbar = styled.div`
padding-bottom: 1.5em;
display: flex;
position: relative;
z-index: 2;

@media (max-width: 445px) {
position: sticky;
// align-items: center;
}
`

const NavLink = styled(Link)`
margin-right: 1em;
`

const NavWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 530px) {
  // display: none;
}
`

const Brand = styled.h3`
color: #181818;
display: inline;

@media (max-width: 445px) {
vertical-align: middle;
}
`

const ToggleButton = styled(MenuOutline)`
display: none;
cursor: pointer;
height: 2em;
color: #af4448;

@media (max-width: 445px) {
display: flex;
margin-left: auto;
vertical-align: middle;
}

@media (max-width: 321px) {
align-self: center;
}
`

const Navbox = styled.div`
margin-left: auto;
height: 100%;
align-items: center;
z-index: 6;

@media (max-width: 445px) {
flex-direction: column;
position: fixed;
width: 100%;
justify-content: flex-start;
margin-top: 8vh;
padding-top: 6vh;
padding-bottom: 10vh;
background-color: #F8F6F1;
transition: all 0.3 ease-in;
left: ${props => props.open ? "-100%" : "0"}
}

@media (max-width: 321px) {
margin-top: 12.5vh;
}
`

const Hamburger = styled.div`
background-color: #111;
align-self: center;
position: relative;
`

const Divider = styled.div`
width: 2px;
margin: 6px 0;
margin-right: 1em;
background: #CECECE;

@media (max-width: 445px) {
margin-left: 0.5em;
margin-right: 0.5em;
}
`

const Header = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const darkMode = useDarkMode(false)

  const handleTheme = (theme) => { theme === "dark" ? darkMode.enable() : darkMode.disable() }

  return (
    <Navbar>
      <NavLink to="/">
        <Brand>{`<RichelleBillones />`}</Brand>
      </NavLink>

      <ToggleButton
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </ToggleButton>
      {navbarOpen ? (
        <Navbox>
          <NavWrapper>
            <NavLink to="/work" >Work</NavLink>
            <NavLink to="/about" >About</NavLink>
          </NavWrapper>
        </Navbox>
      ) : (
          <Navbox open>
            <NavLink to="/work" >Work</NavLink>
            <NavLink to="/about" >About</NavLink>
          </Navbox>
        )}
      <Divider />
      {darkMode.value === true ? (
        <Sun onClick={handleTheme} />
      ):(
        <Moon onClick={handleTheme} />
      )}
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
