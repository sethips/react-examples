import React from 'react';

var LineChart = require("react-chartjs").Line;

class Products extends React.Component {

  constructor(props) {
    super(props);
    //  this.state.products = [];
    this.state = {};
    this.state.x = [];
    this.state.y = [];
    this.state.filterText = "";
    this.state.lineData = {};
  }

  render() {
this.state.x.push(this.props.data.x);
this.state.y.push(this.props.data.y);

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

    var chartOptions = {
position :'left',
      legend: {
        position: 'left'
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'x'
            },    time: {
        // string/callback - By default, date objects are expected. You may use a pattern string from http://momentjs.com/docs/#/parsing/string-format/ to parse a time string format, or use a callback function that is passed the label, and must return a moment() instance.
        parser: false,
        // string - By default, unit will automatically be detected.  Override with 'week', 'month', 'year', etc. (see supported time measurements)
        unit: false,

        // Number - The number of steps of the above unit between ticks
        unitStepSize: 0.2,

        // string - By default, no rounding is applied.  To round, set to a supported time unit eg. 'week', 'month', 'year', etc.
        round: false,

        // Moment js for each of the units. Replaces `displayFormat`
        // To override, use a pattern string from http://momentjs.com/docs/#/displaying/format/
        displayFormats: {
            'millisecond': 'SSS [ms]',
            'second': 'h:mm:ss a', // 11:20:01 AM
            'minute': 'h:mm:ss a', // 11:20:01 AM
            'hour': 'MMM D, hA', // Sept 4, 5PM
            'day': 'll', // Sep 4 2015
            'week': 'll', // Week 46, or maybe "[W]WW - YYYY" ?
            'month': 'MMM YYYY', // Sept 2015
            'quarter': '[Q]Q - YYYY', // Q3
            'year': 'YYYY', // 2015
        },
        // Sets the display format used in tooltip generation
        tooltipFormat: ''
    }

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

      </div>
    );

  }

}

export default Products;
