import { GbMap, BarX, Stacked, HalfPie, Pictorial } from "components/charts";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  padding: 10px;
  padding-top: 0;
  display: grid;
  grid-gap: 10px;

  grid-template-rows: 2fr 1fr;
  grid-template-columns: repeat(5, 1fr);
  .item1:nth-child(1) {
    grid-column: span 2;
  }
  .group1:nth-child(2) {
    grid-column: span 3;
  }
  .item1:nth-child(3) {
    grid-column: span 4;
  }
  .item1:nth-child(4) {
    grid-column: span 1;
  }

  /* .item1,
  .item2 {
    border: 1px solid #cccccc;
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
  } */
`;

const ItemContainer = styled.div`
  /* height: 100%; */
`;

const Group1 = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 0px;
  grid-gap: 10px;
`;

const pictoData = {
  title: "종사자 수(성별)",
  men: "55",
  women: "45",
  grid: {
    left: "25%",
    width: "75%",
  },
};
const barXData = {
  title: "지역별 사업체수",
  data: {
    value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
  },
};
const halfPieData = {
  title: "청년사장 비율",
  radius: ["100%", "170%"],
  center: ["50%", "100%"],
  legend: {
    icon: "circle",
    selectedMode: false,
    itemWidth: 10,
    left: "0%",
    top: "20%",
    width: "10%",
  },
  label: {
    show: true,
    formatter(param) {
      return param.name + " (" + param.percent * 2 + "%)";
    },
  },
};
export default function IndustStat() {
  return (
    <Container className="container">
      <ItemContainer className="item1 itemStyle">
        <GbMap />
      </ItemContainer>

      <Group1 className="group1">
        <ItemContainer className="item2 itemStyle">
          <BarX barXData={barXData} />
        </ItemContainer>
        <ItemContainer className="item2 itemStyle">
          <HalfPie halfPieData={halfPieData} />
        </ItemContainer>
      </Group1>

      <ItemContainer className="item1 itemStyle">
        <Stacked />
      </ItemContainer>

      <ItemContainer className="item1 itemStyle">
        <Pictorial pictoData={pictoData} />
      </ItemContainer>
    </Container>
  );
}
