import React, { useState } from "react";
// import { useFormik } from "formik";
import MainButton from "../../components/Buttons/MainButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";

import { IoMailSharp } from "react-icons/io5";
import { MdLock } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import logo from "../../images/MoneyGuardLogo.png";
import css from "./LoginPage.module.css";

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={css.backgorund}>
      <form className={css.form}>
        <img src={logo} alt="Money Guard Logo" className={css.logo} />
        <div className={css.divInput}>
          <div className={css.inputContainer}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              className={css.input}
              //   onChange={formik.handleChange}
              //   value={formik.values.email}
            />
            <IoMailSharp className={css.inputIcon} />
          </div>
          <div className={css.inputContainer}>
            <input
              id="password"
              name="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              className={css.input}
              //   onChange={formik.handleChange}
              //   value={formik.values.email}
            />
            <MdLock className={css.inputIcon} />
            <span className={css.toggleIcon} onClick={togglePasswordVisibility}>
              {isPasswordVisible ? (
                <IoMdEye className={css.inputPasswordReadable} />
              ) : (
                <IoMdEyeOff className={css.inputPasswordNormal} />
              )}
            </span>
          </div>
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
