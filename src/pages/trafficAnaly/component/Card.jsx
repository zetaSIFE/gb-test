import React from "react";
import styled from "styled-components";
import { BarX, Table, Pie } from "components/charts";

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  height:calc(100vh - 90px);
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

  .item1,
  .item2,
  .item3 {
    border: 1px solid #cccccc;
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
  }
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

export const Card = () => {
  return (
    <Container className="container">
      <ItemContainer className="item1">chart1</ItemContainer>
      <Group1 className="group1">
        <ItemContainer className="item2">
          <p className="chartTit">최대 소비 업종 순위</p>
          <Table/>
        </ItemContainer>
        <ItemContainer className="item2">
          {/* <p className="chartTit">업종별 결제금액</p> */}
          <BarX />
        </ItemContainer>
        <ItemContainer className="item2">
          {/* <p className="chartTit">행정구역별 카드사용량</p> */}
          <BarX />
        </ItemContainer>
      </Group1>
      <ItemContainer className="item1">chart5</ItemContainer>
      <ItemContainer className="item1">
        <div>
          <p className="chartTit inlineBlock">업종별 연령별 소비비율</p>
          <div className="inlineBlock">
        </div>
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

