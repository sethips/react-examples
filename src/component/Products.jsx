import React from 'react';

var LineChart = require('react-chartjs').Line;
var RadarChart = require('react-chartjs').Radar;

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
    this.state.radarData = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      datasets: [{
        label: 'Humidity',
        data: this.state.y,
        fillColor: 'rgba(75,192,192,0.4)'
      }, {
        label: 'Temperature',
        data: this.state.z,
        fillColor: 'rgba(255,99,132,0.2)'
      }]
    };
    var radaroptions = {
      scale: {
        reverse: true,
        ticks: {
          beginAtZero: true
        }
      }
    };
    this.state.lineData = {
      labels: this.state.x,
      datasets: [{
        label: 'y',

        data: this.state.y,
        fillColor: 'rgba(75,192,192,0.4)'
      }]
    };
    console.log(this.state.z);
    this.state.lineData2 = {
      labels: this.state.x,
      datasets: [{
        label: 'y',

        data: this.state.z,
        fillColor: 'rgba(255,99,132,0.2)'
      }]
    };

    var chartOptions = {
      legend: {
        position: 'bottom'
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'x'
          },
          unitStepSize: 0.2,

        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'y'
          }
        }]
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart - Legend'
      }
    }

    return (
      <div>
      <h1 style={{display: 'inline-block', padding: 5+'px', marginLeft: 10+'px' }}>Humidity & Temperature Sensor Data Plot   </h1>
      <h3 style={{display: 'inline'}}> <a href='https://facebook.github.io/react/'>React.js</a> | <a href='https://github.com/jhudson8/react-chartjs'>Chart.js</a> | <a href='https://www.raspberrypi.org/'>Raspberry Pi</a> | <a href='https://www.adafruit.com/product/385'>DHT22</a></h3>
       <div style={{margin:'0 20px'}}>
       
        <div style={{float:'left', width:50+ '%', marginLeft: 10+'px', marginBottom: 15+'px'}}>
        <h3>Humidity (%)</h3>
        <LineChart data={this.state.lineData} options={chartOptions}  width='550' height='350' redraw/>
        <h3>Temperature (&deg;C)</h3>
        <LineChart data={this.state.lineData2} options={chartOptions}  width='550' height='350' redraw/>
        </div>
        <div style={{float: 'right', maxWidth: 50 + '%', marginTop: 100 + 'px'}}>
        <RadarChart data={this.state.radarData} options={chartOptions} width='600' height='450' redraw/>
        <p style={{marginTop:20+'px', textAlign: 'center'}}>
        &copy; Techdojo |<a href="https://github.com/tech-dojo/react-examples/tree/sensor-graph"> GitHub </a>|<a href="https://twitter.com/dojo_tech"> Twitter </a>|</p>
        </div>
       </div>
      </div>
    );

  }

}

export default Products;
