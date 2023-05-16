import React, { useState, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowSvg } from "assets/images/buttons/leftArrow.svg";
import { BtnReport } from "components/buttons";

const sampleDatas = [
  "데이터1 만약 데이터의 길이가 엄청 길면 어떻게 될까요?",
  "데이터1",
  "데이터1",
  "데이터1",
  "데이터1",
  "데이터1",
  "데이터1",
  "데이터1",
  "데이터1",
  "데이터1",
  "데이터1",
  "데이터1",
  "데이터1",
  "데이터1",
  "데이터1",
  "데이터1",
  "데이터1",
  "데이터1",
  "데이터1",
  "데이터1",
  "데이터1",
];

// direction(4) : ↑ → ↓ ←
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px 0px 10px -20px;
  border: 1px solid #c4ddff;
  border-radius: 0px 10px 10px 0px;
  box-shadow: 2px 0px 6px rgba(13, 19, 29, 0.15);
  box-sizing: border-box;
`;

// Arrow Button을 기준으로 작성되어 있음
// Report Button은 Props로 크기 지정
const BtnContainer = styled.div`
  position: absolute;
  right: 0px;
  width: 30px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  .close {
    transform: rotate(180deg);
  }
`;

const Content = styled.div`
  width: 55vw;
  transition: width 0.4s ease-out; // 애니메이션 속성 설정해주기
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 40px;
  color: #333333;
  font-size: 14px;
  .btnReport {
    position: absolute;
    right: 100px;
  }
  /* background-color: blue; */
`;

const AnalyContainer = styled.div`
  width: 100%;
  height: 80px;
  background: grey;
`;

const Title = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c4ddff;
  margin: 0px -20px 0px -20px;
  .title {
    font-size: 20px;
    font-weight: 700;
    color: #0068b7;
    padding-left: 20px;
  }
`;

// const SearchArea = styled.div`
//   height: 200px;
// `;

// const SubTitle1 = styled.div`
//   margin-top: 50px;
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 26px;
// `;

// const SearchBar = styled.input`
//   height: 40px;
//   width: 100%;
//   border: 1px solid #cccccc;
//   margin-top: 15px;
//   padding: 12px;
// `;

// const SubTitle2 = styled.div`
//   height: 44px;
//   width: 100%;
//   margin-top: 20px;
//   background: #f0f4fd;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: 700;
// `;

// const Result = styled.div`
//   max-height: calc(100vh - 300px);
//   overflow-y: auto;
//   /* background-color: skyblue; */
// `;

// const Item = styled.li`
//   width: 99;
//   height: 45px;
//   /* background-color: grey; */
//   border-bottom: 1px solid #cccccc;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

export default function SideBar() {
  const [onOff, setOnOff] = useState(true);

  const contentRef = useRef(null);

  const handleOnOff = () => {
    if (!contentRef || !contentRef.current) {
      // useRef 변수가 비었을 때 그냥 리턴하도록 예외처리
      return;
    }
    const contentStyle = contentRef.current.style;

    if (!onOff) {
      contentStyle.width = "55vw";
      setTimeout(() => (contentStyle.visibility = ""), 100);
    } else if (onOff) {
      contentStyle.width = "0px";
      contentStyle.marginLeft = "-10px";
      contentStyle.visibility = "hidden";
    }
    setOnOff((onOff) => !onOff);
  };

  return (
    <Container>
      <BtnContainer onClick={() => handleOnOff()}>
        <ArrowSvg className={`${onOff ? "open" : "close"}`} />
      </BtnContainer>

      {/* Content 안에 포함된 요소들만 close시 hide가 적용된다. */}
      <Content ref={contentRef}>
        <BtnContainer style={{ width: "210px", marginRight: "30px" }}>
          <BtnReport className="btnReport" />
        </BtnContainer>
        <Title>
          <div className="title">산업투자효과 분석 서비스</div>
        </Title>
        <AnalyContainer></AnalyContainer>
        {/* <SearchArea>
          <SubTitle1 className="subtitle">지표 데이터명 검색</SubTitle1>
          <SearchBar type="text" placeholder="지표 데이터명 검색" />
          <SubTitle2>데이터명 (여기에 뭐 적는겁니까?)</SubTitle2>
        </SearchArea>
        <Result className="result">
          <ul>
            {sampleDatas.map((data, index) => (
              <Item key={index}>{data}</Item>
            ))}
          </ul>
        </Result> */}
      </Content>
    </Container>
  );
}
// style={{ marginTop: "10px" }}
