import React from "react"
import { Spring } from "react-spring/renderprops"
import pussle from "../images/imageedit_17_6550897277.png";

export default () => (
<Spring 
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        config={{ delay: 2000, duration: 2000 }} 
        >
{props => (
<div style={props}>
  <img className="profile-pic" src={pussle} alt="pussle"/>
</div>
)}
     
</Spring>


)
