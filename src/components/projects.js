import React from "react";
import { Link } from "gatsby";
import { Spring } from 'react-spring/renderprops';
import gitPic from "../images/kizzgit.png"
import kizz from "../images/kizz.png"
import adobexd from "../images/adobeXd.png"
import barabarn from "../images/barabarn.png"

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
      loink: "https://fridaschoultz.github.io/webbshop/"
    },
]

export default () => (
    <div id="projects">
<Spring 
        from={{ opacity: 0}}
        to={{ opacity: 1}}>
{props => (
<div style={props}>

<h1>My Projects</h1>
      <p>
          Here you can find som om the project that I have done.
      </p>
      <h3>My webbsites:</h3>
      {bilder.map((object, index) => {
          return (
        <div id="card" key={index}>
          <a href={object.link} target="_blank">
            <div className="card" style={{backgroundImage:`url(${object.img})`}}>
            </div>
            <p>Webbsite: {object.text}</p>
          </a>
        </div>
          )
        })}
      


        {/* <p>About Git</p>

<a href="https://ellinorwase.github.io/git-project/"
target="_blank">
<img className="git-pic" src={gitPic} alt="gitPic"/>
</a> */}
        
</div>
      
      )}
    </Spring>
      </div>
)


