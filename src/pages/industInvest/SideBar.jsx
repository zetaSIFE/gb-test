import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowSvg } from "assets/images/buttons/leftArrow.svg";
import { BtnReport } from "components/buttons";
import { Tree } from "components/charts/Tree";
import {
  smapleData1,
  smapleData2,
  smapleData3,
  smapleData4,
  smapleData5,
} from "./SampleData";

// NOTE Dummy Dater

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

// NOTE
// Arrow Button을 기준으로 작성되어 있음
// Report Button은 Props로 크기를 지정했음
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
  width: 60vw; // NOTE handleOnOff 함수의 contentStyle.width 속성값과 동일 해야한다.
  transition: width 0.3s ease-out; // 애니메이션 속성 스피드 설정
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

const AnalyContainer = styled.div`
  width: 100%;
  height: 80px;
  padding: 15px;
  background: #f5f5f5;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5%;
`;

const ResultConatiner = styled.div`
  display: flex;

  /* justify-content: space-between; */
  /* flex-direction: column;
  flex-wrap: wrap; */
  /* width: 100%; */
`;

const Result = styled.div`
  /* width: 50vw; */
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  max-height: calc(100vh - 250px);

  // 스크롤바 CSS
  overflow-y: auto;
  overflow-x: hidden;
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

const ChartContainer = styled.div`
  width: 27vw;
  border: 1px solid #cccccc;
  border-radius: 10px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
  padding: 10px;
  /* height: 315px; */
`;

const InputBox = styled.input`
  width: 200px;
  height: 40px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(204, 204, 204);
  margin: 0 12px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 16px;
`;

const SelectBox = styled.select`
  width: 200px;
  height: 40px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(204, 204, 204);
  margin-left: 12px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 16px;
`;

const BtnGo = styled.button`
  width: 80px;
  height: 40px;
  background: linear-gradient(135deg, #5658df 0%, #2f6dd0 100%);
  border-radius: 10px;
  border: 0;
  color: #fff;
`;
const TitBox = styled.div`
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const ChartLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  :last-child {
    border-bottom: 0;
  }
`;

export default function SideBar() {
  const [onOff, setOnOff] = useState(true);
  const [slideSize, setSlideSize] = useState(null);
  const contentRef = useRef(null);
  const resultRef = useRef(null);

  console.log(smapleData1);
  // const slideSize = contentRef.current.offsetWidth;
  // console.log(contentRef.current.offsetWidth);
  // const resultStyle = resultRef.current.style;
  const handleOnOff = () => {
    if (!contentRef || !contentRef.current) {
      // useRef 변수가 비었을 때 그냥 리턴하도록 예외처리
      return;
    }
    const contentStyle = contentRef.current.style;

    if (!onOff) {
      contentStyle.width = "60vw";
      contentStyle.marginLeft = "";
      setTimeout(() => (contentStyle.visibility = ""), 100);
    } else if (onOff) {
      // console.log(contentRef.current.offsetWidth);
      contentStyle.width = "0px";
      contentStyle.marginLeft = "-10px";
      contentStyle.visibility = "hidden";
    }
    setOnOff((onOff) => !onOff);
  };

  const handleSlideSize = () => {
    setSlideSize(contentRef.current.offsetWidth);
  };

  useEffect(() => {
    console.log(slideSize);
    // const slideSize = contentRef.current.offsetWidth;
    // const resultStyle = resultRef.current.style;
    // console.log(contentRef.current.offsetWidth);
    // resultStyle.width = slideSize;
  }, [slideSize]);
  return (
    <Container onchange={() => handleSlideSize()}>
      <BtnContainer onClick={() => handleOnOff()}>
        <ArrowSvg className={`${onOff ? "open" : "close"}`} />
      </BtnContainer>

      {/* Content 안에 포함된 요소들만 close시 hide가 적용된다. */}
      <Content ref={contentRef}>
        <BtnContainer style={{ width: "210px", marginRight: "40px" }}>
          <BtnReport className="btnReport" />
        </BtnContainer>
        <Title>
          <div className="title">산업투자효과 분석 서비스</div>
        </Title>
        <AnalyContainer>
          <div
            style={{
              marginRight: "40px",
            }}
          >
            <p className="inlineBlock">업종</p>
            <SelectBox>
              <option>농림수산품</option>
            </SelectBox>
          </div>
          <div>
            <p className="inlineBlock">투입금액</p>
            <InputBox type="text" placeholder="10" />
            <p className="inlineBlock">억원</p>
          </div>
          <BtnGo> 분석</BtnGo>
        </AnalyContainer>
        <TitBox>
          <h1>
            도내 <span className="redTxt">농림수산품</span> 업종에 대한{" "}
            <span className="redTxt">10억원</span> 투자 결과
          </h1>
          <h1>경상북도 부문별 거래표</h1>
        </TitBox>
        <ResultConatiner>
          <Result
            className="result"
            // style={{ overflowY: "scroll" }}
            ref={resultRef}
          >
            <ChartContainer>
              <div>
                <p className="chartTit">1. 생산 유발액</p>
              </div>
              <Tree className="chart1" title={""} data={smapleData1} />
              <div>
                <ul>
                  <ChartLi>
                    <p>도내 직접유발효과</p>
                    <p>10643472823원</p>
                  </ChartLi>
                  <ChartLi>
                    <p>도내 직접유발효과</p>
                    <p>10643472823원</p>
                  </ChartLi>
                  <ChartLi>
                    <p>도내 직접유발효과</p>
                    <p>10643472823원</p>
                  </ChartLi>
                </ul>
              </div>
            </ChartContainer>
            <ChartContainer>
              <div>
                <p className="chartTit">투입</p>
              </div>
              <Tree className="chart2" title={""} data={smapleData2} />
            </ChartContainer>
            <ChartContainer>
              <div>
                <p className="chartTit">2. 부가가치 유발액</p>
              </div>
              <Tree className="chart3" title={""} data={smapleData3} />
            </ChartContainer>
            <ChartContainer>
              <div>
                <p className="chartTit">배분</p>
              </div>
              <Tree className="chart4" title={""} data={smapleData4} />
            </ChartContainer>
            <ChartContainer>
              <div>
                <p className="chartTit">3. 유발 취업자수</p>
              </div>
              <Tree className="chart5" title={""} data={smapleData5} />
            </ChartContainer>
          </Result>
        </ResultConatiner>
      </Content>
    </Container>
  );
}
