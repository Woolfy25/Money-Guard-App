import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import css from "./NotFound.module.css";

import logo from "../../images/MoneyGuardLogo.png";

const NotFound = () => {
  const [timer, setTimer] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds(timerSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timerSeconds]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimer(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={css.backgorund}>
      <div className={css.container}>
        {timer && <Navigate to="/" />}
        <img src={logo} alt="Money Guard Logo" className={css.logo} />
        <div className={css.notDoundContainer}>
          <h2 className={css.notFound}>Page not found!</h2>
          <Link className={css.return} to="/">
            Return to the website
          </Link>
          <p className={css.redirect}>
            You will be redirected to the home page in {timerSeconds}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
