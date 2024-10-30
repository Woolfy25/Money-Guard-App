import React from "react";
import css from "./Sidebar.module.css";
import { useNavigate, useLocation } from "react-router-dom";

import { selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

import { FaHouse } from "react-icons/fa6";
import { ImStatsDots } from "react-icons/im";
import { LuDollarSign } from "react-icons/lu";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => {
    if (
      (location.pathname === "/" && path === "/home") ||
      location.pathname === path
    ) {
      return true;
    }
    return false;
  };

  const user = useSelector(selectUser);
  return (
    <div className={css.container}>
      <div className={css.navigation}>
        <div
          className={css.navigationContainer}
          onClick={() => {
            navigate("/home");
          }}
        >
          <FaHouse className={isActive("/home") ? css.activeSvg : css.svgs} />
          <p className={css.title}>Home</p>
        </div>
        <div
          className={css.navigationContainer}
          onClick={() => {
            navigate("/statistics");
          }}
        >
          <ImStatsDots
            className={isActive("/statistics") ? css.activeSvg : css.svgs}
          />
          <p className={css.title}>Statistics</p>
        </div>
        <div className={css.navigationContainerCurrency}>
          <LuDollarSign
            className={isActive("/currency") ? css.activeSvg : css.svgs}
            onClick={() => {
              navigate("/currency");
            }}
          />
        </div>
      </div>
      <div className={css.balanceContainer}>
        <p className={css.balanceText}>Your balance</p>
        <p className={css.balance}>$ {user.balance}</p>
      </div>
    </div>
  );
};

export default Sidebar;
