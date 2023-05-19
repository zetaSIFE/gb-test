import React from "react";
import styled from "styled-components";

import { DatePicker } from "./DatePicker";
import { TimePicker } from "./TimePicker";
import { CustomPicker } from "./CustomPicker";
import { CustomTime } from "./CustomTime";
import { ReactComponent as ArrowIcon } from "assets/images/buttons/selectArrow.svg";
import { Select } from "./Select";

const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const SelecBox = styled.div`
  width: 120px;
  position: relative;
  margin-bottom: 1%;

  .CustomPicker,
  .CustomTime,
  select {
    width: 100%;
    height: 25px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    background: #ffffff;
    text-align: center;
    padding-right: 20%;
    appearance: none;
  }

  svg {
    position: absolute;
    left: 80%;
    top: 10%;
  }
`;

export const SelecGroup = (props) => {
  return (
    <Group>
      <SelecBox>
        <Select
          title={"유입 유출"}
          values={["유입", "유출"]}
          className="item2"
        />
        <ArrowIcon />
      </SelecBox>
      <SelecBox>
        <CustomPicker />
        <ArrowIcon />
      </SelecBox>
      {/* <Select
  title={"기간 설정"}
  values={[]}
  onClick={() => showDatePicker()}
/>
{openDate && <DatePicker />}
*/}
      {/* <PickerBox>
  <Select
    title={"시간 설정"}
    values={[]}
    onClick={() => showTimePicker()}
  />
  {openTime && <TimePicker />}
</PickerBox> */}
      <SelecBox>
        <CustomTime />
        <ArrowIcon />
      </SelecBox>
      <SelecBox>
        <Select title={"성별 설정"} values={["남자", "여자"]} />
        <ArrowIcon />
      </SelecBox>
      <SelecBox>
        <Select title={"연령 설정"} values={["유입", "유출"]} />
        <ArrowIcon />
      </SelecBox>
    </Group>
  );
};
