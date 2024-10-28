import React, { useState } from "react";
import css from "./EditTransaction.module.css";
import MainButton from "../Buttons/MainButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { HiOutlineMinus } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { RiArrowDownWideFill } from "react-icons/ri";

const EditTransactionModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select category");
  const [selectedDate, setSelectedDate] = useState(null);
  const [incomeChecked, setIncomeChecked] = useState(false);
  const [expenseChecked, setExpenseChecked] = useState(false);

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

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleToggleIncome = () => {
    if (incomeChecked) return;
    setIncomeChecked((prevState) => !prevState);
    setExpenseChecked(false);
  };

  const handleToggleExpense = () => {
    if (expenseChecked) return;
    setExpenseChecked((prevState) => !prevState);
    setIncomeChecked(false);
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
            checked={incomeChecked}
            onChange={handleToggleIncome}
            className={css.toggleIncome}
          />
          <span className={css.breaker}>/</span>
          {/* <input
            type="checkbox"
            id="toggle"
            checked={isToggled}
            onChange={handleToggleChange}
            className={css.toggleInput}
          />
          <label htmlFor="toggle" className={css.toggleLable}>
            {isToggled ? (
              <HiOutlineMinus className={css.toggleSlider} />
            ) : (
              <GoPlus className={css.toggleSlider} />
            )}
          </label> */}
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
            checked={expenseChecked}
            onChange={handleToggleExpense}
            className={css.toggleIncome}
          />
        </div>
        <form className={css.selectionContainer}>
          <div className={css.dropdown}>
            <div className={css.dropdownHeader} onClick={toggleDropdown}>
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
              className={css.formElements}
              //   onChange={formik.handleChange}
              //   value={formik.values.email}
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
            //   onChange={formik.handleChange}
            //   value={formik.values.email}
          />
          <div className={css.buttons}>
            <MainButton type="Submit" text="SAVE" />
            <SecondaryButton type="button" text="CANCEL" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTransactionModal;
