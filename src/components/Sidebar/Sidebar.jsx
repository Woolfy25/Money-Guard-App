import React from "react";
import css from "./Sidebar.module.css";

import { FaHouse } from "react-icons/fa6";
import { TfiStatsUp } from "react-icons/tfi";

const Sidebar = () => {
  return (
    <div className={css.container}>
      <div className={css.navigation}>
        <div className={css.navigationContainer}>
          <FaHouse className={css.svgs} />
          <p className={css.title}>Home</p>
        </div>
        <div className={css.navigationContainer}>
          <TfiStatsUp className={css.svgs} />
          <p className={css.title}>Statistics</p>
        </div>
      </div>
      <div className={css.balanceContainer}>
        <p className={css.balanceText}>Your balance</p>
        <p className={css.balance}>$ 24 000.00</p>
      </div>
    </div>
  );
};

export default Sidebar;
