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
          ],
          datasets: [
            {
              label: "gender",
              data: [1, 0.5, 4],
              backgroundColor: ["#300b3f", "#2C3531", "#116466"],
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
      I worked for 4 years at a Preschool called Herkules and had responsibility
      in a children's group. Since the start of the education I have remained as
      a substitute.
    </p>
    <p style={{ color: `#300b3f` }}>
      Assistant at Astrid Lindgren Children's Hospital, emergency department.
      Responsibility for disinfecting rooms, refilling medicines, etc.
    </p>
    <p style={{ color: `#2C3531` }}>
      What I did at SF-Bio was to work at the cash register, replenish goods and
      service.
    </p>
    </div>
  </div>
)
