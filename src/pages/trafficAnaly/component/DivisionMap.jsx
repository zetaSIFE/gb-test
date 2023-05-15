import { BarX, GbMap, Table, Pie } from "components/charts";
import React from "react";
import styled from "styled-components";

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
;

const ItemContainer = styled.div``;

const TableWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const DivisonMap = () => {
  return (
    <Container className="container">
      <ItemContainer className="item1">
        <GbMap />
      </ItemContainer>
      <ItemContainer className="item1">
        <GbMap />
      </ItemContainer>
      <ItemContainer className="item2">
        <p className="chartTit">연도별 유입지 순위</p>
        <TableWrap>
          <Table />
          <Table />
        </TableWrap>
      </ItemContainer>
      <ItemContainer className="item2">
        <BarX />
      </ItemContainer>
      <ItemContainer className="item3">
        <Pie />
      </ItemContainer>
    </Container>
  );
};
