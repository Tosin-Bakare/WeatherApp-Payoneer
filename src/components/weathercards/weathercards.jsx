import React from "react";
import "./weathercards.css";

export default class TempBoxes extends React.Component {
  state = {
    loading: true,
    weather: [],
    fiveDays: [],
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
  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className="text-gray-500">Loading...</div>
        ) : (
          <div className="card flex p-2  mt-2">
            {this.state.weather.map((days) => (
              <div
                key={days.dt}
                className="p-2"
                style={{
                  height: "150px",
                  width: "250px",
                  border: "1px solid gray",
                  margin: "10px",
                  // fontSize: "large",
                }}
              >
                {console.log(this.state.weather)}
                <h1>Temp:</h1>
                <h1> {days[0].main.temp}F</h1>
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
        )}
      </div>
    );
  }
}
