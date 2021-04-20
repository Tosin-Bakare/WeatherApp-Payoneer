import React, { useState } from "react";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";

import "./materialchart.css";

const TemperatureChart = ({ data, setChartData, unit, index }) => {
  // const [state] = useState(chartData);

  const makeChartData = (data, unit, index) => {
    const newData = Object.values(data[index]);
    const temperatures = [];
    newData.map((data) =>
      temperatures.push({
        temperature: `${data.main.temp}${unit === "Fahrenheit" ? "F" : "C"}`,
        value: data.main.temp,
      })
    );
    return temperatures;
  };

  const chartData = makeChartData(data, unit, index);
  console.log(chartData);
  return (
    <div className="m-5 chart-container">
      <Chart data={chartData}>
        <ArgumentAxis />
        <BarSeries valueField="value" argumentField="temperature" />
        <Animation />
      </Chart>
    </div>
  );
};

export default TemperatureChart;
