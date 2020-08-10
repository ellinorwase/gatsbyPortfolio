import React from "react"
import { Link } from "gatsby"
import { Spring } from "react-spring/renderprops"
import BurgerMenu from "../components/burgerMenu"
import Intro from "./intro"
import Header from "./header"
import Menu from "./headerMenu"
import Svg from "./profile"
import Chart from "../components/chart"
import Projects from "./projects"
import Diploma from "./diploma"
import BoxArea from "../components/box-area"
import Footer from "./footer"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  return (
    <div>
      <Intro />
      <div className="relative">
        <div className="Head">
          <Svg />
        </div>
        <div
          style={{
            maxWidth: 1000,
            padding: `0rem 1rem 0 1rem`,
          }}
        >
          <Menu />
          <BurgerMenu />
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
                <Chart />
                <Projects />
                <Diploma />
                <BoxArea />
              </div>
            </div>
          )}
        </Spring>
      </div>
      <Footer />
    </div>
  )
}
