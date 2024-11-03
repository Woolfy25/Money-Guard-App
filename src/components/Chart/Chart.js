import React from "react";
import css from "./Chart.module.css";
import { Doughnut } from "react-chartjs-2";

import { useSelector } from "react-redux";
import { selectTransSummary } from "../../redux/transactions/selectors";

const PieChart = () => {
  const summary = useSelector(selectTransSummary);
  const categoriesArray = summary?.categoriesSummary
    ? [...summary.categoriesSummary]
    : [];
  const hasData = categoriesArray.length > 0;

  const labels = hasData
    ? categoriesArray.map((category) => category.name)
    : ["No Data Available"];
  const dataValues = hasData
    ? categoriesArray.map((category) => category.total)
    : [1];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Data",
        data: dataValues,
        backgroundColor: hasData
          ? [
              "#FED057",
              "#FFD8D0",
              "#FD9498",
              "#C5BAFF",
              "#6E78E8",
              "#4A56E2",
              "#81E1FF",
              "#24CCA7",
              "#00AD84",
              "#33A1FF",
              "#a63838",
            ]
          : ["#D3D3D3"],
        borderColor: ["rgba(255, 255, 255, 1)"],
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
