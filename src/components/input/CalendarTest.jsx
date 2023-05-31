import React, { useState } from "react";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
// import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

const Container = styled.div`
  // Canlendar Header 전체 - datepicker 고유 className
  .react-datepicker__header {
    background-color: #4c60e4;
    color: #ffffff;
    border-bottom: none;
    border-radius: 0;
  }
  .react-datepicker__day-name {
    color: #ffffff;
    width: 30px;
  }
  // input 부분
  .datePicker {
    width: 100px;
    border-radius: 5px;
  }

  .customHeaderContainer {
    background-color: red;
  }
  .datePickerWrapper {
    background-color: skyblue;
  }
  // 캘린더 날짜 선택 부분
  .calenderWrapper {
    background-color: #dcd5ff;
  }
`;

export const CalendarTest = () => {
  const [startDate, setStartDate] = useState(new Date());
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
    // "January",
    // "February",
    // "March",
    // "April",
    // "May",
    // "June",
    // "July",
    // "August",
    // "September",
    // "October",
    // "November",
    // "December",
  ];
  return (
    <Container>
      <DatePicker
        className="datePicker"
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            className="customHeaderContainer"
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"<"}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {">"}
            </button>
          </div>
        )}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </Container>
  );
};
// export const CalendarTest = () => {
//   const [startDate, setStartDate] = useState(new Date());

//   return (
//     <Container className="datePickerWrapper">
//       <DatePicker
//         className="dataPicker"
//         customHeaderName="datePickerWrapper"
//         calendarClassName="calenderWrapper"
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         showYearDropdown
//         showMonthDropdown
//         peekNextMonth
//         dropdownMode="select"
//         locale={ko} // 한국어 변환
//       />
//     </Container>
//   );
// };

// Default value : props를 넘겨받지 못했을 경우에도 오류가 발생하지 않음
// CalendarTest.defaultProps = {
//   props: null,
// };
