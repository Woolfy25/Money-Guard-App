import React from "react";
import css from "./Buttons.module.css";

const MainButton = ({ type, text, onClick }) => {
  return (
    <button className={css.main} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default MainButton;
