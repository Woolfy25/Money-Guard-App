import React from "react";
import MainButton from "../Buttons/MainButton";
import SecondaryButton from "../Buttons/SecondaryButton";

import css from "./QuitCheck.module.css";
import logo from "../..//images/MoneyGuardLogo.png";

const QuitCheck = () => {
  return (
    <div className={css.overlay}>
      <div className={css.overlayBlur}></div>
      <div className={css.container}>
        <img src={logo} alt="Money Guard Logo" className={css.logo} />
        <p className={css.text}>Are you sure you want to log out?</p>
        <div className={css.buttons}>
          <MainButton type="Submit" text="LOGOUT" />
          <SecondaryButton type="button" text="CANCEL" />
        </div>
      </div>
    </div>
  );
};

export default QuitCheck;
