import React from "react";
import css from "./HomePage.module.css";

import HomePageList from "../../components/HomePageList/HomePageList";

import { GoPlus } from "react-icons/go";

const HomePage = () => {
  return (
    <div className={css.container}>
      <ul className={css.table}>
        <div className={css.tableHead}>
          <div className={css.tableCell}>Date</div>
          <div className={css.tableCell}>Type</div>
          <div className={css.tableCell}>Category</div>
          <div className={css.tableCell}>Comment</div>
          <div className={`${css.tableCell} ${css.sumTitle}`}>Sum</div>
          <div className={css.action}></div>
        </div>
        <HomePageList></HomePageList>
      </ul>
      <button type="button" className={css.addButton}>
        <GoPlus className={css.svgButton} />
      </button>
    </div>
  );
};

export default HomePage;
