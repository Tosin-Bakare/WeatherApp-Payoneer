import React from "react";
import "./weathercards.css";

const TempBoxes = ({ data, unit }) => {
  const averageTemparature = (days) => {
    const temperatureValues = Object.values(days);

    return (
      temperatureValues.reduce(
        (acc, temperature) => temperature.main.temp + acc,
        0
      ) / temperatureValues.length
    );
  };

  const convertTemperature = (value, unit) => {
    return unit === "Celsius" ? ((value - 32) * (5 / 9)).toPrecision(3) : value;
  };

  const handleScroll = ({ ...target }) => {
    // console.log(target);
  };

  return (
    <div className="card flex p-2 mt-2" onScroll={handleScroll}>
      {data.map((days) => (
        <div
          key={days[0].dt}
          className="temp-container p-4"
          style={{
            height: "180px",
            minWidth: "200px",
            border: "1px solid gray",
            margin: "10px",
            fontSize: "medium",
            fontWeight: "bold",
            scrollSnapAlign: "snap",
          }}
        >
          <h1>Temp:</h1>
          <h1>
            {convertTemperature(averageTemparature(days).toPrecision(3), unit)}
            {unit === "Fahrenheit" ? "F" : "C"}
          </h1>
          <h1>Date: </h1>
          <h1>
            {new Date(days[0].dt_txt).toLocaleDateString("en-GB", {
              year: "2-digit",
              month: "short",
              day: "numeric",
            })}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default TempBoxes;
