import React from "react";
import css from "./HomePage.module.css";

import { FaPen } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";

const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.table}>
        <div className={css.tableHead}>
          <div className={css.tableCell}>Date</div>
          <div className={css.tableCell}>Type</div>
          <div className={css.tableCell}>Category</div>
          <div className={css.tableCell}>Comment</div>
          <div className={`${css.tableCell} ${css.sumTitle}`}>Sum</div>
          <div className={css.action}></div>
        </div>
        <div className={css.tableRow}>
          <div className={css.tableCell}>2024-10-01</div>
          <div className={`${css.tableCell} ${css.type}`}>+</div>
          <div className={css.tableCell}>Food</div>
          <div className={css.tableCell}>Lunch with ariana</div>
          <div className={`${css.tableCell} ${css.sum}`}>$12</div>
          <div className={css.action}>
            <FaPen className={css.svg} />
            <button type="button" className={css.delete}>
              Delete
            </button>
          </div>
        </div>
        <div className={css.tableRow}>
          <div className={css.tableCell}>2024-10-01</div>
          <div className={`${css.tableCell} ${css.type}`}>+</div>
          <div className={css.tableCell}>Food</div>
          <div className={css.tableCell}>Lunch with ariana</div>
          <div className={`${css.tableCell} ${css.sum}`}>$12</div>
          <div className={css.action}>
            <FaPen className={css.svg} />
            <button type="button" className={css.delete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <button type="button" className={css.addButton}>
        <GoPlus className={css.svgButton} />
      </button>
    </div>
  );
};

export default HomePage;
