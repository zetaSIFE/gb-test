import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  padding: 10px;
  display: grid;
  grid-gap: 10px;

  grid-template-rows: 2fr 1fr;
  grid-template-columns: repeat(8, 1fr);
  .item1:nth-child(1) {
    grid-column: span 3;
  }
  .group1:nth-child(2) {
    grid-column: span 5;
  }
  .item1:nth-child(3) {
    grid-column: span 8;
  }
  .item2:nth-child(1) {
    grid-column: span 4;
  }
  .item2:nth-child(2) {
    grid-column: span 2;
  }
  .item2:nth-child(3) {
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

const Group1 = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(4, 1fr);
  padding: 0px;
  grid-gap: 10px;
`;

const ItemContainer = styled.div``;

export const Pattern = () => {
  return (
    <Container className="container">
      <ItemContainer className="item1">chart1</ItemContainer>
      <Group1 className="group1">
        <ItemContainer className="item2">chart2</ItemContainer>
        <ItemContainer className="item2">chart3</ItemContainer>
        <ItemContainer className="item2">chart4</ItemContainer>
      </Group1>
      <ItemContainer className="item1">chart5</ItemContainer>
    </Container>
  );
};
