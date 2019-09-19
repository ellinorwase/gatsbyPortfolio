import React from "react"
import { Spring } from "react-spring/renderprops"
import facebook from "../images/iconmonstr-facebook-3.svg";

export default () => (
<Spring 
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        config={{ delay: 2000, duration: 2000 }} 
        >
{props => (
<div style={props}>
  <img className="profile-pic" src={facebook} alt="facebook"/>
</div>
)}
     
</Spring>


)
