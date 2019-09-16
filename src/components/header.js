import React from "react"
import { Link } from "gatsby"

export default () => (


<header style={{ marginBottom: `20%` }}>
<Link to="/" style={{ textShadow: `none` }}>
  <h3 className="portfoliotext"> Ellinor Vase</h3>
<hr style={{width: `80%`, margin:`auto`, color:`blue`}}></hr> 
</Link>
<ul className="menu" style={{textDecoration: `none`}}>
  <Link to="/" className="h-menu nav-link nav-link-ltr">Home</Link>
  <Link to="/about/" className="h-menu nav-link nav-link-ltr">Projects</Link>
  <Link to="/contact/" className="h-menu nav-link nav-link-ltr">Contact</Link>
</ul>
</header>
)