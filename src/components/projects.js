import React from "react";
import { Link } from "gatsby";
import { Spring } from 'react-spring/renderprops';
import gitPic from "../images/aboutgit.png"

export default () => (
<Spring 
        from={{ opacity: 0}}
        to={{ opacity: 1}}>
{props => (
<div style={props} id="projects">

<h1>Mina arbeten</h1>
      <p>
        I’m good enough, I’m smart enough, and gosh darn it, people like me!
      </p>

      <h3>My webbsites:</h3>

        {/* <p>About Git</p>

      <a href="https://ellinorwase.github.io/git-project/"
        target="_blank">
        <img className="git-pic" src={gitPic} alt="gitPic"/>
        </a> */}
        
      
     </div>
     )}
    </Spring>
)


