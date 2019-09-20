import React from "react"
import { Doughnut } from "react-chartjs-2"


export default props => (

//  work 
    <div>
      <Doughnut
        data={{
          labels: ["Preschool teacher", "SF-bio", "Karolinska University Hospital"],
          datasets: [
            {
              label: "gender",
              data: [4, 0.5, 1],
              backgroundColor: ["rgb(111, 52, 223)", "rgb(1, 152, 123)", "red"],
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