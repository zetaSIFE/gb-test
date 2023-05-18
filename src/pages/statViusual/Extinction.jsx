import { GbMap, BarX, Stacked, BarY } from "components/charts";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  padding: 10px;
  padding-top: 0;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(5, 1fr);
  .group1:nth-child(1) {
    grid-row: span 5;
    grid-column: span 3;
  }
  .group2:nth-child(2) {
    grid-row: span 5;
    grid-column: span 2;
  }
`;

const ItemContainer = styled.div``;

const Group1 = styled.div`
  height: 100%;
  display: grid;
  padding: 0px;
  grid-gap: 10px;
`;

const Group2 = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 0px;
  grid-gap: 10px;
`;

export default function Extinction() {
  const barXData = {
    title: "소멸지수별 지자체 수",
    data: {
      value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
    },
  };
  const barYData = {
    title: "지역별 전출자수",
    data: {
      value: [5, 20, 36, 13, 27, 60, 50, 90, 50],
    },
  };
  return (
    <Container className="container">
      <Group1 className="group1">
        <ItemContainer className="itemStyle">
          <GbMap />
        </ItemContainer>
      </Group1>

      <Group2 className="group2">
        <ItemContainer className="itemStyle">
          <BarX barXData={barXData} />
        </ItemContainer>
        <ItemContainer className="itemStyle">
          <BarY barYData={barYData} />
        </ItemContainer>
      </Group2>
    </Container>
  );
}
