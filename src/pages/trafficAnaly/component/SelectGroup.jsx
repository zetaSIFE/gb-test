import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { CustomDate } from "./CustomDate";
import { CustomTime } from "./CustomTime";
import { ReactComponent as ArrowIcon } from "assets/images/buttons/selectArrow.svg";
import { Select } from "./Select";

const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  let showAll = false;

  if (JSON.stringify(props) == "{}") {
    showAll = true;
  }

  return (
    <Group>
      {props.Traffic || showAll ? (
        <SelecBox>
          <Select
            title={"유입 유출"}
            values={["유입", "유출"]}
            className="item2"
          />
          <ArrowIcon />
        </SelecBox>
      ) : (
        <></>
      )}
      {props.Date || showAll ? (
        <SelecBox>
          <button
            onClick={() => {
              setShowDate(!showDate);
              setShowTime(false);
            }}
            // onBlur={() => setShowDate(false)}
            className="CustomPicker"
          >
            기간 설정
          </button>
          <ArrowIcon />
          {showDate ? <CustomDate /> : <></>}
        </SelecBox>
      ) : (
        <></>
      )}
      {props.Time || showAll ? (
        <SelecBox>
          <button
            onClick={() => {
              setShowTime(!showTime);
              setShowDate(false);
            }}
            // onBlur={() => setShowTime(false)}
            className="CustomPicker"
          >
            시간 설정
          </button>
          <ArrowIcon />
          {showTime ? <CustomTime /> : <></>}
        </SelecBox>
      ) : (
        <></>
      )}
      {props.Gender || showAll ? (
        <SelecBox>
          <Select title={"성별 설정"} values={["남자", "여자"]} />
          <ArrowIcon />
        </SelecBox>
      ) : (
        <></>
      )}
      {props.Age || showAll ? (
        <SelecBox>
          <Select
            title={"연령 설정"}
            values={[
              "0~9세",
              "10~19세",
              "20~29세",
              "30~39세",
              "40~49세",
              "50~59세",
              "60~69세",
              "70~79세",
              "80~89세",
              "90~99세",
            ]}
          />
          <ArrowIcon />
        </SelecBox>
      ) : (
        <></>
      )}
    </Group>
  );
};
