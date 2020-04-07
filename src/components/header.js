import React from "react"
import { Spring } from "react-spring/renderprops"
import svg from "../images/profil2.svg"

export default () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 3000 }}
    >
      {props => (
        <div style={props}>
          <header style={{ height: '65vh', position: 'relative'}}>
            <div className="profileContainer">
              <img className="profilePic" src={svg} alt="profilePic" />
              <h3 className="portfoliotext"> Ellinor Vase</h3>
              <hr style={{ width: `85%`, marginRight: `40%` }}></hr>
            </div>
          </header>
        </div>
      )}
    </Spring>
  )
}
