import React, { useState, useEffect } from "react";
import css from "./AddTransaction.module.css";
import MainButton from "../Buttons/MainButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useDispatch, useSelector } from "react-redux";
import { closeAddModal } from "../../redux/modal/modalSlice";
import {
  postTransaction,
  getTransactionCategories,
} from "../../redux/transactions/operations";

import { HiOutlineMinus } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { RiArrowDownWideFill } from "react-icons/ri";

const AddTransactionModal = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select category");
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionCategories());
  }, [dispatch]);

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

  const handleToggleChange = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <div className={css.overlay}>
      <div className={css.overlayBlur}></div>
      <div className={css.container}>
        <h2 className={css.title}>Add transaction</h2>
        <div className={css.toggleContainer}>
          <span
            className={`${css.toggleOption} ${css.income} ${
              isToggled ? css.active : ""
            }`}
          >
            Income
          </span>
          <input
            type="checkbox"
            id="toggle"
            checked={isToggled}
            onChange={handleToggleChange}
            className={css.toggleInput}
          />
          <label htmlFor="toggle" className={css.toggleLable}>
            <span
              className={css.toggleSlider}
              style={{ left: isToggled ? "45px" : "-5px" }}
            >
              {isToggled ? (
                <HiOutlineMinus className={css.toggleSliderSvg} />
              ) : (
                <GoPlus className={css.toggleSliderSvg} />
              )}
            </span>
          </label>
          {/* <label htmlFor="toggle" className={css.toggleLable}>
            {isToggled ? (
              <HiOutlineMinus className={css.toggleSlider} />
            ) : (
              <GoPlus className={css.toggleSlider} />
            )}
          </label> */}
          <span className={`${css.toggleOption} ${css.expense}`}>Expense</span>
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
          />
          <div className={css.buttons}>
            <MainButton type="Submit" text="ADD" />
            <SecondaryButton
              type="button"
              text="CANCEL"
              onClick={() => dispatch(closeAddModal())}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;
