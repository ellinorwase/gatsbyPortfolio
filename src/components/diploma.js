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
        <h3>Click to download</h3>
        <a href="./examensbevis-2020-ellinor-vase.pdf" download>
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
