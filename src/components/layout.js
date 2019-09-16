import React from "react"
import { Link } from "gatsby"
import Footer from "./footer"
import Header from "./header"


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div>
    <div style={{ margin: `3rem auto`, maxWidth: 1000, padding: `0 1rem` }}>
    <Header/>
    {children}
    </div>
    <Footer/>
    
  </div>

)
