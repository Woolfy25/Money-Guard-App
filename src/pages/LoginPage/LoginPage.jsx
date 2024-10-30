import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";

import MainButton from "../../components/Buttons/MainButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";

import { IoMailSharp } from "react-icons/io5";
import { MdLock } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import logo from "../../images/MoneyGuardLogo.png";
import css from "./LoginPage.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const submitValues = {
          email: values.email,
          password: values.password,
        };

        dispatch(login(submitValues));
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <div className={css.backgorund}>
          <Form className={css.form}>
            <img src={logo} alt="Money Guard Logo" className={css.logo} />
            <div className={css.divInput}>
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
              <div className={css.inputContainer}>
                <Field
                  className={css.input}
                  id="password"
                  name="password"
                  placeholder="Password"
                  type={isPasswordVisible ? "text" : "password"}
                />
                <ErrorMessage
                  name="password"
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
              <MainButton type="Submit" text="LOG IN" disabled={isSubmitting} />
              <SecondaryButton
                type="Button"
                text="REGISTER"
                onClick={() => {
                  navigate("/register");
                }}
              />
            </div>
          </Form>
        </div>
      )}
    </Formik>
    // <div className={css.backgorund}>
    //   <form className={css.form} onSubmit={handleSubmit}>
    //     <img src={logo} alt="Money Guard Logo" className={css.logo} />
    //     <div className={css.divInput}>
    //       <div className={css.inputContainer}>
    //         <input
    //           id="email"
    //           name="email"
    //           type="email"
    //           placeholder="E-mail"
    //           className={css.input}
    //           //   onChange={formik.handleChange}
    //           //   value={formik.values.email}
    //         />
    //         <IoMailSharp className={css.inputIcon} />
    //       </div>
    //       <div className={css.inputContainer}>
    //         <input
    //           id="password"
    //           name="password"
    //           type={isPasswordVisible ? "text" : "password"}
    //           placeholder="Password"
    //           className={css.input}
    //           //   onChange={formik.handleChange}
    //           //   value={formik.values.email}
    //         />
    //         <MdLock className={css.inputIcon} />
    //         <span className={css.toggleIcon} onClick={togglePasswordVisibility}>
    //           {isPasswordVisible ? (
    //             <IoMdEye className={css.inputPasswordReadable} />
    //           ) : (
    //             <IoMdEyeOff className={css.inputPasswordNormal} />
    //           )}
    //         </span>
    //       </div>
    //     </div>
    //     <div className={css.divButtons}>
    //       <MainButton type="Submit" text="LOG IN" />
    //       <SecondaryButton
    //         type="Button"
    //         text="REGISTER"
    //         onClick={() => {
    //           navigate("/register");
    //         }}
    //       />
    //     </div>
    //   </form>
    // </div>
  );
};

export default LoginForm;
