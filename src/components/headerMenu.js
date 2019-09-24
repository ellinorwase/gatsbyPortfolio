import React from "react"
import { Link } from "gatsby"
import { Spring } from "react-spring/renderprops"
import Meny from "./menu"

export default () => (
  <Spring from={{ opacity: 0 }} config={{ delay: 4000, duration: 1000 }} to={{ opacity: 1 }}>
    {props => (
      <div style={props} >
        <nav id="slide">
          <ul className="menu" style={{ textDecoration: `none` }} id="navbar">

          <Meny/>
          </ul>
        </nav>
      </div>
      
    )}
  </Spring>
  
)
