import React from "react";
import css from "./Layout.module.css";
import logo from "../../images/MoneyGuardLogo.png";

import { PiLineVertical } from "react-icons/pi";
import { RxExit } from "react-icons/rx";

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <img className={css.logo} src={logo} alt="Money Guard Logo" />
      <div className={css.infoContainer}>
        <p className={css.name}>Name</p>
        <PiLineVertical className={css.verticalSvg} />
        <button className={css.logOutContainer}>
          <RxExit className={css.exitSvg} />
          <span className={css.text}>Exit</span>
        </button>
      </div>
    </div>
  );
};

export default Layout;
