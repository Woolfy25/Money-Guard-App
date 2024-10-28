import React, { useState } from "react";
import PieChart from "../../components/Chart/Chart";
import css from "./StatisticsPage.module.css";

import { RiArrowDownWideFill } from "react-icons/ri";

const StatisticsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select category");
  const [isOpenYears, setIsOpenYears] = useState(false);
  const [selectedYear, setSelectedYear] = useState("Select category");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleDropdownYear = () => setIsOpenYears(!isOpenYears);

  const handleOptionClick = (month) => {
    setSelectedOption(month);
    setIsOpen(false);
  };

  const handleOptionYears = (year) => {
    setSelectedYear(year);
    setIsOpenYears(false);
  };

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
          <PieChart />
          <div className={css.statsContainer}>
            <div className={css.inputs}>
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
                )}
              </div>
              <div className={css.dropdown}>
                <div
                  className={css.dropdownHeader}
                  onClick={toggleDropdownYear}
                >
                  <span>{selectedYear}</span>
                  <RiArrowDownWideFill
                    className={`${css.arrow} ${isOpen ? css.open : ""}`}
                  />
                </div>
                {isOpenYears && (
                  <div className={css.dropdownList}>
                    <div className={css.overlayBlurDrop}></div>
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
