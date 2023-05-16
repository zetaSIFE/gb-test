import { GbMap, BarX, Stacked, BarY, HalfPie, Pictorial } from "components/charts";
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
    grid-column: span 3;
  }
  .item1:nth-child(4) {
    grid-column: span 2;
  }

  .item1,
  .item2 {
    border: 1px solid #cccccc;
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
  }
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

export default function IndustStat() {
  return (
    <Container className="container">
      <ItemContainer className="item1">
        <GbMap />
      </ItemContainer>

      <Group1 className="group1">
        <ItemContainer className="item2">
          <BarX />
        </ItemContainer>
        <ItemContainer className="item2">
          <HalfPie />
        </ItemContainer>
      </Group1>

      <ItemContainer className="item1">
        <Stacked />
      </ItemContainer>

      <ItemContainer className="item1">
        <Pictorial />
      </ItemContainer>
    </Container>
  );
}
