import React from "react";
import css from ".//AddTransaction.module.css";

const AddTransactionModal = () => {
  return (
    <div className={css.overlay}>
      <div className={css.container}></div>
    </div>
  );
};

export default AddTransactionModal;
