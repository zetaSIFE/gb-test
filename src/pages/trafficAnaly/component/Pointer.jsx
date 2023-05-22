import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as PointerSVG } from "assets/images/buttons/pointer.svg";

// ****************
// const pointerArr = [
//   {val: "1", name:'안동시 일직면'},
//   {val: "2", name:'안동시 북후면'},
//   {val: "3", name:'안동시 와룡면'},
//   {val: "4", name:'안동시 길안면'},
//   {val: "5", name:'안동시 임하면'},
//   {val: "6", name:'안동시 풍천면'},
// ];
// ****************

const Container = styled.div`
  display: flex;
  padding: 10px;
`;
const SvgCotainer = styled.div`
  margin-right: -15px;
  .textArea {
    font-size: 16px;
    fill: white;
  }
`;
const TimeContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  padding-left: 15%;
  padding-right: 25%;
  label {
    color: "#CCCCCC";
  }
`;

export const Pointer = (props) => {
  const pointerArr = props.pointerData;
  const pointerColor = [
    "#6497FF",
    "#427FFA",
    "#3B72E1",
    "#3566C8",
    "#325FBC",
    "#284C96",
  ];

  const timeLabel = [
    "00시",
    "02시",
    "04시",
    "06시",
    "08시",
    "10시",
    "12시",
    "14시",
    "16시",
    "18시",
    "20시",
    "22시",
  ];
  return (
    <Container>
      {pointerArr.map((item, index) => (
        <SvgCotainer>
          <svg
            // width="305"
            width="100vw * 10%"
            height="140"
            viewBox="0 0 305 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59 0L59 140H58L58 4.37103e-08L59 0Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M204.818 0V140H203.818V4.37103e-08L204.818 0Z"
              fill="#CCCCCC"
            />
            <path
              d="M29.3484 70L0 30H275.046L304.395 70L275.046 110H0L29.3484 70Z"
              fill={pointerColor[index]}
            />
            <text className="textArea" x="100" y="75">
              {item.name}
            </text>
          </svg>
          <TimeContainer>
            <label>{timeLabel[index * 2]}</label>
            <label>{timeLabel[index * 2 + 1]}</label>
          </TimeContainer>
        </SvgCotainer>
      ))}
    </Container>
  );
};
