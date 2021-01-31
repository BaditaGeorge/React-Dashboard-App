import React from "react";
import { Chart } from "react-google-charts";
import './shareChart.scss';

function ShareChart(props) {
  let mapData = [["x", props.symbol]];
  for (let i = 0; i < props.data.length; i++) {
    mapData.push([i, props.data[i]]);
  }

  return (
    <>
      <div>
        <p className="chartTitle">NASDAQ:{props.symbol}</p>
        <p className="chartPrice">{props.price}</p>
        <p className="low">Low:</p>
        <p className="high">High:</p>
        <p className="open">Open:</p>
        <p className="mcap">Market Cap:</p>
        <p className="ratio">Ratio:</p>
        <p className="lowVal">{props.low}</p>
        <p className="highVal">{props.high}</p>
        <p className="openVal">{props.open}</p>
        <p className="mcapVal">{props.marketCap}</p>
        <p className="ratioVal">{props.ratio}</p>
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={mapData}
          options={{
            pointSize: 15,
            colors: ["#F4F4F4"],
            chartArea: {
              height: "85%",
              width: "100%",
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
