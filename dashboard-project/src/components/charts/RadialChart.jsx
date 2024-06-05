import React from "react";
import Chart from "react-apexcharts";

export default function RadialChart() {
  const series = [44, 55, 67, 83];

  const options = {
    colors: ["#2A1D59", "#04A777", "#FB8B24", "#D90368"],
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%",
        },
        track: {
          show: true,
          background: "#e0e0e0",
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function () {
              return 1689;
            },
          },
        },
      },
    },
    labels: ["Views", "Followers", "Shares", "Likes"],
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      labels: {
        useSeriesColors: true,
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        radius: 12,
      },
    },
  };

  return (
    <div style={{ width: "430px", height: "430px", marginTop: "-1.8rem" }}>
      <Chart
        options={options}
        series={series}
        type="radialBar"
        height="100%"
        width="100%"
      />
    </div>
  );
}
