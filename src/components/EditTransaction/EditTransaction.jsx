import React, { useState, useEffect } from "react";
import css from "./EditTransaction.module.css";
import "react-datepicker/dist/react-datepicker.css";
import Notiflix from "notiflix";

import MainButton from "../Buttons/MainButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import DatePicker from "react-datepicker";

import { useDispatch, useSelector } from "react-redux";
import { closeEditModal } from "../../redux/modal/modalSlice";
import { editTransaction } from "../../redux/transactions/operations";
import {
  selectTransCategories,
  selectTransactions,
} from "../../redux/transactions/selectors";
import { selectEditId } from "../../redux/modal/selectors";

import { RiArrowDownWideFill } from "react-icons/ri";

const EditTransactionModal = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select category");
  const [selectedDate, setSelectedDate] = useState(null);
  const [incomeChecked, setIncomeChecked] = useState(true);
  const [expenseChecked, setExpenseChecked] = useState(false);
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector(selectTransCategories);
  const transactions = useSelector(selectTransactions);
  const transactionId = useSelector(selectEditId);

  useEffect(() => {
    const transaction = transactions.find(
      (trans) => trans.id === transactionId
    );
    if (transaction) {
      setSelectedDate(new Date(transaction.transactionDate));
      setAmount(Math.abs(transaction.amount).toString());
      setComment(transaction.comment);
      setSelectedOption(
        categories.find((cat) => cat.id === transaction.categoryId)?.name ||
          "Select category"
      );
      if (transaction.type === "EXPENSE") {
        setExpenseChecked(true);
        setIncomeChecked(false);
        setIsToggled(true);
      } else {
        setIncomeChecked(true);
        setExpenseChecked(false);
        setIsToggled(false);
      }
    }
  }, [transactionId, transactions, categories]);

  const options = [
    "Main expenses",
    "Products",
    "Car",
    "Self care",
    "Child care",
    "Household products",
    "Education",
    "Leisure",
  ];

  const toggleDropdown = () => {
    if (incomeChecked) return;
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedCategory = categories.find(
      (cat) => cat.name === selectedOption
    );
    const categoryId = selectedCategory
      ? selectedCategory.id
      : categories.find((cat) => cat.name === "Income")?.id;
    if (!categoryId) {
      Notiflix.Notify.failure("Please select a valid category.");
      return;
    }
    const transactionData = {
      transactionDate: selectedDate
        ? selectedDate.toISOString().split("T")[0]
        : null,
      type: isToggled ? "EXPENSE" : "INCOME",
      categoryId: categoryId,
      comment: comment,
      amount: isToggled
        ? -Math.abs(parseFloat(amount))
        : Math.abs(parseFloat(amount)),
    };

    dispatch(editTransaction({ transactionId, transaction: transactionData }));
    dispatch(closeEditModal());
  };

  return (
    <div className={css.overlay}>
      <div className={css.overlayBlur}></div>
      <div className={css.container}>
        <h2 className={css.title}>Edit transaction</h2>
        <div className={css.toggleContainer}>
          <label
            htmlFor="toggleIncome"
            className={`${css.toggleOption} ${incomeChecked ? css.income : ""}`}
          >
            Income
          </label>
          <input
            type="checkbox"
            id="toggleIncome"
            className={css.toggleIncome}
          />
          <span className={css.breaker}>/</span>
          <label
            htmlFor="toggleExpense"
            className={`${css.toggleOption} ${
              expenseChecked ? css.expense : ""
            }`}
          >
            Expense
          </label>
          <input
            type="checkbox"
            id="toggleExpense"
            className={css.toggleIncome}
          />
        </div>
        <form className={css.selectionContainer} onSubmit={handleSubmit}>
          <div className={css.dropdown}>
            <div
              className={`${css.dropdownHeader} ${
                incomeChecked ? css.disabled : ""
              }`}
              onClick={toggleDropdown}
            >
              <span>{selectedOption}</span>
              <RiArrowDownWideFill
                className={`${css.arrow} ${isOpen ? css.open : ""}`}
              />
            </div>
            {isOpen && (
              <div className={css.dropdownList}>
                <div className={css.overlayBlurDrop}></div>
                {options.map((option) => (
                  <div
                    key={option}
                    className={css.dropdownOption}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={css.formElementsContainer}>
            <input
              name="sum"
              type="text"
              placeholder="0.00"
              value={amount}
              className={css.formElements}
              onChange={(event) => setAmount(event.target.value)}
            />
            <DatePicker
              className={css.formElements}
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy/MM/dd"
              placeholderText="Select the date!"
            />
          </div>
          <input
            name="comment"
            type="text"
            placeholder="Comment"
            className={css.formElementsComment}
            onChange={(event) => setComment(event.target.value)}
            value={comment}
          />
          <div className={css.buttons}>
            <MainButton type="Submit" text="SAVE" />
            <SecondaryButton
              type="button"
              text="CANCEL"
              onClick={() => dispatch(closeEditModal())}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTransactionModal;
