import React from "react";
import "./temperature.css";

const Temp = ({ onSelect }) => (
  <div className="temperature">
    <label className="inline-flex text-3xl">
      <input
        type="radio"
        className="form-radio"
        name="accountType"
        value="Celsius"
        onChange={onSelect}
      />
      <span className="ml-2">Celsius</span>
    </label>
    <label className="inline-flex text-3xl">
      <input
        type="radio"
        className="form-radio"
        name="accountType"
        value="Fahrenheit"
        onChange={onSelect}
        defaultChecked
      />
      <span className="ml-2">Fahrenheit</span>
    </label>
  </div>
);
export default Temp;
