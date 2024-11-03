import React, { useEffect } from "react";
import css from "./MobileHomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { openEditModal, openAddModal } from "../../redux/modal/modalSlice";

import {
  getAll,
  deleteTransaction,
  getTransactionCategories,
} from "../../redux/transactions/operations";

import {
  selectTransactions,
  selectisTransactionLoading,
  selectTransCategories,
} from "../../redux/transactions/selectors";

import { FaPen } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";

const MobileHomePage = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const isLoading = useSelector(selectisTransactionLoading);
  const categories = useSelector(selectTransCategories);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTransactionCategories());
  }, [dispatch]);

  const deleteTransactionClick = (transactionId) => {
    dispatch(deleteTransaction(transactionId));
  };

  return (
    <div className={css.container}>
      <div className={css.table}>
        {transactions.map((transaction) => (
          <div className={css.tableRow} key={transaction.id}>
            <div className={css.tableCell}>
              <span className={css.tableTitle}>Date</span>
              <span className={css.tableElement}>
                {transaction.transactionDate}
              </span>
            </div>
            <div className={css.tableCell}>
              <span className={css.tableTitle}>Type</span>
              <span className={css.tableElement}>
                {transaction.type === "INCOME" ? "+" : "-"}
              </span>
            </div>
            <div className={css.tableCell}>
              <span className={css.tableTitle}>Category</span>
              <span className={css.tableElement}>
                {categories.find(
                  (category) => category.id === transaction.categoryId
                )?.name || "No category"}
              </span>
            </div>
            <div className={css.tableCell}>
              <span className={css.tableTitle}>Comment</span>
              <span className={css.tableElement}>{transaction.comment}</span>
            </div>
            <div className={css.tableCell}>
              <span className={css.tableTitle}>Sum</span>
              <span className={`${css.tableElement} ${css.sum}`}>
                {Math.abs(transaction.amount)}
              </span>
            </div>
            <div className={css.tableCell}>
              <button
                type="button"
                className={css.delete}
                onClick={() => {
                  deleteTransactionClick(transaction.id);
                }}
              >
                Delete
              </button>
              <FaPen
                className={css.svg}
                onClick={() => dispatch(openEditModal(transaction.id))}
              />
            </div>
          </div>
        ))}
      </div>
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

export default MobileHomePage;
