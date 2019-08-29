import React from "react"
import Layout from "../components/layout"
import { OutboundLink } from 'gatsby-plugin-google-analytics'


export default () => (
    <Layout>
  <div>
    <h1>Mina arbeten</h1>
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
   

    <h3>My webbsites:</h3>
    <p>
      <OutboundLink href="https://ellinorwase.github.io/git-project/" target="_blank" rel="noopener noreferrer">About Git</OutboundLink>
    </p>
    <p>
    <OutboundLink href="https://ellinorwase.github.io/JS_animations/" target="_blank" rel="noopener noreferrer">JS Animations</OutboundLink>
    </p>
    <img className="about-pic" src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1057&q=80" alt="" />
  </div>
  </Layout>

)