import React from "react";
import { Link } from "gatsby";
import { Spring } from 'react-spring/renderprops';
import gitPic from "../images/kizzgit.png"
import kizz from "../images/kizz.png"
import adobexd from "../images/adobeXd.png"
import barabarn from "../images/barabarn.png"

const bilder =[
    gitPic,
    kizz,
    adobexd,
barabarn,
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
          Here you can find som om the project that i have done.
      </p>
      <h3>My webbsites:</h3>
      {bilder.map((img, index) => {
          return (
        <div id="card" key={index}>
            <div className="card" style={{backgroundImage:`url(${img})`}}>
            <p key={index[0]}>Info</p>

            </div>
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


