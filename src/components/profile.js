import React from "react"
import { Spring } from "react-spring/renderprops"
import Profile from "../images/PP-color.png";

export default () => (
<Spring 
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        config={{ delay: 2000, duration: 2000 }} 
        >
{props => (
<div style={props}>
  <div className="PP">
  <img className="profile-pic" src={Profile} alt=""/>
  </div>
<p style={{marginLeft: `75%`}}>Hover to see me 🤗</p>
</div>
)}
     
</Spring>


)
