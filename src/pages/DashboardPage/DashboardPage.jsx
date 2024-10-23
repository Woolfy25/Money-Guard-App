import React from "react";
import css from "./DashboardPage.module.css";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Currency from "../../components/Currency/Currency";
import Loader from "../../components/Loader/Loader";

const Dashboard = () => {
  return (
    <div className={css.dashboardContainer}>
      <Layout></Layout>
      <Sidebar></Sidebar>
      <Currency></Currency>
    </div>
  );
};

export default Dashboard;
