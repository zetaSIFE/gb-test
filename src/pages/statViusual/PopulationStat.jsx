import {
  GbMap,
  BarX,
  Stacked,
  BarY,
  Doughnut,
  BarNegative,
  HalfPie,
  ExBarX,
} from "components/charts";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Header } from "components/layouts";
import {
  Search,
  Dropdown,
  BtnViewStat,
  BtnChartDown,
} from "components/buttons";

import axios from "axios";

// Header에 넣을 컴포넌트들을 넣어준다.
const headerProps = [<Search props={"프롭스"} />, <Dropdown />];

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contents = styled.div`
  height: calc(100vh - 50px);
  /* width: 100%; */
  padding: 10px;
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
  // const barXData = null;
  const barXData = {
    title: "지역별 인구수",
    data: {
      value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
    },
  };
  // axios.get(process.env.REACT_APP_SERVER_URL + "/portal/populationStat/getPopulationCountByArea.do")
  //   .then(res => {
  //     barXData = res;
  //   })
  //   .catch(err => console.log(err))
  const barXData2 = {
    title: "지역별 청년비율",
    data: {
      value: [120, 300, 270, 150, 200, 98, 180, 220, 170],
    },
  };
  const barYData = {
    title: "지역별 출생아수",
    data: {
      value: [5, 20, 36, 13, 27, 60, 50, 90, 50],
    },
  };
  const halfPieData = {
    title: "귀농귀촌 통계",
    radius: ["45%", "90%"],
    center: ["50%", "75%"],
    label: {
      show: false,
      // position: "inside",
      // color: 'black',
      // formatter(param) {
      //   return param.name + " (" + param.percent * 2 + "%)";
      // },
    },
    legend: {
      icon: "circle",
      bottom: "5%",
      left: "center",
      width: "100%",
      selectedMode: false,
      itemWidth: 10,
    },
  };

  const chartRef = useRef(null);

  useEffect(() => {
    window.addEventListener("canvas", function () {
      chartRef.resize();
    });
  }, [chartRef]);

  return (
    <Container className="container">
      <Header props={headerProps} />
      <Contents>
        <ItemContainer className="item1 itemStyle">
          <GbMap />
        </ItemContainer>
        <Group1 className="group1">
          <ItemContainer className="item2 itemStyle">
            <div className="spaceBetween">
              <p className="chartTit">지역별 인구수</p>
              <div className="btnContainer">
                <BtnViewStat className="" />
                <BtnChartDown props={1} />
              </div>
            </div>
            <BarX barXData={barXData} ref={chartRef} />
          </ItemContainer>
          <ItemContainer className="item2 itemStyle">
            <div className="spaceBetween">
              <p className="chartTit">지역별 출생아 수</p>
              <div className="btnContainer">
                <BtnViewStat className="" />
                <BtnChartDown props={2} />
              </div>
            </div>
            <BarY barYData={barYData} />
          </ItemContainer>
          <ItemContainer className="item2 itemStyle">
            <div className="spaceBetween">
              <p className="chartTit">세대원별 세대수</p>
              <div className="btnContainer">
                <BtnViewStat className="" />
                <BtnChartDown props={3} />
              </div>
            </div>
            <Doughnut />
          </ItemContainer>
          <ItemContainer
            className="item2 itemStyle scroll1"
            style={{
              width: "100%",
              overflowX: "auto",
            }}
          >
            <div className="spaceBetween">
              <p className="chartTit">지역별 청년비율</p>
              <div className="btnContainer">
                <BtnViewStat className="" />
                <BtnChartDown props={4} />
              </div>
            </div>
            <ExBarX barXData={barXData} />
          </ItemContainer>
        </Group1>

        <ItemContainer className="item1 itemStyle">
          <div className="spaceBetween">
            <p className="chartTit">경상북도 전체 인구 변화량 추이</p>
          </div>
          <Stacked />
        </ItemContainer>

        <Group2 className="group2">
          <ItemContainer className="item2 itemStyle">
            <div className="spaceBetween">
              <p className="chartTit">인구 피라미드</p>
            </div>
            <BarNegative />
          </ItemContainer>
          <ItemContainer className="item2 itemStyle">
            <div className="spaceBetween">
              <p className="chartTit">귀농귀촌 통계</p>
            </div>
            <HalfPie halfPieData={halfPieData} />
          </ItemContainer>
        </Group2>
      </Contents>
    </Container>
  );
}
