import React from "react";
import Chart from "react-apexcharts";
import BarChartData from "/src/components/BarChartData.jsx";

export default function BarChart() {
  const options = {
    colors: ["#04A777", "#C7C7C7", "#2A1D59"],
    chart: {
      id: "Months",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    dataLabels: {
      enabled: false,
    },
  };

  return <Chart options={options} series={BarChartData} type="bar" />;
}
