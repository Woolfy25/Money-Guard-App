import React, { useState, useEffect } from "react";
import PieChart from "../../components/Chart/Chart";
import css from "./StatisticsPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { getTransactionSummaries } from "../../redux/transactions/operations";
import { selectUserBalance } from "../../redux/user/selectors";
import { selectTransSummary } from "../../redux/transactions/selectors";

import { RiArrowDownWideFill } from "react-icons/ri";

const StatisticsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select month");
  const [isOpenYears, setIsOpenYears] = useState(false);
  const [selectedYear, setSelectedYear] = useState("Select year");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTransactionSummaries());
  // }, [dispatch]);

  useEffect(() => {
    const monthIndex =
      selectedOption !== "Select month"
        ? months.indexOf(selectedOption) + 1
        : undefined;
    const yearValue = selectedYear !== "Select year" ? selectedYear : undefined;

    dispatch(getTransactionSummaries({ month: monthIndex, year: yearValue }));
  }, [selectedOption, selectedYear, dispatch]);

  const toggleDropdown = () => {
    if (isOpenYears) setIsOpenYears(false);
    setIsOpen(!isOpen);
  };
  const toggleDropdownYear = () => {
    if (isOpen) setIsOpen(false);
    setIsOpenYears(!isOpenYears);
  };

  const handleOptionClick = (month) => {
    setSelectedOption(month);
    setIsOpen(false);
  };

  const handleOptionYears = (year) => {
    setSelectedYear(year);
    setIsOpenYears(false);
  };

  const resetSelections = () => {
    setSelectedOption("Select month");
    setSelectedYear("Select year");
    dispatch(getTransactionSummaries());
  };

  const userBalance = useSelector(selectTransSummary);
  const summary = useSelector(selectTransSummary);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = [
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
  ];

  const colors = [
    "#FED057",
    "#FFD8D0",
    "#FD9498",
    "#C5BAFF",
    "#6E78E8",
    "#4A56E2",
    "#81E1FF",
    "#24CCA7",
    "#00AD84",
    "#33A1FF",
    "#a63838",
  ];
  return (
    <div className={css.container}>
      <div className={css.statistics}>
        <h2 className={css.title}>Statistics</h2>
        <div className={css.chartContainer}>
          <div className={css.chartBreaker}>
            <div className={css.chartBalance}>
              <PieChart />
              <p className={css.balance}>
                ${" "}
                {userBalance.periodTotal !== null &&
                userBalance.periodTotal !== undefined
                  ? userBalance.periodTotal.toFixed(2)
                  : "0.00"}
              </p>
            </div>
            <button onClick={resetSelections} className={css.resetButton}>
              Reset data
            </button>
          </div>
          <div className={css.statsContainer}>
            <div className={css.inputs}>
              <div className={css.dropdown}>
                <div className={css.dropdownHeader} onClick={toggleDropdown}>
                  <span className={css.selectedOption}>{selectedOption}</span>
                  <RiArrowDownWideFill
                    className={`${css.arrow} ${isOpen ? css.open : ""}`}
                  />
                </div>
                {isOpen && (
                  <div className={css.dropdownContainer}>
                    <div className={css.dropdownList}>
                      {months.map((month) => (
                        <div
                          key={month}
                          className={css.dropdownOption}
                          onClick={() => handleOptionClick(month)}
                        >
                          {month}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className={css.dropdown}>
                <div
                  className={css.dropdownHeader}
                  onClick={toggleDropdownYear}
                >
                  <span>{selectedYear}</span>
                  <RiArrowDownWideFill
                    className={`${css.arrow} ${isOpenYears ? css.open : ""}`}
                  />
                </div>
                {isOpenYears && (
                  <div className={css.dropdownContainer}>
                    <div className={css.dropdownList}>
                      {years.map((year) => (
                        <div
                          key={year}
                          className={css.dropdownOption}
                          onClick={() => handleOptionYears(year)}
                        >
                          {year}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={css.categoryListContianer}>
              <div className={css.categoryTitleContainer}>
                <p className={css.categoryTitle}>Category</p>
                <p className={css.categoryTitle}>Sum</p>
              </div>
              <div className={css.categoryList}>
                {summary.categoriesSummary ? (
                  summary.categoriesSummary.map((category, index) => (
                    <div className={css.tableRow} key={index}>
                      <div className={css.tableBreaker}>
                        <div
                          className={css.tableCellColor}
                          style={{
                            backgroundColor: colors[index % colors.length],
                          }}
                        ></div>
                        <div className={css.tableCell}>{category.name}</div>
                      </div>

                      <div className={css.tableCell}>
                        {Math.abs(category.total).toFixed(2)}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className={css.noCategory}>No category data available.</p>
                )}
              </div>

              <div className={css.balanceStatsContainer}>
                <div className={css.balanceStats}>
                  <p className={css.balanceStatsText}>Expenses:</p>
                  <p className={`${css.balanceStatsText} ${css.odd}`}>
                    {summary.expenseSummary !== null &&
                    summary.expenseSummary !== undefined
                      ? Math.abs(summary.expenseSummary).toFixed(2)
                      : "0.00"}
                  </p>
                </div>
                <div className={css.balanceStats}>
                  <p className={css.balanceStatsText}>Income:</p>
                  <p className={`${css.balanceStatsText} ${css.even}`}>
                    {summary.incomeSummary !== null &&
                    summary.incomeSummary !== undefined
                      ? summary.incomeSummary.toFixed(2)
                      : "0.00"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
