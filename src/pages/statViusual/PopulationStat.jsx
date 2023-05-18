import {
  GbMap,
  BarX,
  Stacked,
  BarY,
  Doughnut,
  BarNegative,
  HalfPie,
} from "components/charts";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';

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
  grid-gap: 10px;
`;

export default function PopulationStat() {

  const barXData = {
    title: '지역별 인구수',
    data: {
      value: [20, 50, 100, 150, 200, 250, 300, 350, 400]
    }
  }
  const barXData2 = {
    title: '지역별 청년비율',
    data: {
      value: [120, 300, 270, 150, 200, 98, 180, 220, 170]
    }
  }
  const barYData = {
    title: '지역별 출생아수',
    data: {
      value: [5, 20, 36, 13, 27, 60, 50, 90, 50]
    }
  }

  return (
    <Container className="container">
      <ItemContainer className="item1">
        <GbMap />
      </ItemContainer>

      <Group1 className="group1">
        <ItemContainer className="item2">
          <BarX barXData={barXData}/>
        </ItemContainer>
        <ItemContainer className="item2">
          <BarY barYData={barYData} />
        </ItemContainer>
        <ItemContainer className="item2">
          <Doughnut />
        </ItemContainer>
        <ItemContainer className="item2">
          <BarX barXData={barXData2} />
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
