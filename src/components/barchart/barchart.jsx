import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
    dataBar: {
      labels: ["23F", "28F", "18F", "12F", "20F", "15F", "17F", "20F"],
      datasets: [
        {
          label: "temperature",
          data: [12, 19, 3, 5, 2, 3, 10, 18],
          // backgroundColor: [
          //   "rgba(255, 134,159,0.4)",
          //   "rgba(98,  182, 239,0.4)",
          //   "rgba(255, 218, 128,0.4)",
          //   "rgba(113, 205, 205,0.4)",
          //   "rgba(170, 128, 252,0.4)",
          //   "rgba(255, 177, 101,0.4)",
          // ],
          borderWidth: 1,
          // borderColor: [
          //   "rgba(255, 134, 159, 1)",
          //   "rgba(98,  182, 239, 1)",
          //   "rgba(255, 218, 128, 1)",
          //   "rgba(113, 205, 205, 1)",
          //   "rgba(170, 128, 252, 1)",
          //   "rgba(255, 177, 101, 1)",
          // ],
        },
      ],
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: false,
              // color: "rgba(0, 0, 0, 0.1)",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
              color: "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-20">Bar chart</h3>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;
