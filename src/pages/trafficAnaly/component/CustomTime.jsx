import React, { forwardRef, useEffect, useState } from "react";
import Calendar, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { ko } from "date-fns/esm/locale";
import { Select } from "./Select";

export const CustomTime = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button values={[]} onClick={onClick} ref={ref}>
      시간 설정
    </button>
  ));

  return (
    <Calendar
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      locale={ko}
      showTimeSelect
      showTimeSelectOnly
      customInput={<ExampleCustomInput />}
      style={{ width: "10px" }}
    />
  );
};
