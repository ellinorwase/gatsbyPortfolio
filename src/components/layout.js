import React from "react"
import { Link } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import { Spring } from "react-spring/renderprops"
import Projects from "./projects"
import Menu from "./menu"
import Intro from "./intro"
import Svg from "../components/svg"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div>
<Intro/>
    <Svg/>
    <Menu/>
    <div style={{ margin: `3rem auto`, maxWidth: 1000, padding: `0 1rem` }}>
      <Header />
    </div>
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 2000, duration: 2000 }}
    >
      {props => (
        <div style={props}>
          <div
            style={{ margin: `3rem auto`, maxWidth: 1000, padding: `0 1rem` }}
          >
            {children}
            <Projects />
          </div>
          <Footer />
        </div>
      )}
    </Spring>
  </div>
)
