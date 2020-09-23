import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { SunOutline, MoonOutline, MenuOutline } from "@styled-icons/evaicons-outline/"

const Navbar = styled.div`
padding-bottom: 1.5em;
display: flex;
position: relative;
// align-items: center;

@media (max-width: 445px) {
position: sticky;
// align-items: center;
}
`

const NavLink = styled(Link)`
margin-right: 1em;
`
// const NavWrapper = styled.div`
// margin-left: auto;

// @media (max-width: 530px) {
//   display: none;
// }
// `

const Brand = styled.h3`
color: #181818;
display: inline;

@media (max-width: 445px) {
  vertical-align: middle;
}
`

const ToggleButton = styled(MenuOutline)`
  display: none;
  height: 100%;
  cursor: pointer;
  height: 2em;
  color: #af4448;

  @media (max-width: 445px) {
    display: flex;
    margin-left: auto;
    vertical-align: middle;
  }
`

const Navbox = styled.div`
margin-left: auto;

@media (max-width: 445px) {
  flex-direction: column;
  position: fixed;
  width: 100%;
  justify-content: flex-start;
  margin-top: 8vh;
  padding-bottom: 10vh;
  background-color: #fff;
  transition: all 0.3 ease-in;
  left: ${props => props.open ? "-100%" : "0"}
}
`

const Hamburger = styled.div`
background-color: #111;
align-self: center;
position: relative;
transition: all .3s linear;

// ::before,
// ::after {
//   position: absolute;
// }
// `

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

const Header = ({ siteTitle }) => {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navbar>
      <NavLink to="/">
        <Brand>{siteTitle}</Brand>
      </NavLink>
      {/* <NavWrapper>
        <NavLink to="/work" >Work</NavLink>
        <NavLink to="/about" >About</NavLink>
      </NavWrapper> */}
      <ToggleButton
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </ToggleButton>
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
        <Divider />
      <SunOutline size={32} style={{alignSelf: "center"}}/>
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
