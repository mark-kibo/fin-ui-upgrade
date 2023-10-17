import Chart from "react-apexcharts";
import React, { useState } from "react";

// class AreaChart extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {

//             series: [{
//                 name: 'series1',
//                 data: [31, 40, 28, 51, 42, 109, 100]
//             }, {
//                 name: 'series2',
//                 data: [11, 32, 45, 32, 34, 52, 41]
//             }],
//             options: {
//                 chart: {
//                     height: 350,
//                     type: 'area'
//                 },
//                 dataLabels: {
//                     enabled: false
//                 },
//                 stroke: {
//                     curve: 'smooth'
//                 },
//                 xaxis: {
//                     type: 'datetime',
//                     categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
//                 },
//                 tooltip: {
//                     x: {
//                         format: 'dd/MM/yy HH:mm'
//                     },
//                 },
//                 title:{
//                     text:"Transactions Made",
//                 }
//             },


//         };
//     }



//     render() {
//         return (


//             <div className='w-full shadow-lg  md:col-span-1 relatiive lg:h-[40vh] h-[40vh] m-auto  px-2  border rounded-lg bg-[#ffffff]'>
//                 <div className='h-full w-auto sm:w-full sm:h-full'>
//                     <Chart options={this.state.options} series={this.state.series} type="area" width="100%" height="100%" />
//                 </div>
//             </div>


//         );
//     }
// }


const AreaChart = ()=>{
    const [chartData, setChartData] = useState<Object[]>(
        [{
                            name: 'series1',
                            data: [31, 40, 28, 51, 42, 109, 100]
                        }, {
                            name: 'series2',
                            data: [11, 32, 45, 32, 34, 52, 41]
                        }],
    )

    const [options , setOptions]= useState<Object []>(
        {
                            chart: {
                                height: 350,
                                type: 'area'
                            },
                            dataLabels: {
                                enabled: false
                            },
                            stroke: {
                                curve: 'smooth'
                            },
                            xaxis: {
                                type: 'datetime',
                                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                            },
                            tooltip: {
                                x: {
                                    format: 'dd/MM/yy HH:mm'
                                },
                            },
                            title:{
                                text:"Transactions Made",
                            }
                        }
    )
    return (


            <div className='w-full shadow-lg  md:col-span-1 relatiive lg:h-[40vh] h-[40vh] m-auto  px-2  border rounded-lg bg-[#ffffff]'>
                <div className='h-full w-auto sm:w-full sm:h-full'>
                    <Chart options={options} series={chartData} type="area" width="100%" height="100%" />
                </div>
            </div>
        
        
                );
}


export default AreaChart;