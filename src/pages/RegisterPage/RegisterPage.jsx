import React, { useState } from "react";
import logo from "../../images/MoneyGuardLogo.png";
import css from "./RegisterPage.module.css";

import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import zxcvbn from "zxcvbn";
import Notiflix from "notiflix";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";

import MainButton from "../../components/Buttons/MainButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";

import { IoMailSharp } from "react-icons/io5";
import { MdLock } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

const PasswordField = ({
  css,
  isPasswordVisible,
  togglePasswordVisibility,
  testResult,
}) => {
  const { setFieldValue } = useFormikContext();

  const handlePasswordChange = (e) => {
    const newValue = e.target.value;
    setFieldValue("password", newValue);
    setFieldValue("passwordStrength", zxcvbn(newValue).score);
  };

  return (
    <div className={css.inputContainer}>
      <Field
        className={css.input}
        id="password"
        name="password"
        type={isPasswordVisible ? "text" : "password"}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <ErrorMessage name="password" component="div" className={css.error} />
      <MdLock className={css.inputIcon} />
      <span className={css.toggleIcon} onClick={togglePasswordVisibility}>
        {isPasswordVisible ? (
          <IoMdEye className={css.inputPasswordReadable} />
        ) : (
          <IoMdEyeOff className={css.inputPasswordNormal} />
        )}
      </span>
      <PasswordStrengthMeter strength={testResult} css={css} />
    </div>
  );
};

const PasswordStrengthMeter = ({ strength, css }) => {
  const colors = [
    "rgba(255, 255, 255, 0.60)",
    "red",
    "orange",
    "yellow",
    "green",
  ];

  const width = `${strength * 25}%`;

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: colors[0],
        height: "5px",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          height: "100%",
          width: width,
          backgroundColor: colors[strength],
          borderRadius: "5px",
          transition: "width 0.3s ease-in-out",
        }}
      />
    </div>
  );
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    verifyPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        verifyPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const submitValues = {
          username: values.username,
          email: values.email,
          password: values.password,
        };

        dispatch(register(submitValues))
          .then(() => {
            Notiflix.Notify.success("Registration successful!");
            resetForm();
          })
          .catch((error) => {
            Notiflix.Notify.failure("Registration failed. Please try again.");
            console.error(error);
          });
      }}
    >
      {({ isSubmitting, values }) => (
        <div className={css.backgorund}>
          <Form className={css.form}>
            <img src={logo} alt="Money Guard Logo" className={css.logo} />
            <div className={css.divInput}>
              <div className={css.inputContainer}>
                <Field
                  className={css.input}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Name"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className={css.error}
                />
                <IoPersonSharp className={css.inputIcon} />
              </div>
              <div className={css.inputContainer}>
                <Field
                  className={css.input}
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.error}
                />
                <IoMailSharp className={css.inputIcon} />
              </div>
              <PasswordField
                css={css}
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={togglePasswordVisibility}
                testResult={values.passwordStrength}
              />
              <div className={css.inputContainer}>
                <Field
                  className={css.input}
                  id="verifyPassword"
                  name="verifyPassword"
                  placeholder="Confirm password"
                  type={isPasswordVisible ? "text" : "password"}
                />
                <ErrorMessage
                  name="verifyPassword"
                  component="div"
                  className={css.error}
                />
                <MdLock className={css.inputIcon} />
                <span
                  className={css.toggleIcon}
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <IoMdEye className={css.inputPasswordReadable} />
                  ) : (
                    <IoMdEyeOff className={css.inputPasswordNormal} />
                  )}
                </span>
              </div>
            </div>
            <div className={css.divButtons}>
              <MainButton
                type="Submit"
                text="REGISTER"
                disabled={isSubmitting}
              />
              <SecondaryButton
                type="Button"
                text="LOG IN"
                onClick={() => {
                  navigate("/login");
                }}
              />
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
