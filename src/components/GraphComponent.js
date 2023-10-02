// ChartComponent.js
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

import { sportsLabel, sportsData } from "../data/data";

const DataChart = () => {
  Chart.register(...registerables);
  const [clickedIndex, setClickedIndex] = useState(null);

  const data = {
    labels: sportsLabel,
    datasets: [
      {
        label: "1",
        fill: false,
        borderWidth: 4,
        tension: 0.2,
        pointBackgroundColor: "rgba(75,192,192,1)",
        data: sportsData,
        borderColor: "#39c298",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "red",
        pointRadius: 0,
        pointHitRadius: 5,
      },

      {
        label: "Sample Line Chart",
        fill: false,
        borderWidth: 4,
        tension: 0.2,
        pointBackgroundColor: "rgba(75,192,192,1)",
        data: sportsData,
        borderColor: "#264d4b",
        pointRadius: 0,
        pointHitRadius: 5,
      },
    ],
  };

  // Options for the line chart (customize as needed)
  const options = {
    scales: {
      x: {
        ticks: {
          color: function (context) {
            return clickedIndex && context.index <= clickedIndex
              ? "#B0B0B2"
              : "#3c3d42";
          },
        },
      },

      y: {
        beginAtZero: true,
        ticks: {
          color: "#B0B0B2",
        },
      },
    },
    onClick: (_, elements) => {
      if (elements.length > 0) {
        const clickedElement = elements[0];
        setClickedIndex(clickedElement.index);
      }
    },
    animation: false,
    tooltips: {
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },

    plugins: {
      tooltip: {
        yAlign: "bottom",
        backgroundColor: "#39c298",
        titleFontColor: "black",
        callbacks: {
          label: (toolTipItem, data) => {
            return "";
          },
        },
      },
      legend: { display: false },
      title: {
        display: true,
        color: "#B0B0B2",
        text: "Views (in millions) Per Hour vs Time   (Click the points on line to highlight)",
        align: "start",
        padding: {
          top: 10,
          bottom: 30,
          left: 30,
          right: 30,
        },
      },
    },
  };

  data.datasets[0].data = data.datasets[0].data.slice(0, clickedIndex + 1);

  return (
    <>
      <Line data={data} color={"red"} options={options} />
    </>
  );
};

export default DataChart;
