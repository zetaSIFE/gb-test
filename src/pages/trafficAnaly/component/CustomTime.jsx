import React, { forwardRef, useEffect, useState } from "react";
import Calendar, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";

const DatePickerBox = styled.div`
  display: flex;
  position: absolute;
  z-index: 3;
  margin-top: 5%;
`;

export const CustomTime = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <DatePickerBox>
      <Calendar
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale={ko}
        showTimeSelect
        showTimeSelectOnly
        inline
      />
      <Calendar
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        locale={ko}
        showTimeSelect
        showTimeSelectOnly
        inline
      />
    </DatePickerBox>
  );
};
