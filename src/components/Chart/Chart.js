import React from "react";
import css from "./Chart.module.css";
import { Doughnut } from "react-chartjs-2";

const PieChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Dataset Label",
        data: [300, 50, 100, 60, 500, 80],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "70%",
  };
  return (
    <div className={css.chart}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PieChart;
