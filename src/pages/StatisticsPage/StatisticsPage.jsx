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

  useEffect(() => {
    dispatch(getTransactionSummaries());
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

  const userBalance = useSelector(selectUserBalance);
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
  ];
  return (
    <div className={css.container}>
      <div className={css.statistics}>
        <h2 className={css.title}>Statistics</h2>
        <div className={css.chartContainer}>
          <div className={css.chartBalance}>
            <PieChart />
            <p className={css.balance}>
              ${" "}
              {userBalance !== null && userBalance !== undefined
                ? userBalance.toFixed(2)
                : "0.00"}
            </p>
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
                <div className={css.tableRow}>
                  <div className={css.tableBreaker}>
                    <div className={css.tableCellColor}></div>
                    <div className={css.tableCell}>Main expenses</div>
                  </div>
                  <div className={css.tableCell}>8 700.00</div>
                </div>
                <div className={css.tableRow}>
                  <div className={css.tableBreaker}>
                    <div className={css.tableCellColor}></div>
                    <div className={css.tableCell}>Main expenses</div>
                  </div>
                  <div className={css.tableCell}>8 700.00</div>
                </div>
                <div className={css.tableRow}>
                  <div className={css.tableBreaker}>
                    <div className={css.tableCellColor}></div>
                    <div className={css.tableCell}>Main expenses</div>
                  </div>
                  <div className={css.tableCell}>8 700.00</div>
                </div>
                <div className={css.tableRow}>
                  <div className={css.tableBreaker}>
                    <div className={css.tableCellColor}></div>
                    <div className={css.tableCell}>Main expenses</div>
                  </div>
                  <div className={css.tableCell}>8 700.00</div>
                </div>
                <div className={css.tableRow}>
                  <div className={css.tableBreaker}>
                    <div className={css.tableCellColor}></div>
                    <div className={css.tableCell}>Main expenses</div>
                  </div>
                  <div className={css.tableCell}>8 700.00</div>
                </div>
                <div className={css.tableRow}>
                  <div className={css.tableBreaker}>
                    <div className={css.tableCellColor}></div>
                    <div className={css.tableCell}>Main expenses</div>
                  </div>
                  <div className={css.tableCell}>8 700.00</div>
                </div>
                <div className={css.tableRow}>
                  <div className={css.tableBreaker}>
                    <div className={css.tableCellColor}></div>
                    <div className={css.tableCell}>Main expenses</div>
                  </div>
                  <div className={css.tableCell}>8 700.00</div>
                </div>
                <div className={css.tableRow}>
                  <div className={css.tableBreaker}>
                    <div className={css.tableCellColor}></div>
                    <div className={css.tableCell}>Main expenses</div>
                  </div>
                  <div className={css.tableCell}>8 700.00</div>
                </div>
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
