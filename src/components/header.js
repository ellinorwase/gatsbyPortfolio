import React from "react";
import { Link } from "gatsby";
import { Spring } from 'react-spring/renderprops';
import svg from "../images/profil2.svg"
import {useSpring, animated} from 'react-spring'

// const profile = useSpring({ x: 100, from: { x: 0 } })
  
  
  export default () => (

      <Spring 
      from={{ opacity: 0}}
      to={{ opacity: 1}}
      config={{ delay: 1000, duration: 1000 }}        >
{props => (
    <div style={props}>


<header style={{ marginBottom: `10%` }}>
<Link to="/" style={{ textShadow: `none` }}>
  <h3 className="portfoliotext" > Ellinor Vase</h3>
    <img className="profilePic" src={svg} alt="profilePic"/>


{/* <hr style={{width: `80%`, margin:`auto`, color:`blue`}}></hr> */}
</Link>

</header>
     </div>
)}
     
    </Spring>
    

)

