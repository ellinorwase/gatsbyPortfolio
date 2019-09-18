import React from "react"
import { Spring } from "react-spring/renderprops"
import { useSpring, animated } from "react-spring"
import welcome from "../images/welcome.png"

// const AnimatedDonut = animated(Donut)

// const round = useSpring({ value: 100, from: { value: 0 } })

export default () => (
  <Spring
    from={{ opacity: 1 }}
    config={{ delay: 3000, duration: 3000 }}
    to={{ opacity: 0 }}
  >
    {props => (
      <div style={props} id="intro" className="intro">
        {/* <AnimatedDonut percent={round.value} /> */}

        <div>
          <h6 className="welcome-intro">Welcome</h6>
        </div>
        <div className="welcome">
          <img src={welcome} alt="welcome" />
        </div>
        <div></div>
      </div>
    )}
  </Spring>
)
