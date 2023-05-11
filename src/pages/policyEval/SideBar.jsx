import React, { useState, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "assets/images/buttons/leftArrow.svg";
import { ReactComponent as RightArrow } from "assets/images/buttons/rightArrow.svg";

// direction(4) : ↑ → ↓ ←
const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: 405px;
  height: 100% - 10px;
  margin: 10px 10px 10px -20px;
  /* background: yellow; */
  border-top: 1px solid #7eb3ff;
  border-bottom: 1px solid #7eb3ff;
  box-shadow: 2px 0px 6px rgba(13, 19, 29, 0.25);
  /* overflow: hidden; */
  transition: width 0.2s ease-out; // 애니메이션 속성 설정해주기
`;

const Toggle = styled.div`
  width: 40px;
  height: 100% - 10px;
  margin: 10px 10px 10px -10px;
  background: skyblue;
  border: 1px solid #7eb3ff;
  /* border-left: none; */
  box-shadow: 2px 0px 6px rgba(13, 19, 29, 0.25);
  border-radius: 0px 10px 10px 0px;
`;

export default function SideBar() {
  const [onOff, setOnOff] = useState(true);

  const contentRef = useRef(null);

  const handleOnOff = () => {
    if (!contentRef || !contentRef.current) {
      // useRef 변수가 비었을 때 그냥 리턴하도록 예외처리
      return;
    }
    const style = contentRef.current.style;

    if (!onOff) {
      style.width = "405px";
    } else if (onOff) {
      style.width = "0px";
    }
    setOnOff((onOff) => !onOff);
  };

  return (
    <Container>
      <Content ref={contentRef}></Content>
      <Toggle
        className={`${onOff ? "open" : "close"}`}
        onClick={() => handleOnOff()}
      ></Toggle>
    </Container>
  );
}
