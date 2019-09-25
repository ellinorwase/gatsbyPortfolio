import React from "react";
import { Spring } from 'react-spring/renderprops';
import svg from "../images/profil2.svg"
  
  export default () => {
    return (

      <Spring 
      from={{ opacity: 0}}
      to={{ opacity: 1}}
      config={{ delay: 1000, duration: 3000 }}        >
{props => (
    <div style={props}>


<header style={{ marginBottom: `10%` }}>
  <h3 className="portfoliotext" > Ellinor Vase</h3>
    <img className="profilePic" src={svg} alt="profilePic"/>
  <hr style={{width: `60%`, marginRight:`40%`, color:`blue`}}></hr>


</header>
     </div>
)}
     
    </Spring>
    

)
  }

