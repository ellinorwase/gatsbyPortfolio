import React, { Component } from "react"
import LinkExtend from './extends/linkExtend';

class Menu extends LinkExtend {
  render() {
    return (
      <div style={{display:`contents`}}>
        {this.renderLink('Home', '/')}
        {this.renderLink('Projects', '/#projects')}
        {this.renderLink('Contact', '/#contact')}
      </div>
    )
  }
}

export default Menu;

// <ul className="menu">
// <li>
//   <a href="#start">Start</a>
// </li>
// <li>
//   <a href="#startInfo">Information</a>
// </li>
// <li>
//   <a href="#product">Produkt</a>
// </li>
// <li>
//   <a href="#contact">Kontakt</a>
// </li>
// </ul>