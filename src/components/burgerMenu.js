import React, { Component } from "react";
import "../styles/burgerMenu.css";

export class burgerMenu extends Component {
  state = {
    closed: true
  }

  myRef = React.createRef();

  closeMenu = () => {
    this.setState({closed: !this.state.closed})
    const { current } = this.myRef;

    current.checked = this.state.closed
  }

  render() {
    const { closed } = this.state;
    const style =  `translate(${closed ? '-100' : '0'}%, 0)`;

    return (
      <div className="fixed">
        <nav>
          <div id="menuToggle" onClick={() => this.closeMenu()}>
            <input type="checkbox" ref={this.myRef} />
            <span></span>
            <span></span>
            <span></span>

            <ul className="menu" id="menu" style={{transform: style}}>
              <li onClick={() => this.closeMenu()}>
                <a href="#start">Start</a>
              </li>
              <li onClick={() => this.closeMenu()}>
                <a href="#projects">Projects</a>
              </li>
              <li onClick={() => this.closeMenu()}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default burgerMenu;
