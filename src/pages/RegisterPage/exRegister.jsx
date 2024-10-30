// <div className={css.backgorund}>
//   <form className={css.form} onSubmit={handleSubmit}>
//     <img src={logo} alt="Money Guard Logo" className={css.logo} />
//     <div className={css.divInput}>
//       <div className={css.inputContainer}>
//         <input
//           id="name"
//           name="name"
//           type="text"
//           placeholder="Name"
//           className={css.input}
//         />
//         <IoPersonSharp className={css.inputIcon} />
//       </div>
//       <div className={css.inputContainer}>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           placeholder="E-mail"
//           className={css.input}
//         />
//         <IoMailSharp className={css.inputIcon} />
//       </div>
//       <div className={css.inputContainer}>
//         <input
//           id="password"
//           name="password"
//           value={password}
//           onChange={onPasswordChange}
//           type={isPasswordVisible ? "text" : "password"}
//           placeholder="Password"
//           className={css.input}
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
//       <div className={css.inputContainer}>
//         <input
//           id="verify"
//           name="verify"
//           type={isPasswordVisible ? "text" : "password"}
//           placeholder="Password"
//           className={css.input}
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
//       <div
//         style={{
//           height: "5px",
//           width: "100%",
//           backgroundColor: "rgba(255, 255, 255, 0.60)",
//           marginTop: "-30px",
//           borderRadius: "5px",
//         }}
//       >
//         <div
//           style={{
//             height: "100%",
//             width: `${getProgressPercentage(testResult.score)}%`,
//             backgroundColor: strengthColor(testResult.score),
//             borderRadius: "5px",
//             transition: "width 0.3s ease-in-out",
//           }}
//         ></div>
//       </div>
//     </div>
//     <div className={css.divButtons}>
//       <MainButton type="Submit" text="REGISTER" />
//       <SecondaryButton
//         type="Button"
//         text="LOG IN"
//         onClick={() => {
//           navigate("/login");
//         }}
//       />
//     </div>
//   </form>
// </div>

import React, { useState } from "react";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import zxcvbn from "zxcvbn";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";

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
  const dispatch = useDispatch();
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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const form = event.currentTarget;
  //   dispatch(
  //     register({
  //       username: form.elements.name.value,
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  // };

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
        dispatch(register(values));
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
              <div className={css.inputContainer}>
                <Field
                  className={css.input}
                  id="password"
                  name="password"
                  // value={password}
                  // onChange={onPasswordChange}
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
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
              <div className={css.inputContainer}>
                <Field
                  className={css.input}
                  id="verifyPassword"
                  name="verifyPassword"
                  placeholder="Password"
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
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
