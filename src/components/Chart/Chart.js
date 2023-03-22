import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const vals = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const max = Math.max(...vals);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={max}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
