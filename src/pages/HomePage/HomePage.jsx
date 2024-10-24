import React from "react";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.table}>
        <div className={css.tableHead}>
          <div className={css.tableCell}>Date</div>
          <div className={css.tableCell}>Type</div>
          <div className={css.tableCell}>Category</div>
          <div className={css.tableCell}>Comment</div>
          <div className={`${css.tableCell} ${css.sum}`}>Sum</div>
          <div className={css.test}></div>
        </div>

        <div className={css.tableRow}>
          <div className={css.tableCell}>2024-10-01</div>
          <div className={css.tableCell}>Expense</div>
          <div className={css.tableCell}>Food</div>
          <div className={`${css.tableCell} ${css.comment}`}>
            Lunch at restaurant fsdgfdgdfgdfgggggggg gggggggggggggggggggg
          </div>
          <div className={`${css.tableCell} ${css.sum}`}>$12</div>
          <div className={css.test}></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
