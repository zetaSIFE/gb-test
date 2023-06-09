import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowSvg } from "assets/images/buttons/leftArrow.svg";
import { useRecoilState } from "recoil";
import { slideIsOpen } from "states/PolicyEvalSlideBar";

const sampleDatas = [
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
  /* height: calc(100vh - 20px); */
`;

const BtnArrow = styled.div`
  position: absolute;
  right: 0px;
  width: 30px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .close {
    transform: rotate(180deg);
  }
`;

const Content = styled.div`
  width: 410px; // handleOnOff 함수의 contentStyle.width와 동일해야 한다.
  transition: width 0.2s ease-out; // 애니메이션 속성 설정해주기
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 40px;
  color: #333333;
  font-size: 14px;
`;

const Title = styled.div`
  height: 50px;
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

const SearchArea = styled.div`
  /* height: 200px; */
  margin-bottom: 20px;
`;

const SubTitle1 = styled.div`
  height: 10px;
  margin-top: 50px;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`;

const SearchBar = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid #cccccc;
  margin-top: 15px;
  padding: 12px;
`;

const SubTitle2 = styled.div`
  height: 44px;
  width: 100%;
  margin-top: 20px;
  background: #f0f4fd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

const Result = styled.div`
  max-height: calc(100vh - 600px);

  // 스크롤바 CSS
  overflow-y: auto;
  overflow: overlay; // overlay가 밑에 있어야 한다.
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #b9b9b9;
    border-radius: 10px;
  }
  :hover {
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: #ebeaea;
      border-radius: 0px 3px 3px 0px;
    }
  }
`;

const Item = styled.li`
  width: 99;
  height: 35px;
  border-bottom: 1px solid #cccccc;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 20px;
`;

const DataBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #ddd;
`;
const DataUl = styled.ul`
  overflow-y: auto;
  height: 250px;
`;
const DataLi = styled.li`
  cursor: pointer;
  height: 20px;
  :hover {
    background: #bcbcda;
  }
`;
export default function SideBar() {
  const [onOff, setOnOff] = useState(true);
  const [isOpenSlide, setIsOpenSlide] = useRecoilState(slideIsOpen);

  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const handleOnOff = () => {
    if (!contentRef || !contentRef.current) {
      // useRef 변수가 비었을 때 그냥 리턴하도록 예외처리
      return;
    }
    const contentStyle = contentRef.current.style;

    if (!onOff) {
      contentStyle.width = "410px";
      contentStyle.marginLeft = "";
      setTimeout(() => (contentStyle.visibility = ""), 200);
    } else if (onOff) {
      contentStyle.width = "0px";
      contentStyle.marginLeft = "-10px";
      contentStyle.visibility = "hidden";
    }
    // 슬라이드바의 가변 Size를 클릭할 때 마다 Recoil에 기록
    // setSizeAtom(containerRef.current.offsetWidth);
    setIsOpenSlide(!isOpenSlide);
    setOnOff((onOff) => !onOff);
  };

  useEffect(() => {});
  return (
    <Container ref={containerRef}>
      <BtnArrow onClick={() => handleOnOff()}>
        <ArrowSvg className={`${onOff ? "open" : "close"}`} />
      </BtnArrow>
      <Content ref={contentRef}>
        <Title>
          <div className="title">정책평가지원 서비스</div>
        </Title>
        <SearchArea>
          <SubTitle1 className="subtitle">지표 데이터명 검색</SubTitle1>
          <SearchBar type="text" placeholder="지표 데이터명 검색" />
        </SearchArea>
        <div style={{ width: "100%" }}>
          <div>데이터 선택</div>
          <DataBox
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              border: "1px solid #ddd",
              height: "250px",
            }}
          >
            <div className="leftBox">
              <DataUl>
                <DataLi>총인구수</DataLi>
                <DataLi>총인구수</DataLi>
                <DataLi>총인구수</DataLi>
                <DataLi>총인구수</DataLi>
                <DataLi>총인구수</DataLi>
                <DataLi>총인구수</DataLi>
                <DataLi>총인구수</DataLi>
                <DataLi>총인구수</DataLi>
                <DataLi>총인구수</DataLi>
                <DataLi>총인구수</DataLi>
                <DataLi>총인구수</DataLi>
                <DataLi>총인구수</DataLi>
                <DataLi>총인구수</DataLi>
                <DataLi>총인구수</DataLi>
                <DataLi>총인구수</DataLi>
              </DataUl>
            </div>
            <div className="rightBox">
              <DataUl>
                <DataLi>총인구수</DataLi>
                <DataLi>총인구수</DataLi>
                <DataLi>총인구수</DataLi>
              </DataUl>
            </div>
          </DataBox>
        </div>
        <div>
          <SubTitle2>데이터명 (데이터 트리 레벨1)</SubTitle2>
          <Result className="result">
            <ul>
              {sampleDatas.map((data, index) => (
                <Item key={index}>
                  <input type="checkbox" />
                  {data}
                </Item>
              ))}
            </ul>
          </Result>
        </div>
      </Content>
    </Container>
  );
}
