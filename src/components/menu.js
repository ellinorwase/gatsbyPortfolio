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
