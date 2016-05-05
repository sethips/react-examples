import React from 'react';

var LineChart = require("react-chartjs").Line;

class Products extends React.Component {

  constructor(props) {
    super(props);
    //  this.state.products = [];
    this.state = {};
    this.state.x = [];
    this.state.y = [];
    this.state.z = [];
    this.state.lineData = {};
  }

  render() {
this.state.x.push(this.props.data.count);
this.state.y.push(this.props.data.humidity);
this.state.z.push(this.props.data.temperature);
console.log(this.props);
    this.state.lineData = {
      labels: this.state.x,
      datasets: [
        {
          label: "y",

          data: this.state.y
        }
      ]
    };
    console.log(this.state.z);
       this.state.lineData2 = {
      labels: this.state.x,
      datasets: [
        {
          label: "y",

          data: this.state.z
        }
      ]
    };

    var chartOptions = {
      legend: {
        position: 'bottom'
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'x'
            },    
               unitStepSize: 0.2,

          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'y'
            }
          }
        ]
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart - Legend'
      }
    }

    return (
      <div>
        <LineChart data={this.state.lineData} options={chartOptions}  width="600" height="450" redraw/>
        <LineChart data={this.state.lineData2} options={chartOptions}  width="600" height="450" redraw/>

      </div>
    );

  }

}

export default Products;
