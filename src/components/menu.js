import React from "react"
import { Link } from "gatsby"
import { Spring } from "react-spring/renderprops"

export default () => (
  <Spring from={{ opacity: 0 }} config={{ delay: 1000, duration: 1000 }} to={{ opacity: 1 }}>
    {props => (
      <div style={props} >
        <nav id="slide">
          <ul className="menu" style={{ textDecoration: `none` }} id="navbar">
            <Link to="/" className="h-menu nav-link nav-link-ltr">
              Home
            </Link>
            <Link to="/#projects" className="h-menu nav-link nav-link-ltr">
              Projects
            </Link>
            <Link to="/#contact" className="h-menu nav-link nav-link-ltr">
              Contact
            </Link>
          </ul>
        </nav>
      </div>
    )}
  </Spring>
)
