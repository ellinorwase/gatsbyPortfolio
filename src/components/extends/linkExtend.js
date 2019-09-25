import React, { Component } from "react"
import { Link } from "gatsby"

class LinkExtend extends Component{
    renderLink = (name, path) => {
        return (
            <Link to={path} className="h-menu nav-link nav-link-ltr">
                {name}
            </Link>
        )
    }
}
export default LinkExtend;