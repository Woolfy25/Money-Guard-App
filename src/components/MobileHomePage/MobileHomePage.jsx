import React from "react";
import css from "./MobileHomePage.module.css";

import { FaPen } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";

const MobileHomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.table}>
        <div className={css.tableRow}>
          <div className={css.tableCell}>
            <span className={css.tableTitle}>Date</span>
            <span className={css.tableElement}>2024-10-01</span>
          </div>
          <div className={css.tableCell}>
            <span className={css.tableTitle}>Type</span>
            <span className={css.tableElement}>+</span>
          </div>
          <div className={css.tableCell}>
            <span className={css.tableTitle}>Category</span>
            <span className={css.tableElement}>Food</span>
          </div>
          <div className={css.tableCell}>
            <span className={css.tableTitle}>Comment</span>
            <span className={css.tableElement}>Lunch with ariana</span>
          </div>
          <div className={css.tableCell}>
            <span className={css.tableTitle}>Sum</span>
            <span className={`${css.tableElement} ${css.sum}`}>$12</span>
          </div>
          <div className={css.tableCell}>
            <button type="button" className={css.delete}>
              Delete
            </button>
            <FaPen className={css.svg} />
          </div>
        </div>
        <div className={css.tableRow}>
          <div className={css.tableCell}>
            <span className={css.tableTitle}>Date</span>
            <span className={css.tableElement}>2024-10-01</span>
          </div>
          <div className={css.tableCell}>
            <span className={css.tableTitle}>Type</span>
            <span className={css.tableElement}>+</span>
          </div>
          <div className={css.tableCell}>
            <span className={css.tableTitle}>Category</span>
            <span className={css.tableElement}>Food</span>
          </div>
          <div className={css.tableCell}>
            <span className={css.tableTitle}>Comment</span>
            <span className={css.tableElement}>Lunch with ariana</span>
          </div>
          <div className={css.tableCell}>
            <span className={css.tableTitle}>Sum</span>
            <span className={`${css.tableElement} ${css.sum}`}>$12</span>
          </div>
          <div className={css.tableCell}>
            <button type="button" className={css.delete}>
              Delete
            </button>
            <FaPen className={css.svg} />
          </div>
        </div>
      </div>
      <button type="button" className={css.addButton}>
        <GoPlus className={css.svgButton} />
      </button>
    </div>
  );
};

export default MobileHomePage;
