import React from "react";
import Chart from "react-apexcharts";

export default function HeatMap() {
  const series = [
    {
      name: "Likes",
      data: [
        { x: "Monday", y: 30 },
        { x: "Tuesday", y: 28 },
        { x: "Wednesday", y: 19 },
        { x: "Thursday", y: 73 },
        { x: "Friday", y: 95 },
        { x: "Saturday", y: 70 },
        { x: "Sunday", y: 47 },
      ],
    },
    {
      name: "Comments",
      data: [
        { x: "Monday", y: 30 },
        { x: "Tuesday", y: 26 },
        { x: "Wednesday", y: 34 },
        { x: "Thursday", y: 54 },
        { x: "Friday", y: 45 },
        { x: "Saturday", y: 57 },
        { x: "Sunday", y: 100 },
      ],
    },
    {
      name: "Shares",
      data: [
        { x: "Monday", y: 30 },
        { x: "Tuesday", y: 55 },
        { x: "Wednesday", y: 49 },
        { x: "Thursday", y: 53 },
        { x: "Friday", y: 35 },
        { x: "Saturday", y: 80 },
        { x: "Sunday", y: 76 },
      ],
    },
    {
      name: "Saves",
      data: [
        { x: "Monday", y: 32 },
        { x: "Tuesday", y: 29 },
        { x: "Wednesday", y: 38 },
        { x: "Thursday", y: 45 },
        { x: "Friday", y: 76 },
        { x: "Saturday", y: 62 },
        { x: "Sunday", y: 80 },
      ],
    },
  ];

  const options = {
    chart: {
      height: 400,
      type: "heatmap",
    },
    dataLabels: {
      enabled: true,
    },
    colors: ["#00E396", "#FEB019", "#FF4560"],
    plotOptions: {
      heatmap: {
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 30,
              color: "#00E396",
            },
            {
              from: 31,
              to: 60,
              color: "#FEB019",
            },
            {
              from: 61,
              to: 100,
              color: "#FF4560",
            },
          ],
        },
      },
    },
  };

  return (
    <div id="chart">
      <Chart options={options} series={series} type="heatmap" height={380} />
    </div>
  );
}
