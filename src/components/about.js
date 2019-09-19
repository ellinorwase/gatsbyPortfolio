// import React from "react"
// import Layout from "../components/layout"
// import { OutboundLink } from "gatsby-plugin-google-analytics"
// import { Bar, Pie, Doughnut } from "react-chartjs-2"
// import Img from "gatsby-image"

// export default props => (
//   <Layout>
//     <div>
//       <h1>Mina arbeten</h1>
//       <p>
//         I’m good enough, I’m smart enough, and gosh darn it, people like me!
//       </p>

//       <h3>My webbsites:</h3>
//       <OutboundLink
//         href="https://ellinorwase.github.io/git-project/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Img
//           className="git-pic"
//           fluid={props.data.aboutgit.childImageSharp.fluid}
//         />
//         <p>About Git</p>
//       </OutboundLink>
      
//       <p>
//         <OutboundLink
//           href="https://ellinorwase.github.io/JS_animations/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           JS Animations
//         </OutboundLink>
//       </p>

//       <div className="link-div">
//       <OutboundLink
//         href="https://eager-minsky-400736.netlify.com/index.html"
//         target="_blank"
//         rel="noopener noreferrer"
//         >
//         <Img
//           className="git-pic"
//           fluid={props.data.kizz.childImageSharp.fluid}
//           />

//         <p>KIϟϟ</p>
//       </OutboundLink>
//           </div>
//       <img
//         className="about-pic"
//         src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1057&q=80"
//         alt=""
//       />
//     </div>
//     <h1>Chart.js:</h1>
//     {/* Chart.js */}
//     {/* Population */}
//     <div>
//       <Bar
//         data={{
//           labels: [2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010],
//           datasets: [
//             {
//               label: "population",
//               data: [
//                 10230185,
//                 10120242,
//                 9995153,
//                 9851017,
//                 9747355,
//                 9644864,
//                 9555893,
//                 9482855,
//                 9415570,
//               ],
//               // backgroundColor: "blue"
//               backgroundColor: [
//                 "#76FEC5",
//                 "#B40A1B",
//                 "yellow",
//                 "orange",
//                 "#BBC9DD",
//                 "green",
//                 "pink",
//                 "brown",
//                 "gold",
//               ],
//               borderWidth: 6,
//               hoverBorderColor: "#000",
//               hoverBorderWidth: "2",
//             },
//           ],
//         }}
//         options={{
//           title: {
//             display: true,
//             text: "Population i Sverige",
//             fontSize: 40,
//             fontFamily: "Serif",
//           },
//           legend: {
//             position: "right",
//           },
//         }}
//       />
//     </div>
//     {/* Gender */}
//     <div>
//       <Doughnut
//         data={{
//           labels: ["Män", "Kvinnor"],
//           datasets: [
//             {
//               label: "gender",
//               data: [94, 6],
//               backgroundColor: ["rgb(111, 52, 223)", "rgb(1, 152, 123)"],
//             },
//           ],
//         }}
//         options={{
//           title: {
//             display: true,
//             text: "Andel inskrivna i anstalt i sverige utefter kön",
//             fontSize: 30,
//           },
//         }}
//       />
//     </div>

//     {/* Crime-chart */}
//     <div>
//       <Pie
//         data={{
//           labels: [
//             "Dagis",
//             "Grundskola",
//             "Gymnasium",
//             "Jobba på karolinska",
//             "Jobba på Förskola",
//             "Plugga till frontendutvecklare",

//           ],
//           datasets: [
//             {
//               label: "number",
//               data: [4, 10, 3, 0.5, 3.5, 2],
//               backgroundColor: [
//                 "#FB9F82",
//                 "#77BD8B",
//                 "#A771FE",
//                 "#BBC9DD",
//                 "#FFC11E",
//                 "#5199FF",
//                 "#F59BAF",
//                 "#ARCFEA",
//                 "#B40A1B",
//                 "#380438",
//               ],
//             },
//           ],
//         }}
//         options={{
//           title: {
//             display: true,
//             text: "Mitt liv",
//             fontSize: 40,
//             fontFamily: "serif",
//           },
//         }}
//       />

//       <Bar
//         data={{
//           labels: ["Sammanlagda skjutningar", "Antal dödade", "Antal skadade"],
//           datasets: [
//             {
//               label: "number",
//               data: [324, 43, 139],
//               backgroundColor: ["#AFCFEA", "#76FEC5", "#FED876"],
//             },
//           ],
//         }}
//         options={{
//           title: {
//             display: true,
//             text: "Skjutningar i Sverige 2017",
//             fontSize: 40,
//             fontFamily: "serif",
//           },
//         }}
//       />
//     </div>
    
//   </Layout>
// )
// export const query = graphql`
//   query {
//     aboutgit: file(relativePath: { eq: "aboutgit.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 500) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     },
//     kizz: file(relativePath: { eq: "kizz-pic.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 500) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     },
//   }
// `