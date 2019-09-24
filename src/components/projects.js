import React from "react";
import { Link } from "gatsby";
import { Spring } from 'react-spring/renderprops';
import gitPic from "../images/kizzgit.png"
import kizz from "../images/kizz.png"
import adobexd from "../images/adobeXd.png"
import barabarn from "../images/barabarn.png"
import check from "../images/check.png"
import comming from "../images/comming.png"
import pic from "../images/plugg1.svg"

const bilder =[
    {
      img: gitPic,
      text: 'About git',
      link: "https://ellinorwase.github.io/git-project/"
    },
    {
      img: kizz,
      text: 'Kizz',
      link: "https://eager-minsky-400736.netlify.com/"
    },
    {
      img: adobexd,
      text: 'Frontend Tutorail',
      link: "https://ellinorwase.github.io/frontend-tutorial/"
    },
    {
      img: barabarn,
      text: 'Barabarn Böcker',
      link: "https://fridaschoultz.github.io/webbshop/"
    },
]

export default () => (
    <div id="projects">
<Spring 
        from={{ opacity: 0}}
        to={{ opacity: 1}}>
{props => (
<div style={props}>

  <hr></hr> 
  <h3> As said before, I study to become a Frontend Developer. <br /> An education that contains these following courses:</h3>
  <div className="row">
  
  <div id="courses">
  <ul className="courses">
    <li><img className="list-style" src={check} alt=""/>
      Introduction and project methodology</li>
    <li><img className="list-style" src={check} alt=""/>
    Frontend project</li>
    <li><img className="list-style" src={check} alt=""/>
    CMS tools, backend and interaction with databases</li>
    <li><img className="list-style" src={check} alt=""/>
    Graphics Tools</li>
    <li><img className="list-style" src={check} alt=""/>
    HTML and CSS</li>
    <li><img className="list-style" src={check} alt=""/>
    Javascript 1</li>
    <li><img className="list-style" src={check} alt=""/>
    Javascript 2</li>
    <li><img className="list-style" src={check} alt=""/>
    Javascript 3</li>
    <li><img className="list-style" src={comming} alt=""/>
    Javascript 4</li>
    <li><img className="list-style" src={comming} alt=""/>
    Master's thesis</li>
    <li><img className="list-style" src={comming} alt=""/>
    Internship 1 (10 Weeks)</li>
    <li><img className="list-style" src={comming} alt=""/>
    Internship 2 (12 weeks)</li>
  </ul>
  </div>
  <div className="right">
  <img className="right-pic" src={pic} alt=""/>
  </div>
  </div>
  <hr></hr> 

<h1>My Projects</h1>
      <p>
          Here you can find some of the project that I have done.
      </p>
      <h3>Websites:</h3>
      {bilder.map((object, index) => {
          return (
        <div id="card" key={index}>
          <a href={object.link} target="_blank">
            <div className="card" style={{backgroundImage:`url(${object.img})`}}>
            </div>
            <p>{object.text}</p>
          </a>
        </div>
          )
        })}
</div>
      
      )}
    </Spring>
      </div>
)


