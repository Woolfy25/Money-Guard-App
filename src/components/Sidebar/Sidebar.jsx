import React, { useEffect } from "react";
import css from "./Sidebar.module.css";
import { useNavigate, useLocation } from "react-router-dom";

import { selectUserBalance } from "../../redux/user/selectors";
import { useSelector } from "react-redux";
import {
  selectToken,
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";

import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { fetchCurrentUser } from "../../redux/user/operations";

import { FaHouse } from "react-icons/fa6";
import { ImStatsDots } from "react-icons/im";
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

  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);

  const userBalance = useSelector(selectUserBalance);
  // const previousBalanceRef = useRef(userBalance);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log("Token:", token);
  //   console.log("Is Logged In:", isLoggedIn);
  //   console.log("Is Refreshing:", isRefreshing);
  //   if (token && !isLoggedIn && !isRefreshing) {
  //     dispatch(refreshUser());
  //   }
  // }, [dispatch, token, isLoggedIn, isRefreshing]);

  // const userBalance = useSelector(selectUserBalance);
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
        <p className={css.balance}>$ {userBalance}</p>
      </div>
    </div>
  );
};

export default Sidebar;
