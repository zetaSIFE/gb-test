import {
  GbMap,
  BarX,
  Stacked,
  BarY,
  Doughnut,
  BarNegative,
  HalfPie,
} from "components/charts";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
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
  .group2:nth-child(4) {
    grid-column: span 2;
  }

  .item1,
  .item2 {
    // NOTE 화면설계서 Style
    /* border: 1px solid #cccccc;
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 10px; */

    // NOTE ZetaLux Style
    // start
    border: 1px solid #ffffff;
    background: radial-gradient(
        409.5% 116.82% at 51.71% 56.4%,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      radial-gradient(
        344.95% 155.88% at 52.49% 53.79%,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      #d8dee3;
    border-width: 2px 0px 0px 2px;
    box-shadow: 0px 4px 4px rgba(164, 174, 183, 0.25),
      16px 16px 20px rgba(164, 174, 183, 0.25), -4px -4px 14px #ffffff;
    border-radius: 10px;
    padding: 10px;
    // end
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
  grid-gap: 10px;
`;

export default function PopulationStat() {
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
          <BarY />
        </ItemContainer>
        <ItemContainer className="item2">
          <Doughnut />
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
          <BarNegative />
        </ItemContainer>
        <ItemContainer className="item2">
          <HalfPie />
        </ItemContainer>
      </Group2>
    </Container>
  );
}
