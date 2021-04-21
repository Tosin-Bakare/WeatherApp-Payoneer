import React from "react";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";

import "./materialchart.css";

const TemperatureChart = ({ data, convert, unit, index, makeChartData }) => {
  const chartData = makeChartData(data, unit, index);

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
