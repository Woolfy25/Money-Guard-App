import React from "react";
import css from "./DashboardPage.module.css";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Currency from "../../components/Currency/Currency";
import useWindowSize from "../../hooks/useWidth";
import HomePage from "../HomePage/HomePage";
import MobileHomePage from "../../components/MobileHomePage/MobileHomePage";
import Loader from "../../components/Loader/Loader";

const Dashboard = ({ desktopChildren, mobileChildren, currencyPage }) => {
  const { width } = useWindowSize();
  return (
    <div className={css.dashboardContainer}>
      <Layout></Layout>
      <div className={css.layoutContainer}>
        <div className={css.sideBarContainer}>
          <Sidebar />
          {width >= 768 ? <Currency /> : currencyPage}
        </div>
        {width >= 425 ? desktopChildren : mobileChildren}
      </div>
    </div>
  );
};

export default Dashboard;
