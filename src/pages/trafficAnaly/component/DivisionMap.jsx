import { BarX, Table, Pie, FlowChart } from "components/charts";
import React from "react";
import styled from "styled-components";
import { SelecGroup } from "./SelectGroup";

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-gap: 10px;

  grid-template-rows: 2fr 1fr;
  grid-template-columns: repeat(8, 1fr);
  .item1:nth-child(1) {
    grid-column: span 4;
  }
  .item1:nth-child(2) {
    grid-column: span 4;
  }
  .item2:nth-child(3) {
    grid-column: span 3;
  }
  .item2:nth-child(4) {
    grid-column: span 3;
  }
  .item3:nth-child(5) {
    grid-column: span 2;
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
const ItemContainer = styled.div``;

const TableWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const DivisonMap = () => {
  const barXData = {
    title: "지역별 인구수",
    data: {
      value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
    },
  };
  const pieData = {
    title: "업종별 소비 비율",
    legend: {
      show: false,
      orient: "vertical",
      left: "left",
      top: "20%",
      data: ["숙박", "식당", "병원", "서적", "생활", "생활문화"],
    },
    series: {
      data: [
        { value: 335, name: "숙박" },
        { value: 310, name: "식당" },
        { value: 234, name: "병원" },
        { value: 534, name: "서적" },
        { value: 135, name: "생활" },
        { value: 548, name: "생활문화" },
      ],
    },
  };
  return (
    <Container className="container">
      <ItemContainer className="item1 flex-column">
        <SelecGroup />
        <FlowChart width="100%" height="100%" id="OdMap1" />
      </ItemContainer>
      <ItemContainer className="item1 flex-column itemStyle">
        <SelecGroup Time={true} />
        <FlowChart width="100%" height="100%" id="OdMap2" />
      </ItemContainer>
      <ItemContainer className="item2">
        <p className="chartTit">연도별 유입지 순위</p>
        <TableWrap>
          <Table />
          <Table />
        </TableWrap>
      </ItemContainer>
      <ItemContainer className="item2">
        <BarX barXData={barXData} />
      </ItemContainer>
      <ItemContainer className="item3">
        <Pie pieData={pieData} />
      </ItemContainer>
    </Container>
  );
};
