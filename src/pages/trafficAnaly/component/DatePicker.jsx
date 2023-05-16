import React, { useEffect, useState } from "react";
import Calendar, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { ko } from "date-fns/esm/locale";
registerLocale("ko", ko);

export const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Calendar
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      locale={ko}
      inline
    />
  );
};
