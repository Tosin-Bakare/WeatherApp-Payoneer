import React from "react";
import Temp from "../../components/temperature/temperature";
import ScrollArrow from "../../components/scrollarrow/scroll";
import TempBoxes from "../../components/waethercards/weathercards";
import ChartsPage from "../../components/barchart/barchart";

import ArrowKeysReact from "arrow-keys-react";

const WeatherPage = () => (
  <div
    className="p-20"
    style={{
      height: "90vh",
      width: "50%",
      border: "2px solid gray",
      marginLeft: "20%",
      marginTop: "5%",
      marginBottom: "5%",
      paddingTop: "5%",
      justifyContent: "center",
    }}
  >
    <Temp />
    {/* <ScrollArrow {...ArrowKeysReact.events} /> */}
    <TempBoxes />
    <ChartsPage />
  </div>
);

export default WeatherPage;
