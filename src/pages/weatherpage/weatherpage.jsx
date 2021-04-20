import React from "react";

import LoadingPage from "../LoadingPage/loading";
import Temp from "../../components/temperature/temperature";
import ScrollArrow from "../../components/scrollarrow/scroll";
import TempBoxes from "../../components/weathercards/weathercards";

import "./weatherpage.css";
import TemperatureChart from "../../components/barchart/materialuichart";

class WeatherPage extends React.Component {
  state = {
    loading: true,
    weather: [],
    fiveDays: [],
    unit: "Fahrenheit",
  };

  componentDidMount() {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40"
    )
      .then((response) => response.json())
      .then((data) => this.chunkArray(data.list))
      .catch((error) => console.log(error));
  }

  chunkArray = (data) => {
    const results = [];

    while (data.length) {
      results.push({ ...data.splice(0, 8) });
    }

    this.setState({ weather: results, loading: false });
  };

  handleScroll = () => {
    console.log("change!");
  };

  handleTemperatureChange = ({ target: { value } }) => {
    this.setState({ unit: value });
  };

  render() {
    const { loading, weather, unit } = this.state;

    if (loading) return <LoadingPage />;

    return (
      <div className="weatherpage flex justify-center p-1 flex-col">
        <Temp onSelect={this.handleTemperatureChange} />
        <ScrollArrow onScroll={this.handleScroll} />
        <TempBoxes data={weather} unit={unit} />
        <TemperatureChart data={weather} />
      </div>
    );
  }
}

export default WeatherPage;
