import React, { useEffect } from "react";
import css from "./HomePageList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { openEditModal } from "../../redux/modal/modalSlice";

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

import Loader from "../../components/Loader/Loader";

import { FaPen } from "react-icons/fa6";

const HomePageList = () => {
  const transactions = useSelector(selectTransactions);
  const isLoading = useSelector(selectisTransactionLoading);
  const categories = useSelector(selectTransCategories);
  const dispatch = useDispatch();

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
    <>
      {isLoading ? <Loader /> : null}
      {transactions.map((transaction) => (
        <div className={css.tableRow} key={transaction.id}>
          <div className={css.tableCell}>{transaction.transactionDate}</div>
          <div className={`${css.tableCell} ${css.type}`}>
            {transaction.type === "INCOME" ? "+" : "-"}
          </div>
          <div className={css.tableCell}>
            {categories.find(
              (category) => category.id === transaction.categoryId
            )?.name || "No category"}
          </div>
          <div className={css.tableCell}>{transaction.comment}</div>
          <div className={`${css.tableCell} ${css.sum}`}>
            {Math.abs(transaction.amount)}
          </div>
          <div className={css.action}>
            <FaPen
              className={css.svg}
              onClick={() => dispatch(openEditModal(transaction.id))}
            />
            <button
              type="button"
              className={css.delete}
              onClick={() => {
                deleteTransactionClick(transaction.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomePageList;
