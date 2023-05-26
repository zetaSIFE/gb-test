import React, { useState } from "react";
import styled from "styled-components";

import { CustomDate } from "./CustomDate";
import { CustomTime } from "./CustomTime";
import { ReactComponent as ArrowIcon } from "assets/images/buttons/selectArrow.svg";
import { Select } from "./Select";
import { useRecoilState } from "recoil";
import {
  ageState,
  endDateState,
  endTimeState,
  genderState,
  startDateState,
  startTimeState,
  traffic,
  trafficState,
} from "states/TrafficAnaly";

const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .check {
    width: 10%;
    height: 30px;
    background: #11233f;
    color: #ffffff;
    cursor: pointer;
    border: 1px solid #cccccc;
    border-radius: 5px;
    float: right;
  }
`;

const SelecBox = styled.div`
  width: 120px;
  position: relative;
  margin-bottom: 1%;

  .CustomDate,
  .CustomTime,
  select {
    width: 100%;
    height: 30px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    background: #ffffff;
    text-align: center;
    padding-right: 20%;
    appearance: none;
    cursor: pointer;
  }

  svg {
    position: absolute;
    left: 80%;
    top: 10%;
  }
`;

/*
props 

Traffic: 유입 유출
Date: 기간 설정
Time: 시간 설정
Gender: 성별 설정
Age: 연령 설정
*/

export const SelecGroup = (props) => {
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const [traffic, setTraffic] = useRecoilState(trafficState);
  // const [startDate, setStartDate] = useRecoilState(startDateState);
  // const [endDate, setEndDate] = useRecoilState(endDateState);
  const [startTime, setStartTime] = useRecoilState(startTimeState);
  const [endTime, setEndTime] = useRecoilState(endTimeState);
  const [gender, setGender] = useRecoilState(genderState);
  const [age, setAge] = useRecoilState(ageState);

  let showAll = false;

  if (JSON.stringify(props) === "{}") {
    showAll = true;
  }

  return (
    <Group>
      {props.Traffic != undefined || showAll ? (
        <SelecBox>
          <Select
            onChange={setTraffic}
            title={"유입 유출"}
            values={[
              { name: "유입", value: true },
              { name: "유출", value: false },
            ]}
            // values={["유입", "유출"]}
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
            className="CustomDate"
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
            className="CustomDate"
          >
            시간 설정
          </button>
          <ArrowIcon />
          {showTime ? (
            <CustomTime setStartTime={setStartTime} setEndTime={setEndTime} />
          ) : (
            <></>
          )}
        </SelecBox>
      ) : (
        <></>
      )}
      {props.Gender || showAll ? (
        <SelecBox>
          <Select
            title={"성별 설정"}
            onChange={setTraffic}
            values={[
              { name: "유입", value: true },
              { name: "유출", value: false },
            ]}
          />
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
              { name: "유입", value: true },
              { name: "유출", value: false },
            ]}
          />
          <ArrowIcon />
        </SelecBox>
      ) : (
        <></>
      )}
      <button className="check">조회</button>
    </Group>
  );
};
