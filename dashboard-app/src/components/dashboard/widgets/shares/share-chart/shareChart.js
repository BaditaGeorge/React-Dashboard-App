import React from "react";
import { Chart } from "react-google-charts";

function ShareChart() {
  return (
    <>
      <div>
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["x", "cats"],
            [0, 0],
            [1, 5],
            [2, 15],
            [3, 9],
            [4, 10],
            [5, 5],
            [6, 3],
            [7, 19]
          ]}
          options={{
            colors: ["#F4F4F4"],
            chartArea: {
              height: "85%",
              width: "100%"
            },
            legend: { position: "none" },
            hAxis: {
              baselineColor: "none",
              gridlines: {
                count: 0,
                color: "transparent",
              },
            },
            vAxis: {
              gridlines: {
                color: "transparent",
              },
              baselineColor: "none",
            },
            series: {
              0: { curveType: "function" },
            },
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    </>
  );
}

export default ShareChart;
