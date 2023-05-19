import React, { forwardRef, useEffect, useState } from "react";
import {
  FlowChart,
  BarX,
  Stacked,
  BarY,
  Table,
  MultiBar,
  Pictorial,
} from "components/charts";
import styled from "styled-components";
import { DivisonMap } from "./DivisionMap";
import { SelecGroup } from "./SelectGroup";

const Container = styled.div`
  /* height:95vh; */
  display: grid;
  grid-gap: 10px;
  height: calc(100vh - 90px);
  padding-bottom: 10px;
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

  /* .item1,
  .item2 {
    border: 1px solid #cccccc;
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
  } */
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

export const InOutFlow = (prop) => {
  const pictoData = {
    title: "성별 유입율",
    men: "40",
    women: "50",
    grid: {
      left: "25%",
      width: "75%",
    },
  };

  const barXData = {
    title: "산하 행정구역별 유입량(차트 수정예정)",
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
    <>
      {prop.division ? (
        <DivisonMap />
      ) : (
        <Container className="container">
          <ItemContainer className="item1 flex-column itemStyle">
            <SelecGroup />
            <FlowChart width="100%" height="100%" />
          </ItemContainer>

          <Group1 className="group1">
            <ItemContainer className="item2 itemStyle">
              {/* <p className="chartTit">시간대별 유입량</p> */}
              <MultiBar />
            </ItemContainer>
            <ItemContainer className="item2 itemStyle">
              <BarY barYData={barYData} />
            </ItemContainer>
            <ItemContainer className="item2 itemStyle">
              <p className="chartTit">최다 유입지 순위</p>
              <Table />
            </ItemContainer>
            <ItemContainer className="item2 itemStyle">
              <BarX barXData={barXData} />
            </ItemContainer>
          </Group1>

          <ItemContainer className="item1 itemStyle">
            <Stacked />
          </ItemContainer>

          <Group2 className="group2">
            <ItemContainer className="item2 itemStyle">
              <BarY barYData={barYData} />
            </ItemContainer>
            <ItemContainer
              className="item2 itemStyle"
              style={
                {
                  // width:"500px"
                }
              }
            >
              <Pictorial pictoData={pictoData} />
            </ItemContainer>
          </Group2>
        </Container>
      )}
    </>
  );
};
