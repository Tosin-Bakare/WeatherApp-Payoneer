import React from "react";
import "./weathercards.css";

const averageTemperature = (days) => {
  const temperatureValues = Object.values(days);

  return (
    temperatureValues.reduce(
      (acc, temperature) => temperature.main.temp + acc,
      0
    ) / temperatureValues.length
  );
};

const TempBoxes = React.forwardRef(
  ({ data, unit, convert, handleClick, handleScroll, position }, ref) => {
    return (
      <div className="card flex p-2 mt-2" ref={ref}>
        {data.map((days, index) => (
          <div
            key={days[0].dt}
            className={`temp-container p-4 ${position === index && "clicked"} `}
            onClick={() => handleClick(index)}
          >
            <h1>Temp:</h1>
            <h1>
              {convert(averageTemperature(days), unit).toPrecision(3)}
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
  }
);

export default TempBoxes;
