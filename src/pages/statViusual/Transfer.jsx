import { GbMap, BarX, Stacked, BarY } from "components/charts";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  padding: 20px;
  display: grid;
  grid-gap: 20px;

  grid-template-rows: 2fr 1.3fr;
  grid-template-columns: repeat(5, 1fr);
  .item1:nth-child(1) {
    grid-column: span 2;
  }
  .item1-1:nth-child(2) {
    grid-column: span 3;
  }
  .item1:nth-child(3) {
    grid-column: span 3;
  }
  .item1-1:nth-child(4) {
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

const SmallContainer = styled.div`
  /* height: 100%; */
`;

const SecondContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 0px;
  grid-gap: 20px;
`;

const ThirdContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px;
  grid-gap: 20px;
`;

export default function Transfer() {
  return (
    <Container className="container">
      <SmallContainer className="item1">
        <GbMap />
      </SmallContainer>
      <SecondContainer className="item1-1">
        <SmallContainer className="item2">
          <BarX />
        </SmallContainer>
        <SmallContainer className="item2">
          <BarY />
        </SmallContainer>
        <SmallContainer className="item2">
          <BarX />
        </SmallContainer>
        <SmallContainer className="item2">
          <BarX />
        </SmallContainer>
      </SecondContainer>
      <SmallContainer className="item1">
        <Stacked />
      </SmallContainer>
      <ThirdContainer className="item1-1">
        <SmallContainer className="item3">
          <BarY />
        </SmallContainer>
        <SmallContainer className="item3">
          <BarY />
        </SmallContainer>
      </ThirdContainer>
    </Container>
  );
}
