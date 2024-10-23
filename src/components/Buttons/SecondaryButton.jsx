import React from "react";
import css from "./Buttons.module.css";

const SecondaryButton = ({ type, text, onClick }) => {
  return (
    <button className={css.secondary} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default SecondaryButton;
