import React from "react"
import examensbevis from "../images/examensbevisBild.png"
import "../styles/diploma.scss"

export default () => {
  return (
    <div>
      <div className="projects">
        <h1>Higher Vocational Degree</h1>
      </div>
      <div className="diplomaDiv">
        <a href="./examensbevis-2020-ellinor-vase.pdf" download>
        <h3 className="degreePDF">Click here to download PDF</h3>
          </a>
        <a href="https://diplom.nackademin.se/examensbevis-2020-ellinor-vase-6867/" target="_blank">
          <img
            className="degreePic"
            src={examensbevis}
            alt="examensbevis"
          />
        </a>
      </div>
    </div>
  )
}
