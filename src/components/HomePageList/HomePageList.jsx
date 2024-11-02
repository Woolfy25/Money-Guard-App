import React, { useEffect } from "react";
import css from "./HomePageList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { openEditModal } from "../../redux/modal/modalSlice";

import { getAll, deleteTransaction } from "../../redux/transactions/operations";
import {
  selectTransactions,
  selectisTransactionLoading,
} from "../../redux/transactions/selectors";

import Loader from "../../components/Loader/Loader";

import { FaPen } from "react-icons/fa6";

const HomePageList = () => {
  const transactions = useSelector(selectTransactions);
  const isLoading = useSelector(selectisTransactionLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
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
          <div className={css.tableCell}>{transaction.type}</div>
          <div className={css.tableCell}>{transaction.comment}</div>
          <div className={`${css.tableCell} ${css.sum}`}>
            {transaction.amount}
          </div>
          <div className={css.action}>
            <FaPen
              className={css.svg}
              onClick={() => dispatch(openEditModal())}
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
