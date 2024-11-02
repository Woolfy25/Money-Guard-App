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
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
      datasets: [
        {
          label: "USD",
          data: [0.7, 1.12, 0.75, 1, 0.25, 1.1],
          borderColor: "rgba(255, 255, 255, 0.60)",
          backgroundColor: "rgba(255, 255, 255, 0.60)",
          borderWidth: 2,
          fill: true,
        },
        {
          label: "EUR",
          data: [0.25, 1.08, 1.1, 0.6, 1.15, 0.8],
          borderColor: "#FF868D",
          backgroundColor: "#FF868D",
          borderWidth: 2,
          fill: true,
        },
      ],
    };

    const config = {
      type: "bar",
      data: exchangeRateData,
      options: {
        scales: {
          x: {
            ticks: {
              color: "white",
            },
            title: {
              color: "white",
            },
          },
          y: {
            ticks: {
              color: "white",
            },
            title: {
              color: "white",
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
        responsive: true,
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
