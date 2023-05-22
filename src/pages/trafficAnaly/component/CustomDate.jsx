import React, { useState } from "react";
import Calendar from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const DatePickerBox = styled.div`
  display: flex;
  position: absolute;
  z-index: 3;
  margin-top: 5%;
`;

export const CustomDate = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <DatePickerBox>
      <Calendar
        showIcon
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale={ko}
        inline
      />
      <Calendar
        showIcon
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        locale={ko}
        inline
      />
    </DatePickerBox>
    // <DatePickerBox>
    //   <Calendar
    //     customInput={<ExampleCustomInput />}
    //     renderCustomHeader={({
    //       monthDate,
    //       customHeaderCount,
    //       decreaseMonth,
    //       increaseMonth,
    //     }) => (
    //       <div>
    //         <button
    //           aria-label="Previous Month"
    //           className={
    //             "react-datepicker__navigation react-datepicker__navigation--previous"
    //           }
    //           style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
    //           onClick={decreaseMonth}
    //         >
    //           <span
    //             className={
    //               "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
    //             }
    //           >
    //             {"<"}
    //           </span>
    //         </button>
    //         <button
    //           aria-label="Next Month"
    //           className={
    //             "react-datepicker__navigation react-datepicker__navigation--next"
    //           }
    //           // style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
    //           onClick={increaseMonth}
    //         >
    //           <span
    //             className={
    //               "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
    //             }
    //           >
    //             {">"}
    //           </span>
    //         </button>
    //         <span className="react-datepicker__current-month">
    //           {monthDate.toLocaleString("ko-KR", {
    //             month: "long",
    //             year: "numeric",
    //           })}
    //         </span>
    //         <button
    //           aria-label="Previous Month"
    //           className={
    //             "react-datepicker__navigation react-datepicker__navigation--previous"
    //           }
    //           // style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
    //           onClick={decreaseMonth}
    //         >
    //           <span
    //             className={
    //               "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
    //             }
    //           >
    //             {"<"}
    //           </span>
    //         </button>
    //         <button
    //           aria-label="Next Month"
    //           className={
    //             "react-datepicker__navigation react-datepicker__navigation--next"
    //           }
    //           style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
    //           onClick={increaseMonth}
    //         >
    //           <span
    //             className={
    //               "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
    //             }
    //           >
    //             {">"}
    //           </span>
    //         </button>
    //       </div>
    //     )}
    //     selected={startDate}
    //     endDate={endDate}
    //     onChange={(date) => setStartDate(date)}
    //     monthsShown={2}
    //   />
    // </DatePickerBox>
  );
};
