import React from "react";
import css from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";

import { FaHouse } from "react-icons/fa6";
import { ImStatsDots } from "react-icons/im";
import { LuDollarSign } from "react-icons/lu";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className={css.container}>
      <div className={css.navigation}>
        <div className={css.navigationContainer}>
          <FaHouse className={css.svgs} />
          <p className={css.title}>Home</p>
        </div>
        <div className={css.navigationContainer}>
          <ImStatsDots className={css.svgs} />
          <p className={css.title}>Statistics</p>
        </div>
        <div className={css.navigationContainerCurrency}>
          <LuDollarSign
            className={css.svgs}
            onClick={() => {
              navigate("/currency");
            }}
          />
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
