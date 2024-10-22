import React from "react";
import css from "./Buttons.module.css";

const MainButton = ({ type, text }) => {
  return (
    <button className={css.main} type={type}>
      {text}
    </button>
  );
};

export default MainButton;
