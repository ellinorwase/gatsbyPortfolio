import React from "react"
import { Doughnut } from "react-chartjs-2"

export default () => (
  // work
  <div>
    <div className="chart">
      <Doughnut
        data={{
          labels: [
            "Karolinska University Hospital",
            "Cinema employee",
            "Preschool teacher",
            "Booli, HittaMäklare",
          ],
          datasets: [
            {
              label: "gender",
              data: [1, 0.5, 4, 0.5],
              backgroundColor: ["#300b3f", "#2C3531", "#116466", "#4f1a1a"],
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: "Previous Work-experience",
            fontSize: 30,
          },
        }}
      />
    </div>
    <div className="info-job">
      <p style={{ color: `#116466` }}>
        For 4+ years I worked at a Preschool called Herkules on Lidingö in Stockholm. I had
        responsibility in a children's group and was also responsible for cooking lunches during a year. Since the start of the education I
        have remained as a substitute.
      </p>
      <p style={{ color: `#300b3f` }}>
        I worked as a Assistant at Astrid Lindgren Children's Hospital, emergency department, in Solna in Stockholm.
        I had responsibility for disinfecting rooms, refilling medicines, etc.
      </p>
      <p style={{ color: `#2C3531` }}>
        For a short period of time I worked at the cinema called SF-bio, south in Stockholm. What I did at SF-Bio was to work at the cash register, replenish goods
        and service.
      </p>
      <p style={{ color: `#4f1a1a` }}>
        As the final part of my education we had an internship of a total of 22
        weeks which I spent at the company Booli in Stockholm. I worked in a team called HittaMäklare where I helped develop parts of their website. Apart from Javacsript, html and CSS I worked in react, ruby on rails and haml etc.
      </p>
    </div>
  </div>
)
