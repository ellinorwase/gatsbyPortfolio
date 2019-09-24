import React from "react"
import { Link } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import { Spring } from "react-spring/renderprops"
import Projects from "./projects"
import Menu from "./headerMenu"
import Intro from "./intro"
import Svg from "../components/svg"
import BoxArea from "../components/box-area";
import Chart from "../components/chart";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ marginBottom: `0px`}}>
 <Intro/>
<div className="relative">
  <div className="Head">
    <Svg/>
    <Menu/>
  </div>
    <div style={{ margin: `0 auto`, maxWidth: 1000, padding: `0rem 1rem 0 1rem` }}>
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
            style={{ margin: `0 auto`, maxWidth: 1000, padding: `0 1rem` }}
          >
            {children}
            <Chart/>
            <Projects />
            <BoxArea/>
          </div>       
        </div>
        
      )}
      
    </Spring>
<Footer />  
</div>
  </div>
)
