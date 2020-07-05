import React from "react"
import { Spring } from "react-spring/renderprops"
import gitPic from "../images/kizzgit.png"
import gitEx from "../images/gitEx.png"

import kizz from "../images/kizz.png"
import adobexd from "../images/adobeXd.png"
import barabarn from "../images/barabarn.png"
import pic from "../images/plugg1.svg"

const bilder = [
  {
    img: gitPic,
    text: "About git",
    link: "https://ellinorwase.github.io/git-project/",
  },
  {
    img: kizz,
    text: "Kizz",
    link: "https://eager-minsky-400736.netlify.com/",
  },
  {
    img: adobexd,
    text: "Frontend Tutorail",
    link: "https://ellinorwase.github.io/frontend-tutorial/",
  },
  {
    img: barabarn,
    text: "Barabarn Böcker",
    link: "https://fridaschoultz.github.io/webbshop/",
  },
  {
    img: gitEx,
    text: "Git and Git-Quiz",
    link: "https://ellinorwase.github.io/how-to-git/",
  },
]

export default () => (
  // <div id="projects">
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {props => (
      <div style={props}>
        <hr></hr>
        <div className="projects">
          <h1>Courses</h1>
        </div>
        <h3>
          {" "}
          As said before, I study to become a Frontend Developer. <br /> An
          education that contains these following courses:
        </h3>
        <div className="row">
          <div className="right">
            <img className="right-pic" src={pic} alt="" />
          </div>
          <div id="courses">
            <ul className="courses">
              <li>✔️ Introduction and project methodology</li>
              <li>✔️ Frontend project</li>
              <li>✔️ CMS tools, backend and interaction with databases</li>
              <li>✔️ Graphics Tools</li>
              <li>✔️ HTML and CSS</li>
              <li>✔️ Javascript 1</li>
              <li>✔️ Javascript 2</li>
              <li>✔️ Javascript 3</li>
              <li>✔️ Javascript 4</li>
              <li>✔️ Master's thesis</li>
              <li>✔️ Internship 1 (10 Weeks)</li>
              <li>✔️ Internship 2 (12 weeks)</li>
            </ul>
          </div>
        </div>
        <div id="projects">
          <hr></hr>
          <div className="projects">
            <h1>My Projects</h1>
          </div>
          <p>Here you can find some of the project that I have done.</p>
          <h3>Websites:</h3>
          <div className="flex-root">
            {bilder.map((object, index) => {
              return (
                <div id="card" key={index}>
                  <a href={object.link} target="_blank">
                    <div
                      className="card"
                      style={{ backgroundImage: `url(${object.img})` }}
                    ></div>
                    <p>{object.text}</p>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )}
  </Spring>
)
