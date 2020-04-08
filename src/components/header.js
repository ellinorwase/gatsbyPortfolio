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
          <header className="profileHeader">
            <div className="profileContainer">
              <img className="profilePic" src={svg} alt="profilePic" />
              <h3 className="portfoliotext"> Ellinor Vase</h3>
              <hr className="hr-underline"></hr>
            </div>
          </header>
        </div>
      )}
    </Spring>
  )
}
