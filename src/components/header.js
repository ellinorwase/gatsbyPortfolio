import React from "react";
import { Link } from "gatsby";
import { Spring } from 'react-spring/renderprops';
import profilePic from "../images/images.jpeg";
import svg from "../images/RrQPQL2E01.svg"
import {useSpring, animated} from 'react-spring'

// const profile = useSpring({ x: 100, from: { x: 0 } })
  
  
  export default () => (
      <Spring 
      from={{ opacity: 0}}
      to={{ opacity: 1}}
      config={{ delay: 1000, duration: 1000 }}        >
{props => (
    <div style={props}>


<header style={{ marginBottom: `20%` }}>
<Link to="/" style={{ textShadow: `none` }}>
  <h3 className="portfoliotext" > Ellinor Vase</h3>
    {/* <img className="profilePic" src={profilePic} alt="profilePic"/> */}


{/* <hr style={{width: `80%`, margin:`auto`, color:`blue`}}></hr> */}
</Link>

<div className="animation-area">
         <ul className="box-area">
             <li></li>
             <li></li>
             <li></li>
             <li></li>
             <li></li>
             <li></li>
         </ul>
</div>
</header>
     </div>
)}
     
    </Spring>
    

)

