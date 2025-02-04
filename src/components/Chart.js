import ReactApexChart from "react-apexcharts";
import React from 'react'
import ReactDOM from 'react-dom'

class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 13, 43, 22],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

  

    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

  // const domContainer = document.querySelector('#app');
  // ReactDOM.render(React.createElement(ApexChart), domContainer);

export default ApexChart;