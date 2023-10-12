
import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          axisTicks: {
            color: '#333'
          },
          axisBorder: {
            color: "#333"
          }
        },
        colors: [function({ value, seriesIndex, w }) {
            if (value < 55) {
                return '#7E36AF'
            } else {
                return '#D9534F'
            }
          }, function({ value, seriesIndex, w }) {
            if (value < 111) {
                return '#7E36AF'
            } else {
                return '#D9534F'
            }
          }],
          grid: {
            // borderColor: "#40475D",
          },
          tooltip: {
            theme: 'dark',
            x: {
              formatter: function () {
                return "HH:mm:ss"
              }
            }
          },
          title: {
            text: 'Reports',
            align: 'left',
            style: {
              fontSize: '12px'
            }
          },
        
        
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]

    };
  }

  render() {
    return (
        <div className='w-full shadow-lg  md:col-span-1 relatiive lg:h-[50vh] h-[50vh] m-auto  p-2 border rounded-lg bg-[#ffffff]'>
        <div  className='h-full w-auto sm:w-full sm:h-full'>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="100%"
              height="100%"
            />
        </div>
      </div>
    );
  }
}

export default BarChart;