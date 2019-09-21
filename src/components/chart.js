import React from "react"
import { Doughnut } from "react-chartjs-2"


export default () => (

//  work 
    <div className="chart">
      <Doughnut
        data={{
          labels: ["Karolinska University Hospital", "SF-bio", "Preschool teacher"],
          datasets: [
            {
              label: "gender",
              data: [1, 0.5, 4],
              backgroundColor: ["#D1E8E2","#2C3531", "#D9B08C"],
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
)