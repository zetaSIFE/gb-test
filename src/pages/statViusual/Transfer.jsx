import { GbMap, BarX, Stacked, BarY } from "components/charts";
import React, { useState } from "react";
import styled from "styled-components";
import { InputBox } from "./component/InputBox";

const Container = styled.div`
  height: calc(100vh - 80px);
  min-height: 100%;
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

  /* .item1,
  .item2 {
    border: 1px solid #cccccc;
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
  } */
  .inlineBlock_right {
    position: absolute;
    right: 595px;
    bottom: 810px;
    padding: 0px;
    z-index: 10;
  }
  .inlineBlock_right2 {
    position: absolute;
    right: 570px;
    bottom: 510px;
    padding: 0px;
    z-index: 10;
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
  /* object-fit: fill; */
`;

const Group2 = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px;
  grid-gap: 10px;
`;

export default function Transfer() {
  const [checkValue, setCheckValue] = useState("전체");
  // const [barXData, setBarXData] = useState({
  //   title: "지역별 인구수",
  //   data: {
  //     value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
  //   },
  // });
  // const [barYData, setBarYData] = useState({
  //   title: "지역별 전출자수",
  //   data: {
  //     value: [5, 20, 36, 13, 27, 60, 50, 90, 50],
  //   },
  // });
  const barXData = {
    title: "지역별 인구수",
    // name: "전체",
    data: {
      value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
    },
    legend: {
      show: true,
    },
  };
  const barYData = {
    title: "도외(시도) 최다 전출지 광역지자체 순위",
    data: {
      value: [5, 20, 36, 13, 27, 60, 50, 90, 50],
    },
    legend: {
      show: false,
    },
    visualMap: {
      show: false,
    },
  };
  const barYData1 = {
    title: "지역별 전출자수",
    data: {
      value: [5, 20, 36, 13, 27, 60, 50, 90, 50],
    },
    legend: {
      show: true,
    },
    visualMap: {
      show: true,
    },
  };

  return (
    <Container className="container">
      <ItemContainer className="item1 itemStyle">
        <GbMap />
      </ItemContainer>

      <Group1 className="group1">
        <ItemContainer className="item2 itemStyle">
          <BarX barXData={barXData} />
        </ItemContainer>
        <ItemContainer className="item2 itemStyle">
          <BarY barYData={barYData1} />
        </ItemContainer>
        <ItemContainer className="item2 itemStyle">
          <BarX barXData={barXData} />
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
        <ItemContainer className="item2 itemStyle">
          <BarY barYData={barYData} />
        </ItemContainer>
      </Group2>
    </Container>
  );
}
