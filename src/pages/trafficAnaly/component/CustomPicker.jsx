import React, { forwardRef, useEffect, useState } from "react";
import Calendar, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { ko } from "date-fns/esm/locale";
import { Select } from "./Select";
registerLocale("ko", ko);

export const CustomPicker = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    
    <div className="flex">
		  <div>기간 설정 : {value}</div>
      <button values={[]}  onClick={onClick} ref={ref}>버튼</button>
    </div>
    // <Select title={"유입 유출"} values={[]} onClick={onClick} ref={ref} />
  ));

  return (
    <Calendar
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
};
