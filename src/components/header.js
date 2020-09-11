import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )

const Header = ({ siteTitle }) => (
  <div style={{ margin: `3rem auto`}}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>{siteTitle}</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right`, display: `inline-block`}}>
        {/* <ListLink to="/work">Work</ListLink>
        <ListLink to="/about/">Github</ListLink>
        <ListLink to="/contact/">LinkedIn</ListLink> */}
        <Link to="/work" style={{marginRight: `1rem`}}>Work</Link>
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
