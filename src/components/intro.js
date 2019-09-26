import React from "react"
import { Spring } from "react-spring/renderprops"
// import { useSpring, animated } from "react-spring"


export default () => (
  <Spring
    from={{ opacity: 1 }}
    config={{ delay: 3000, duration: 3000 }}
    to={{ opacity: 1 }}
  >
    {props => (
      <div style={props}>
 
        <div className="i1 intro intro-s">
      </div>

      <div className="i2 intro">
           <h6 id="welcome" className="wel">WEL</h6>      
      </div>
      {/* <h6 id="welcome">WELCOME</h6>       */}

      <div className="i3 intro">
      <h6 id="welcome" className="come">COME</h6>      
      </div>

      <div className="i4 intro intro-s">
      </div>
      </div>
    )}
  </Spring>


)

