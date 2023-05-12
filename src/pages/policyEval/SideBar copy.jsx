import React, { useState, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "assets/images/buttons/leftArrow.svg";

// direction(4) : ↑ → ↓ ←
const Container = styled.div`
  display: flex;
  margin: 10px 0px 10px -10px;
  /* border: 1px solid black; */
  border: 1px solid #c4ddff;
  border-radius: 0px 10px 10px 0px;
  box-shadow: 2px 0px 6px rgba(13, 19, 29, 0.15);
  padding-left: 10px;
`;

const Content = styled.div`
  width: 400px;
  /* background: yellow; */
  transition: width 0.2s ease-out; // 애니메이션 속성 설정해주기
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const Title = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c4ddff;
  /* padding-left: 20px; */
  font-size: 20px;
  font-weight: 700;
  color: #0068b7;
`;

const SearchArea = styled.div`
  background-color: skyblue;
  height: 200px;
`;

// ------------------------------
const ArrowContainer = styled.div`
  width: 30px;
  height: 70px;
  display: flex;
  border-bottom: 1px solid #c4ddff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Toggle = styled.div`
  display: flex;
  background-color: yellowgreen;

  .close {
    transform: rotate(180deg);
  }
`;

export default function SideBar() {
  const [onOff, setOnOff] = useState(true);

  const contentRef = useRef(null);
  const arrowContainerRef = useRef(null);

  const handleOnOff = () => {
    if (!contentRef || !contentRef.current) {
      // useRef 변수가 비었을 때 그냥 리턴하도록 예외처리
      return;
    }
    const contentStyle = contentRef.current.style;
    const arrowContainerStyle = arrowContainerRef.current.style;

    if (!onOff) {
      contentStyle.width = "400px";
      arrowContainerStyle.border = "";
      setTimeout(() => (contentStyle.visibility = ""), 100);
    } else if (onOff) {
      contentStyle.width = "0px";
      contentStyle.visibility = "hidden";
      arrowContainerStyle.border = "none";
    }
    setOnOff((onOff) => !onOff);
  };

  return (
    <Container>
      <Content ref={contentRef}>
        <Title>정책평가지원 서비스</Title>
        <SearchArea></SearchArea>
      </Content>
      <Toggle className={`${onOff ? "open" : "close"}`}>
        <ArrowContainer onClick={() => handleOnOff()} ref={arrowContainerRef}>
          <LeftArrow className={`${onOff ? "open" : "close"}`} />
        </ArrowContainer>
      </Toggle>
    </Container>
  );
}
// style={{ marginTop: "10px" }}
