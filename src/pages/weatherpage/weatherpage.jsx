import React from "react";
import Temp from "../../components/temperature/temperature";
import ScrollArrow from "../../components/scrollarrow/scroll";
import TempBoxes from "../../components/weathercards/weathercards";
import ChartsPage from "../../components/barchart/barchart";

import "./weatherpage.css";

const WeatherPage = () => (
  <div
    className=" weatherpagecard p-20"
    style={{
      width: "auto",
      paddingTop: "5%",
      justifyContent: "center",
    }}
  >
    <Temp />
    <ScrollArrow />
    <TempBoxes />
    <ChartsPage />
  </div>
);

export default WeatherPage;
