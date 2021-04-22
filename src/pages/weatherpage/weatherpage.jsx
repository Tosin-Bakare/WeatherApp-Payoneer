import React from "react";

import LoadingPage from "../LoadingPage/loading";
import Temp from "../../components/temperature/temperature";
import ScrollArrow from "../../components/scrollarrow/scroll";
import TempBoxes from "../../components/weathercards/weathercards";

import "./weatherpage.css";
import TemperatureChart from "../../components/barchart/materialuichart";

class WeatherPage extends React.Component {
  constructor(props) {
    super(props);
    this.weatherCards = React.createRef();
    this.state = {
      loading: true,
      weather: [],
      fiveDays: [],
      unit: "Fahrenheit",
      chartData: [],
      chartIndex: 0,
      scrollPosition: 0,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40"
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

  handleScroll = (offSet) => {
    let {
      current: { scrollLeft },
    } = this.weatherCards;
    // scrollLeft += offSet;
    console.log(this.weatherCards);
    this.setState({ scrollPosition: scrollLeft });
  };

  convertTemperature = (value, unit) =>
    unit === "Celsius" ? (value - 32) * (5 / 9) : value;

  handleTemperatureChange = ({ target: { value } }) =>
    this.setState({ unit: value });

  makeChartData = (data, unit, index) => {
    const newData = Object.values(data[index]);
    const temperatures = [];
    newData.map((data) =>
      temperatures.push({
        temperature: `${this.convertTemperature(data.main.temp, unit).toFixed(
          2
        )}${unit === "Fahrenheit" ? "F" : "C"}`,
        value: data.main.temp,
      })
    );
    return temperatures;
  };

  handleChartDataChange = (index) => this.setState({ chartIndex: index });

  render() {
    const { loading, weather, unit, chartIndex, scrollPosition } = this.state;

    if (loading) return <LoadingPage />;

    return (
      <div className="weatherpage flex justify-center p-1 flex-col">
        <Temp onSelect={this.handleTemperatureChange} />
        <ScrollArrow
          scrollPosition={scrollPosition}
          onScroll={this.handleScroll}
        />
        <TempBoxes
          ref={this.weatherCards}
          data={weather}
          unit={unit}
          position={chartIndex}
          convert={this.convertTemperature}
          handleClick={this.handleChartDataChange}
          handleScroll={this.handleScroll}
        />
        <TemperatureChart
          data={weather}
          unit={unit}
          index={chartIndex}
          convert={this.convertTemperature}
          makeChartData={this.makeChartData}
        />
      </div>
    );
  }
}

export default WeatherPage;
