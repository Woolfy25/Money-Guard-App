import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import zxcvbn from "zxcvbn";
// import { useFormik } from "formik";
import MainButton from "../../components/Buttons/MainButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";

import { IoMailSharp } from "react-icons/io5";
import { MdLock } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import logo from "../../images/MoneyGuardLogo.png";
import css from "./RegisterPage.module.css";

const RegisterForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const testResult = zxcvbn(password);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const strengthColor = () => {
    switch (testResult.score) {
      case 0:
        return "rgba(255, 255, 255, 0.60)";
      case 1:
        return "red";
      case 2:
        return "orange";
      case 3:
        return "yellow";
      case 4:
        return "green";
      default:
        return "";
    }
  };

  const getProgressPercentage = () => {
    switch (testResult.score) {
      case 0:
        return 0;
      case 1:
        return 25;
      case 2:
        return 50;
      case 3:
        return 75;
      case 4:
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div className={css.backgorund}>
      <form className={css.form}>
        <img src={logo} alt="Money Guard Logo" className={css.logo} />
        <div className={css.divInput}>
          <div className={css.inputContainer}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              className={css.input}
              //   onChange={formik.handleChange}
              //   value={formik.values.email}
            />
            <IoPersonSharp className={css.inputIcon} />
          </div>
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
              value={password}
              onChange={onPasswordChange}
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
          <div className={css.inputContainer}>
            <input
              id="verify"
              name="verify"
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
          <div
            style={{
              height: "5px",
              width: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.60)",
              marginTop: "-30px",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${getProgressPercentage(testResult.score)}%`,
                backgroundColor: strengthColor(testResult.score),
                borderRadius: "5px",
                transition: "width 0.3s ease-in-out",
              }}
            ></div>
          </div>
        </div>
        <div className={css.divButtons}>
          <MainButton type="Submit" text="REGISTER" />
          <SecondaryButton
            type="Button"
            text="LOG IN"
            onClick={() => {
              navigate("/login");
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
