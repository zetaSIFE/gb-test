import React from "react";
import styled from "styled-components";
import { GbMap, Stacked } from "components/charts";
import { DataDetail } from "./component/DataDetail";

const Container = styled.div`
  height: 100%;
  padding: 10px;
  padding-top: 0px;
  display: grid;
  grid-gap: 10px;

  grid-template-rows: 2fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  .item1:nth-child(1) {
    grid-column: span 2;
  }
  .item1:nth-child(3) {
    grid-column: span 3;
  }

  .item1 {
    border: 1px solid #cccccc;
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
  }
`;

const ItemContainer = styled.div``;

export default function GbStat() {
  return (
    <>
      <Container className="container">
        <ItemContainer className="item1">
          <GbMap />
        </ItemContainer>
        <ItemContainer className="item1">
          <DataDetail />
        </ItemContainer>
        <ItemContainer className="item1">
          <Stacked />
        </ItemContainer>
      </Container>
    </>
  );
}
