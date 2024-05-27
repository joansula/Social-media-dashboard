import React from "react";
import Chart from "react-apexcharts";

export default function AreaChart() {
  const series = [
    {
      name: "Advertisment 1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Advertisment ",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options = {
    colors: ["#FB8B24", "#D90368"],
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2024-05-19T00:00:00.000Z",
        "2024-05-19T01:30:00.000Z",
        "2024-05-19T02:30:00.000Z",
        "2024-05-19T03:30:00.000Z",
        "2024-05-19T04:30:00.000Z",
        "2024-05-19T05:30:00.000Z",
        "2024-05-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return <Chart options={options} series={series} type="area" height={400} />;
}
