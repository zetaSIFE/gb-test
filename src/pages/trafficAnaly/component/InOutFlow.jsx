import React, { useEffect, useState } from "react";
import {
  FlowChart,
  BarX,
  Stacked,
  BarY,
  Table,
  MultiBar,
  Pictorial,
} from "components/charts";
import { ChartHeader } from "components/ChartHeader";
import styled from "styled-components";
import { DivisonMap } from "./DivisionMap";
import { SelecGroup } from "./SelectGroup";
import { useRecoilValue } from "recoil";
import {
  ageState,
  endDateState,
  endTimeState,
  genderState,
  startDateState,
  startTimeState,
  trafficState,
} from "states/TrafficAnaly";

const Container = styled.div`
  /* height:95vh; */
  display: grid;
  grid-gap: 10px;
  height: calc(100vh - 70px);
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
  const traffic = useRecoilValue(trafficState);
  const startDate = useRecoilValue(startDateState);
  const endDate = useRecoilValue(endDateState);
  const startTime = useRecoilValue(startTimeState);
  const endTime = useRecoilValue(endTimeState);
  const gender = useRecoilValue(genderState);
  const age = useRecoilValue(ageState);

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
    visualMap: {
      show: false,
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
              <ChartHeader title={'시간대별 유입량'}/>
              <div className="chartCont">
                <MultiBar />
              </div>
            </ItemContainer>
            <ItemContainer className="item2 itemStyle">
              <ChartHeader title={'월별/일별 유입률'}/>
              <div className="chartCont">
                <BarY barYData={barYData} />
              </div>
            </ItemContainer>
            <ItemContainer className="item2 itemStyle">
              <ChartHeader title={'최다 유입지 순위'}/>
              <div className="chartCont">
                <Table />
              </div>
            </ItemContainer>
            <ItemContainer className="item2 itemStyle">
              <ChartHeader title={'산하 행정구역 산하 행정구역별 유입량'}/>
              <div className="chartCont">
                <BarX barXData={barXData} />
              </div>
            </ItemContainer>
          </Group1>

          <ItemContainer className="item1 itemStyle">
            <ChartHeader title={'행정구역별 유입량'}/>
            <div className="chartCont">
              <Stacked />
            </div>
          </ItemContainer>
          <Group2 className="group2">
            <ItemContainer className="item2 itemStyle">
              <ChartHeader title={'연령대별 유입량'}/>
              <div className="chartCont">
                <BarY barYData={barYData} />
              </div>
            </ItemContainer>
            <ItemContainer className="item2 itemStyle">
              <ChartHeader title={'성별 유입(유출)인구 비중'}/>
              <div className="chartCont">
                <Pictorial pictoData={pictoData} />
              </div>
            </ItemContainer>
          </Group2>
        </Container>
      )}
    </>
  );
};
