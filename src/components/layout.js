import React from "react"
import { Link } from "gatsby"

// // Global site tag (gtag.js) - Google Analytics
// <HTML>
// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-146676054-1"></script>

// </HTML>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'UA-146676054-1');


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 950, padding: `0 1rem` }}>
    <header style={{ marginBottom: `20%` }}>
      <Link to="/" style={{ textShadow: `none` }}>
        <h3 className="portfoliotext"> Ellinor Vase</h3>
      </Link>
      <ul className="menu" style={{textDecoration: `none`}}>
        <ListLink to="/">Hem</ListLink>
        <ListLink to="/about/">Arbeten</ListLink>
        <ListLink to="/contact/">Kontakt</ListLink>
      </ul>
    </header>
    {children}
  </div>
)