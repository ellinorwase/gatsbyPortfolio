import React from "react"
import linkedin from "../images/iconmonstr-linkedin-3.svg"
import facebook from "../images/iconmonstr-facebook-3.svg"
import github from "../images/iconmonstr-github-3.svg"
import gmail from "../images/iconmonstr-gmail-3.svg"
import phone from "../images/iconmonstr-smartphone-3.svg"
import Menu from "./menu"

export default () => (
  <footer className="footer" id="contact">
    <ul className="footer-menu" style={{ textDecoration: `none` }}>
      <div className="footer-m">
        <Menu />
      </div>
      <div className="logo-pics">
        <a
          href="https://www.linkedin.com/in/ellinor-vase-38075716b/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="" target="_blank">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://github.com/ellinorwase" target="_blank">
          <img src={github} alt="github" />
        </a>
        <a href="mailto:ellinor.wase@gmail.com" target="_blank">
          <img src={gmail} alt="gmail" />
        </a>
      </div>
    </ul>
    <hr style={{ width: `80%`, margin: `auto` }}></hr>
    <ul className="footer-contact">
      <h3>Wish to contact me?</h3>
      <img className="phone-pic" src={phone} alt="phone" />
      <li>
        <h4>Email:</h4>
        <p>
          <a href="mailto:ellinor.wase@gmail.com">ellinor.wase@gmail.com</a>
        </p>
      </li>
      <li>
        <h4>Phone-number:</h4>
        <p>
          <a href="tel:0763268818">076-326 88 18</a>
        </p>
      </li>
    </ul>
  </footer>
)
