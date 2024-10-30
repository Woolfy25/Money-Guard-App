import React, { useEffect } from "react";
import css from "./DashboardPage.module.css";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Currency from "../../components/Currency/Currency";
import AddTransactionModal from "../../components/AddTransaction/AddTransaction";
import EditTransactionModal from "../../components/EditTransaction/EditTransaction";
import QuitCheck from "../../components/QuitCheck/QuitCheck";

import { useDispatch } from "react-redux";
import { user } from "../../redux/user/operations";

import useWindowSize from "../../hooks/useWidth";
import Loader from "../../components/Loader/Loader";

const Dashboard = ({
  desktopChildren,
  mobileChildren,
  currencyPage,
  statisticsPage,
}) => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(user());
  // }, [dispatch]);

  return (
    <div className={css.dashboardBackground}>
      <div className={css.dashboardContainer}>
        <Layout></Layout>
        {/* <AddTransactionModal></AddTransactionModal> */}
        {/* <EditTransactionModal></EditTransactionModal> */}
        {/* <QuitCheck></QuitCheck> */}
        <div className={css.layoutContainer}>
          <div className={css.sideBarContainer}>
            <Sidebar />
            {width >= 769 ? <Currency /> : currencyPage}
          </div>
          {width >= 425 ? desktopChildren : mobileChildren}
          {statisticsPage}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
