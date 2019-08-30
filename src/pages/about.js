import React from "react"
import Layout from "../components/layout"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { Bar, Radar, Pie, Doughnut } from "react-chartjs-2"

export default () => (
  <Layout>
    <div>
      <h1>Mina arbeten</h1>
      <p>
        I’m good enough, I’m smart enough, and gosh darn it, people like me!
      </p>

      <h3>My webbsites:</h3>
      <p>
        <OutboundLink
          href="https://ellinorwase.github.io/git-project/"
          target="_blank"
          rel="noopener noreferrer"
        >
          About Git
        </OutboundLink>
      </p>
      <p>
        <OutboundLink
          href="https://ellinorwase.github.io/JS_animations/"
          target="_blank"
          rel="noopener noreferrer"
        >
          JS Animations
        </OutboundLink>
      </p>
      <img
        className="about-pic"
        src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1057&q=80"
        alt=""
      />
    </div>
    <h1>Chart.js:</h1>
    {/* Chart.js */}
    {/* Population */}
    <div>
      <Bar
        data={{
          labels: [2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010],
          datasets: [
            {
              label: "population",
              data: [
                10230185,
                10120242,
                9995153,
                9851017,
                9747355,
                9644864,
                9555893,
                9482855,
                9415570,
              ],
              // backgroundColor: "blue"
              backgroundColor: [
                "#76FEC5",
                "#B40A1B",
                "yellow",
                "orange",
                "#BBC9DD",
                "green",
                "pink",
                "brown",
                "gold",
              ],
              borderWidth: 6,
              hoverBorderColor: "#000",
              hoverBorderWidth: "2",
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: "Population i Sverige",
            fontSize: 40,
            fontFamily: "Serif",
          },
          legend: {
            position: "right",
          },
        }}
      />
    </div>
    {/* Gender */}
    <div>
      <Doughnut
        data={{
          labels: ["Män", "Kvinnor"],
          datasets: [
            {
              label: "gender",
              data: [94, 6],
              backgroundColor: ["rgb(111, 52, 223)", "rgb(1, 152, 123)"],
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: "Andel inskrivna i anstalt i sverige utefter kön",
            fontSize: 30,
          },
        }}
      />
    </div>

    {/* Crime-chart */}
    <div>
      <Pie
        data={{
          labels: ["Pop", "Rock", "Dance/Electronic/House", "Soundtracks", "Hip-Hop/Rap","Songwriter", "Opera/Classical", "R&B", "Blues", "Metal"],
          datasets: [
            {
              label: "number",
              data: [64, 57, 32, 30,26,24,24,23,22,19],
              backgroundColor: ["#FB9F82","#77BD8B", "#A771FE", "#BBC9DD", "#FFC11E", "#5199FF","#F59BAF", "#ARCFEA","#B40A1B", "#380438"],
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: "Världens mest populära genrer",
            fontSize: 40,
            fontFamily: "serif",
          },
        }}
      />

      <Bar
        data={{
          labels: ["Sammanlagda skjutningar", "Antal dödade", "Antal skadade"],
          datasets: [
            {
              label: "number",
              data: [324, 43, 139],
              backgroundColor: ["#AFCFEA", "#76FEC5", "#FED876"],
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: "Skjutningar i Sverige 2017",
            fontSize: 40,
            fontFamily: "serif",
          },
        }}
      />
    </div>
  </Layout>
)
