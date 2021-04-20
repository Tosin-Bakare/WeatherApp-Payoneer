import React, { useState } from "react";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";

import "./materialchart.css";

const chartData = [
  { temperature: "23F", value: 23 },
  { temperature: "28F", value: 28 },
  { temperature: "18F", value: 18 },
  { temperature: "12F", value: 12 },
  { temperature: "20F", value: 20 },
  { temperature: "15F", value: 15 },
  { temperature: "17F", value: 17 },
  { temperature: "2F", value: 2 },
];

const TemperatureChart = ({ data }) => {
  console.log(data);
  const [state] = useState(chartData);

  return (
    <div className="m-5 chart-container">
      <Chart data={state}>
        <ArgumentAxis />
        <BarSeries valueField="value" argumentField="temperature" />
        <Animation />
      </Chart>
    </div>
  );
};

export default TemperatureChart;
