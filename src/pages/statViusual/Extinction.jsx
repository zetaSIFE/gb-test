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
  /* .item2:nth-child(3) {
    grid-row: span 5;
    grid-column: span 2;
  } */
  .item1,
  .item2 {
    border: 1px solid #cccccc;
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
  }
  .item2 {
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

const barXData = {
  title: '소멸지수별 지자체 수',
  data: {
    value: [20, 50, 100, 150, 200, 250, 300, 350, 400]
  }
}

export default function Extinction() {
  return (
    <Container className="container">
      <Group1 className="group1">
        <ItemContainer className="item1">
          <GbMap />
        </ItemContainer>
      </Group1>

      <Group2 className="group2">
        <ItemContainer className="item2">
          <BarX barXData={barXData} />
        </ItemContainer>
        <ItemContainer className="item2">
          <BarY />
        </ItemContainer>
      </Group2>
    </Container>
  );
}
