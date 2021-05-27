'use strict';
$(document).ready(function () {
    setTimeout(function () {
        floatchart()
    }, 700);
});

function floatchart() {
    // [ support-chart ] start
    $(function () {
        var options1 = {
            chart: {
                type: 'area',
                height: 125,
                sparkline: {
                    enabled: true
                }
            },
            colors: ["#4680ff"],
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            series: [{
                data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
            }],
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return 'Ticket '
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }
        var options2 = {
            chart: {
                type: 'area',
                height: 125,
                sparkline: {
                    enabled: true
                }
            },
            colors: ["#9ccc65"],
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            series: [{
                data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
            }],
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return 'Ticket '
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }
        new ApexCharts(document.querySelector("#support-chart"), options1).render();
        new ApexCharts(document.querySelector("#support-chart-1"), options2).render();
    });
    // [ support-chart ] end
    // [ sal-income ] start
    $(function () {
        var options = {
            chart: {
                type: 'area',
                height: 100,
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#4680ff"],
            fill: {
                type: 'solid',
                opacity: 0.3,
            },
            markers: {
                size: 0,
                opacity: 0.9,
                colors: "#fff",
                strokeColor: "#4680ff",
                strokeWidth: 2,
                hover: {
                    size: 7,
                }
            },
            stroke: {
                width: 3,
            },
            series: [{
                name: 'series1',
                data: [25, 66, 41, 89, 25, 44, 12, 36, 9, 54, 25, 66, 41, 66, 41, 89]
            }],
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return 'Sale Income :'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#sal-income"), options);
        chart.render();
    });
    // [ sal-income ] end
    // [ rent-income ] start
    $(function () {
        var options = {
            chart: {
                type: 'area',
                height: 100,
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#9ccc65"],
            fill: {
                type: 'solid',
                opacity: 0.3,
            },
            markers: {
                size: 0,
                opacity: 0.9,
                colors: "#fff",
                strokeColor: "#9ccc65",
                strokeWidth: 2,
                hover: {
                    size: 7,
                }
            },
            stroke: {
                width: 3,
            },
            series: [{
                name: 'series1',
                data: [9, 54, 25, 66, 41, 66, 41, 89, 25, 66, 41, 89, 25, 44, 12, 36, ]
            }],
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return 'Rent Income :'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#rent-income"), options);
        chart.render();
    });
    // [ rent-income ] end
    // [ income-analysis ] start
    $(function () {
        var options = {
            chart: {
                type: 'area',
                height: 100,
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#ff5252"],
            fill: {
                type: 'solid',
                opacity: 0.3,
            },
            markers: {
                size: 0,
                opacity: 0.9,
                colors: "#fff",
                strokeColor: "#ff5252",
                strokeWidth: 2,
                hover: {
                    size: 7,
                }
            },
            stroke: {
                width: 3,
            },
            series: [{
                name: 'series1',
                data: [25, 66, 41, 89, 25, 44, 12, 36, 9, 54, 25, 66, 41, 66, 41, 89]
            }],
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return 'Income Analysis :'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#income-analysis"), options);
        chart.render();
    });
    // [ income-analysis ] end
    // [ sale-report ] start
    $(function () {
        var options = {
            chart: {
                type: 'bar',
                height: 150,
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#4680ff"],
            plotOptions: {
                bar: {
                    columnWidth: '60%'
                }
            },
            series: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
            }],
            xaxis: {
                crosshairs: {
                    width: 1
                },
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return 'Daily Sales :'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#sale-report-1"), options);
        chart.render();
    });
    $(function () {
        var options = {
            chart: {
                type: 'bar',
                height: 150,
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#9ccc65"],
            plotOptions: {
                bar: {
                    columnWidth: '60%'
                }
            },
            series: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
            }],
            xaxis: {
                crosshairs: {
                    width: 1
                },
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return 'Weekly Sales :'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#sale-report-2"), options);
        chart.render();
    });
    $(function () {
        var options = {
            chart: {
                type: 'bar',
                height: 150,
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#ff5252"],
            plotOptions: {
                bar: {
                    columnWidth: '60%'
                }
            },
            series: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
            }],
            xaxis: {
                crosshairs: {
                    width: 1
                },
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return 'Monthly Sales :'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#sale-report-3"), options);
        chart.render();
    });
    $(function () {
        var options = {
            chart: {
                type: 'bar',
                height: 150,
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#ffba57"],
            plotOptions: {
                bar: {
                    columnWidth: '60%'
                }
            },
            series: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
            }],
            xaxis: {
                crosshairs: {
                    width: 1
                },
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return 'Yearly Sales :'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#sale-report-4"), options);
        chart.render();
    });
    // [ sale-report ] end
    // [ revenue-map ] start
    $(function () {
        var options = {
            chart: {
                height: 220,
                type: 'line',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2,
                curve: 'smooth'
            },
            series: [{
                name: 'Market Days',
                data: [20, 50, 30, 60, 30, 50, 40]
            }, {
                name: 'Market Days ALL',
                data: [40, 20, 50, 15, 40, 65, 20]
            }],
            xaxis: {
                type: 'datetime',
                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000'],
            },
            colors: ['#448aff', '#9ccc65'],
            fill: {
                type: 'solid',
            },
            markers: {
                size: 5,
                colors: ['#448aff', '#9ccc65'],
                opacity: 0.9,
                strokeWidth: 2,
                hover: {
                    size: 7,
                }
            },
            grid: {
                borderColor: '#e2e5e885',
            },
            yaxis: {
                title: {
                    text: 'Revenue Market'
                },
                min: 10,
                max: 70,
            }
        };
        var chart = new ApexCharts(document.querySelector("#revenue-map"), options);
        chart.render();
    });
    // [ revenue-map ] end
    // [ traffic-chart ] start
    $(function () {
        var options1 = {
            chart: {
                type: 'bar',
                height: 400,
                zoom: {
                    enabled: false
                },
            },
            colors: ["#4680ff"],
            plotOptions: {
                bar: {
                    colors: {
                        ranges: [{
                            from: 0,
                            to: 15,
                            color: '#ff5252'
                        }, {
                            from: 16,
                            to: 30,
                            color: '#ffba57'
                        }, {
                            from: 31,
                            to: 50,
                            color: '#4680ff'
                        }, {
                            from: 51,
                            to: 100,
                            color: '#0e9e4a'
                        }]
                    },
                    columnWidth: '80%',
                }
            },
            series: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
            }],
            xaxis: {
                crosshairs: {
                    width: 1
                },
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return 'Click '
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }
        new ApexCharts(document.querySelector("#traffic-chart"), options1).render();
    });
    // [ traffic-chart ] end
    // [ revenue-chart ] start
    $(function () {
        var options = {
            chart: {
                height: 240,
                type: 'donut',
            },
            dataLabels: {
                enabled: false
            },
            labels: ['Target', 'Last week', 'Last day'],
            series: [1258, 975, 500],
            legend: {
                show: false
            },
            colors: ["#00acc1", "#ffba57", "#4680ff"],
        }
        var chart = new ApexCharts(document.querySelector("#revenue-chart"), options);
        chart.render();
    });
    // [ revenue-chart ] end
    // [ market-chart ] start
    $(function () {
        var options = {
            chart: {
                height: 200,
                type: 'bar',
                stacked: true,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                sparkline: {
                    enabled: true
                }
            },
            colors: ["#E0291D", "#3C5A99", "#42C0FB"],
            plotOptions: {
                bar: {
                    horizontal: false,
                },
            },
            series: [{
                name: 'Youtube',
                data: [44, 50, 41, 67, 22, 43, 44, 50, 41, 52, 22, 43]
            }, {
                name: 'Facebook',
                data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
            }, {
                name: 'Twitter',
                data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
            }],
            xaxis: {
                type: 'datetime',
                categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT', '01/07/2011 GMT', '01/08/2011 GMT', '01/09/2011 GMT', '01/10/2011 GMT', '01/11/2011 GMT', '01/12/2011 GMT'],
            },
            legend: {
                show: false,
            },
            fill: {
                opacity: 1
            },
        }
        var chart = new ApexCharts(document.querySelector("#market-chart"), options);
        chart.render();
    });
    // [ market-chart ] end
    // [ type-chart ] start
    $(function () {
        var options = {
            chart: {
                height: 200,
                type: 'donut',
            },
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '65%'
                    }
                }
            },
            labels: ['Desktop Computers', 'Smartphones', 'Tablets'],
            series: [76.7, 15, 30],
            legend: {
                show: false
            },
            colors: ["#ff5252", "#ffba57", "#00acc1"],
        }
        var chart = new ApexCharts(document.querySelector("#type-chart"), options);
        chart.render();
    });
    // [ type-chart ] end
}