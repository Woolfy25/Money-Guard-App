import React from "react";
import css from "./DashboardPage.module.css";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Currency from "../../components/Currency/Currency";
import AddTransactionModal from "../../components/AddTransaction/AddTransaction";
import EditTransactionModal from "../../components/EditTransaction/EditTransaction";
import QuitCheck from "../../components/QuitCheck/QuitCheck";

import { useSelector } from "react-redux";

import useWindowSize from "../../hooks/useWidth";

const Dashboard = ({
  desktopChildren,
  mobileChildren,
  currencyPage,
  statisticsPage,
}) => {
  const { width } = useWindowSize();
  const isModalAddOpen = useSelector((state) => state.modal.isModalAddOpen);
  const isModalEditOpen = useSelector((state) => state.modal.isModalEditOpen);

  return (
    <div className={css.dashboardBackground}>
      <div className={css.dashboardContainer}>
        <Layout></Layout>
        {isModalAddOpen ? <AddTransactionModal /> : null}
        {isModalEditOpen ? <EditTransactionModal /> : null}
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
