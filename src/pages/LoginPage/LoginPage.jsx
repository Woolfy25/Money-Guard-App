import React from "react";
// import { useFormik } from "formik";
import MainButton from "../../components/Buttons/MainButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";

import logo from "../../images/MoneyGuardLogo.png";

import css from "./LoginPage.module.css";

const LoginForm = () => {
  return (
    <div className={css.backgorund}>
      <form className={css.form}>
        <img src={logo} alt="Money Guard Logo" className={css.logo} />
        <div className={css.divInput}>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            className={css.input}
            //   onChange={formik.handleChange}
            //   value={formik.values.email}
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className={css.input}
            //   onChange={formik.handleChange}
            //   value={formik.values.email}
          />
        </div>
        <div className={css.divButtons}>
          <MainButton type="Submit" text="LOG IN" />
          <SecondaryButton type="Button" text="REGISTER" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
