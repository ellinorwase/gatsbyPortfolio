import React from "react"
import Layout from "../components/layout"
import ReactGA from "react-ga"

function initializeReactGA() {
  ReactGA.initialize("UA-180336709-1")
  ReactGA.pageview("/homepage")
}

export default () => {
  initializeReactGA()
  return (
    <Layout>
      <div>
        <h1 className="header">Welcome to my Portfolio</h1>

        <h3>At first i will introduce myself</h3>
        <p>
          As you probably already have seen, from the big heading above, my name
          is Ellinor Vase and I live in Gullmarsplan, Stockholm. I am a 25 year
          old former kindergarden teacher who chose to change course and study
          to become a Frontend Developer at Nackademin in Solna. I have now
          completed my education and I'm therefore looking for a suitable
          workplace to develop my knowledge.
        </p>
      </div>
    </Layout>
  )
}
