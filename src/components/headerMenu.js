import React from "react"
import Meny from "./menu"

export default () => (
  <div className="slide">
        <nav id="slide">
          <ul className="menu" style={{ textDecoration: `none` }} id="navbar">
          <Meny/>
          </ul>
        </nav>
  </div>
)
