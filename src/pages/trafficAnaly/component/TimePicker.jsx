import React, { useEffect, useState } from "react";
import Calendar from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

import { ko } from "date-fns/esm/locale";

export const TimePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Calendar
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      locale={ko}
      showTimeSelect
      showTimeSelectOnly
      inline
      customInput="eee"
    />
  );
};
