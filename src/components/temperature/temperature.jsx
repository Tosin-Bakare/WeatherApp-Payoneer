import React from "react";
import "./temperature.css";

const Temp = () => (
  <div className="temperature" style={{ marginLeft: "10%" }}>
    <label className="inline-flex items-center">
      <input
        type="radio"
        className="form-radio"
        name="accountType"
        value="Celsius"
      />
      <span className="ml-2">Celsius</span>
    </label>
    <label className="inline-flex  items-center" style={{ marginLeft: "35%" }}>
      <input
        type="radio"
        className="form-radio "
        name="accountType"
        value="Farenheit"
      />
      <span className="ml-2">Farenheit</span>
    </label>
  </div>
);
export default Temp;
