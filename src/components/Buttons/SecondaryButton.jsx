import React from "react";
import css from "./Buttons.module.css";

const SecondaryButton = ({ type, text }) => {
  return (
    <button className={css.secondary} type={type}>
      {text}
    </button>
  );
};

export default SecondaryButton;
