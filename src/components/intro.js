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

          <h6 className="welcome-intro">Welcome</h6>
        
        <div className="welcome">
          <img src={welcome} alt="welcome" />
        </div>
      </div>
    )}
  </Spring>
)

{/* <iframe
          src={video}
          allow="accelerometer; autoplay; encrypted-media;"
          height="100%" width="100%"
          margin="0px"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        /> */}
