import React from "react";
import css from "./HomePage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { openAddModal } from "../../redux/modal/modalSlice";

import HomePageList from "../../components/HomePageList/HomePageList";
import Loader from "../../components/Loader/Loader";
import { selectisTransactionLoading } from "../../redux/transactions/selectors";

import { GoPlus } from "react-icons/go";

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectisTransactionLoading);
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
      <button
        type="button"
        className={css.addButton}
        onClick={() => dispatch(openAddModal())}
      >
        <GoPlus className={css.svgButton} />
      </button>
    </div>
  );
};

export default HomePage;
