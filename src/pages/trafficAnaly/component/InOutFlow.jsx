import React from "react";
import { Ol_Echart_flow2, BarX, Stacked, BarY, Table } from "components/charts";
import styled from "styled-components";

const Container = styled.div`
  height:100%;
  padding: 10px;
  display: grid;
  grid-gap: 10px;

  grid-template-rows: 2fr 1.3fr;
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
  .group2:nth-child(4) {
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
  grid-template-columns: 1fr 1fr;
  padding: 0px;
  grid-gap: 10px;
`;

const Group2 = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px;
  grid-gap: 20px;
`;
export const InOutFlow = () => {
  return (
    <Container className="container">
      <ItemContainer className="item1">
        <Ol_Echart_flow2 width="100%" height="100%" />
      </ItemContainer>

      <Group1 className="group1">
        <ItemContainer className="item2">
          <BarX />
        </ItemContainer>
        <ItemContainer className="item2">
          <BarY />
        </ItemContainer>
        <ItemContainer className="item2">
          <BarX />
        </ItemContainer>
        <ItemContainer className="item2">
          <BarX />
        </ItemContainer>
      </Group1>

      <ItemContainer className="item1">
        <Stacked />
      </ItemContainer>

      <Group2 className="group2">
        <ItemContainer className="item2">
          <BarY />
        </ItemContainer>
        <ItemContainer className="item2">
          <BarY />
        </ItemContainer>
      </Group2>
    </Container>
  );
};
