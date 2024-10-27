import React, { useEffect, useRef } from "react";
import useWindowSize from "../../hooks/useWidth";
import { useNavigate, useLocation } from "react-router-dom";
import css from "./Currency.module.css";
import { Chart } from "chart.js/auto";

const Currency = () => {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/currency" && width > 768) {
      navigate("/");
    }
  }, [width, navigate, location.pathname]);

  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const exchangeRateData = {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"], // Time labels, e.g., days or dates
      datasets: [
        {
          label: "USD",
          data: [0.7, 1.12, 0.75, 1, 0.25, 1.1], // Sample USD values
          borderColor: "rgba(255, 255, 255, 0.60)", // Line color for USD
          backgroundColor: "rgba(255, 255, 255, 0.60)",
          borderWidth: 2,
          fill: true,
        },
        {
          label: "EUR",
          data: [0.25, 1.08, 1.1, 0.6, 1.15, 0.8], // Sample EUR values
          borderColor: "#FF868D", // Line color for EUR
          backgroundColor: "#FF868D",
          borderWidth: 2,
          fill: true,
        },
      ],
    };

    const config = {
      type: "bar", // Type of chart (line)
      data: exchangeRateData,
      options: {
        scales: {
          x: {
            ticks: {
              color: "white", // X-axis tick labels color
            },
            title: {
              color: "white", // X-axis title color
            },
          },
          y: {
            ticks: {
              color: "white", // Y-axis tick labels color
            },
            title: {
              color: "white", // Y-axis title color
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "white",
            },
            display: true,
            position: "top",
          },
        },
        responsive: true, // Makes the chart responsive
        maintainAspectRatio: false,
      },
    };

    const myChart = new Chart(ctx, config);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className={css.container}>
      <table className={css.styledTable}>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Purcase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
            <td>27.55</td>
            <td>27.65</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>30.00</td>
            <td>30.10</td>
          </tr>
        </tbody>
      </table>
      <div className={css.chart}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default Currency;
