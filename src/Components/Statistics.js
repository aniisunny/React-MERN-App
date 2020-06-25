import React, { Component } from 'react'
import Chart from "chart.js"
import classes from "./BarGraph.module.css";
//import { Bar } from 'react-chartjs-2'

const data = {
    labels: ['JPG', 'PNG', 'MP4', 'PDF'],
    datasets: [{
        label: 'Files',
        data: [1, 2, 1, 2],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)'
        ],
        borderWidth: 1,
        borderColor: '#777',
        hoverBorderWidth: 3,
        hoverBorderColor: '#000'
    }]
}

class Statistics extends Component {

    chartRef = React.createRef();

    componentDidMount () {
        const myChart = this.chartRef.current.getContext('2d');

        new Chart(myChart, {
            type: 'bar',
            data: {
                labels: ['JPG', 'PNG', 'MP4', 'PDF'],
                datasets: [{
                    label: 'Files',
                    data: [1, 2, 1, 2],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 3,
                    hoverBorderColor: '#000'
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Number of Files of Each Type',
                    fontSize: 36
                },
                legend: {
                    display: false,
                    position: 'right',
                    labels: {
                        fontColor: '#000'
                    }
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                tooltips: {
                    enabled: false
                }
            }
        })
    }

    render () {
        return (
            <div className={classes.graphContainer}>
                <canvas id = "myChart" ref = {this.chartRef} />
            </div>
            // <div>
            //     <Bar>
            //         data = {data}
            //         options = {{
            //             title: {
            //                 display: true,
            //                 text: 'Number of Files of Each Type',
            //                 fontSize: 36
            //             },
            //             legend: {
            //                 display: false,
            //                 position: 'right',
            //                 labels: {
            //                     fontColor: '#000'
            //                 }
            //             },
            //             layout: {
            //                 padding: {
            //                     left: 50,
            //                     right: 0,
            //                     top: 0,
            //                     bottom: 0
            //                 }
            //             },
            //             tooltips: {
            //                 enabled: false
            //             }
            //         }}
            //     </Bar>
            // </div>
            // <div class = "container"> 
            //     <script src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js" />
            //     <link rel = "stylesheet" href = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
            //     <canvas id = "myChart" />
            //     <script>
            //         let myChart = document.getElementById('myChart').getContext('2d');

            //         Chart.defaults.global.defaultFontFamily = 'Lato';
            //         Chart.defaults.global.defaultFontSize = 18;
            //         Chart.defaults.global.defaultFontColor = '#777';

            //         let massPopChart = new Chart(myChart, {
            //             type: 'bar',
            //             data: {
            //                 labels: ['JPG', 'PNG', 'MP4', 'PDF'],
            //                 dataset: [{
            //                     label: 'Files',
            //                     data: [1, 2, 1, 2],
            //                     backgroundColor: [
            //                         'rgba(255, 99, 132, 0.6)',
            //                         'rgba(54, 162, 235, 0.6)',
            //                         'rgba(255, 206, 86, 0.6)',
            //                         'rgba(75, 192, 192, 0.6)'
            //                     ],
            //                     borderWidth: 1,
            //                     borderColor: '#777',
            //                     hoverBorderWidth: 3,
            //                     hoverBorderColor: '#000'
            //                 }]
            //             }, 
            //             options: {
            //                 title: {
            //                     display: true,
            //                     text: 'Number of Files of Each Type',
            //                     fontSize: 36
            //                 },
            //                 legend: {
            //                     display: false,
            //                     position: 'right',
            //                     labels: {
            //                         fontColor: '#000'
            //                     }
            //                 },
            //                 layout: {
            //                     padding: {
            //                         left: 50,
            //                         right: 0,
            //                         top: 0,
            //                         bottom: 0
            //                     }
            //                 },
            //                 tooltips: {
            //                     enabled: false
            //                 }
            //             }
            //         }); 
            //     </script>
            // </div>
        )
    }
}

export default Statistics