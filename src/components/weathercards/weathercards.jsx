import React from "react";

export default class TempBoxes extends React.Component {
  state = {
    loading: true,
    weather: [],
    fiveDays: []
  };

  componentDidMount() {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40"
    )
      .then((response) => response.json())
      .then((data) => this.chunckArray(data.list))
      .catch((error) => console.log(error));
  }

  // async splitDate(data) {
  //     await data.forEach((list) => {
  //       const arr = list.dt_txt.split(" ");
  //       list.dt_txt = arr;
  //       this.setState({weather: [...this.state.weather, list]})
  //     });
  //     // console.log(this.state.weather)
  //     this.getFiveDays()
  // }

    chunckArray = (data) => {
    const results = [];

    while (data.length) {
      results.push({ ...data.splice(0, 8) });
    }

    this.setState({weather: results, loading: false});
    
  }
    // const data = this.state.weather
    // for (let i = 0; i < data.length; i++) {
    //   if (data[i + 1].dt_txt[0] !== data[i].dt_txt[0]) {
    //     console.log(data[i])
    //     this.setState({fiveDays: [...this.state.fiveDays, data[i]]})
    //   }
    // }

    // this.setState({loading: false})
  // }

  render() {
    return (
      <div>
        {
          this.state.loading ? 
          (<div className="text-gray-500">Loading...</div>) : 
          (
            <div className="flex p-2 ml-8 mt-20" style={{ marginLeft: "5%" }}>
              {
                this.state.weather.map(days => (
                  <div key={days.dt}
                    className="p-2"
                    style={{
                      height: "200px",
                      width: "150px",
                      border: "2px solid gray",
                    }}>
                      {/* {console.log(this.state.fiveDays)} */}
                      {console.log(this.state.weather)}
                      <h1>Temp: {days[0].main.temp}F</h1>
                      <h1>Date: {new Date(days[0].dt_txt).toLocaleDateString()}</h1>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    );
  }
}
