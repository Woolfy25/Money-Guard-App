import React, { useState, useEffect } from "react";
import css from "./DashboardPage.module.css";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Currency from "../../components/Currency/Currency";
import Loader from "../../components/Loader/Loader";

import { Outlet } from "react-router-dom";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

const Dashboard = () => {
  const { width } = useWindowSize();
  return (
    <div className={css.dashboardContainer}>
      <Layout></Layout>
      <Sidebar></Sidebar>
      {width <= 768 && <Currency />}
      <Outlet />
    </div>
  );
};

export default Dashboard;
