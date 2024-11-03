import React, { useState } from "react";
import css from "./Layout.module.css";
import logo from "../../images/MoneyGuardLogo.png";

import QuitCheck from "../QuitCheck/QuitCheck";

import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";

import { PiLineVertical } from "react-icons/pi";
import { RxExit } from "react-icons/rx";

const Layout = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const confirmLogout = () => {
    dispatch(logout());
    setIsModalOpen(false);
  };

  const cancelLogout = () => {
    setIsModalOpen(false);
  };

  const name = useSelector(selectUser);

  return (
    <div className={css.container}>
      <img
        className={css.logo}
        src={logo}
        alt="Money Guard Logo"
        loading="lazy"
      />
      <div className={css.infoContainer}>
        <p className={css.name}>{name.username}</p>
        <PiLineVertical className={css.verticalSvg} />
        <button className={css.logOutContainer} onClick={handleLogoutClick}>
          <RxExit className={css.exitSvg} />
          <span className={css.text}>Exit</span>
        </button>
      </div>
      {isModalOpen && (
        <QuitCheck confirmLogout={confirmLogout} cancelLogout={cancelLogout} />
      )}
    </div>
  );
};

export default Layout;
