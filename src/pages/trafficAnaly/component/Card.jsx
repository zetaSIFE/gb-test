import React from "react";
import styled from "styled-components";
import { BarX, Table, Pie, BarNLine } from "components/charts";

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  height: calc(100vh - 90px);
  padding-bottom: 10px;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: repeat(8, 1fr);

  .item1:nth-child(1) {
    grid-column: span 3;
  }
  .group1:nth-child(2) {
    grid-column: span 5;
  }
  .item1:nth-child(3) {
    grid-column: span 6;
  }
  .item1:nth-child(4) {
    grid-column: span 2;
  }
  .item2:nth-child(1) {
    grid-column: span 2;
  }
  .item2:nth-child(2) {
    grid-column: span 2;
  }
  .item2:nth-child(3) {
    grid-column: span 4;
  }

  /* .item1,
  .item2,
  .item3 {
    border: 1px solid #cccccc;
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
  } */
`;

const Group1 = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(4, 1fr);
  padding: 0px;
  grid-gap: 10px;
`;

const ItemContainer = styled.div``;
const ChkContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const ChkBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ChkChart = styled.p`
  width: 60%;
`;
const ChkBoxchk = styled.div`
  background-color: #f3f3f3;
  padding: 20px 15px;
  height: 100%;
  label {
    display: inline-block;
    width: 50px;
    height: 35px;
  }
`;
export const Card = () => {
  const barXData = {
    title: "업종별 결제금액",
    data: {
      value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
    },
  };
  const barXData2 = {
    title: "행정구역별 카드 사용량",
    data: {
      value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
    },
  };
  return (
    <Container className="container">
      <ItemContainer className="item1 itemStyle">chart1</ItemContainer>
      <Group1 className="group1">
        <ItemContainer className="item2 itemStyle">
          <p className="chartTit">최대 소비 업종 순위</p>
          <Table />
        </ItemContainer>
        <ItemContainer className="item2 itemStyle">
          {/* <p className="chartTit">업종별 결제금액</p> */}
          <BarX barXData={barXData} />
        </ItemContainer>
        <ItemContainer className="item2 itemStyle">
          {/* <p className="chartTit">행정구역별 카드사용량</p> */}
          <BarX barXData={barXData2} />
        </ItemContainer>
      </Group1>
      <ChkContainer className="item1 itemStyle">
        <ChkBox>
          <p className="chartTit inlineBlock">업종별 카드사용량 추이</p>
          <ChkBoxchk>
            <input type="checkbox" checked />
            <label for="test">전체</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
          </ChkBoxchk>
        </ChkBox>
        <ChkChart>
          <BarNLine />
        </ChkChart>
      </ChkContainer>
      <ItemContainer className="item1 itemStyle">
        <div>
          <chkBoxTit className="chartTit inlineBlock">
            업종별 연령별 소비비율
          </chkBoxTit>
          <div className="inlineBlock"></div>
          <select>
            <option>업종선택</option>
            <option>업종선택</option>
            <option>업종선택</option>
            <option>업종선택</option>
          </select>
        </div>
        <Pie />
      </ItemContainer>
    </Container>
  );
};
