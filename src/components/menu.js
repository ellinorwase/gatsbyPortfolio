import React, { Component } from "react"
import { Link } from "gatsby"

class Menu extends Component {
  render() {
    return (
      <div style={{display:`contents`}}>
        <Link to="/" className="h-menu nav-link nav-link-ltr">
          Home
        </Link>
        <Link to="/#projects" className="h-menu nav-link nav-link-ltr">
          Projects
        </Link>
        <Link to="/#contact" className="h-menu nav-link nav-link-ltr">
          Contact
        </Link>
      </div>
    )
  }
}

export default Menu;