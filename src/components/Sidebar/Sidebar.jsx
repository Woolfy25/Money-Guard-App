import React, { useEffect } from "react";
import css from "./Sidebar.module.css";

import { useNavigate, useLocation } from "react-router-dom";
import {
  selectUserBalance,
  selectIsUserLoading,
} from "../../redux/user/selectors";
import { useSelector, useDispatch } from "react-redux";

import { fetchCurrentUser } from "../../redux/user/operations";
import { selectTransactions } from "../../redux/transactions/selectors";

import { FaHouse } from "react-icons/fa6";
import { BiStats } from "react-icons/bi";
import { LuDollarSign } from "react-icons/lu";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const isActive = (path) => {
    if (
      (location.pathname === "/" && path === "/home") ||
      location.pathname === path
    ) {
      return true;
    }
    return false;
  };

  const transactions = useSelector(selectTransactions);
  const userBalance = useSelector(selectUserBalance);
  const isUserLoading = useSelector(selectIsUserLoading);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [transactions, dispatch]);

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
          <BiStats
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
        {isUserLoading ? (
          <p className={css.balanceTextLoading}>Loading balance...</p>
        ) : (
          <p className={css.balance}>$ {userBalance.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
