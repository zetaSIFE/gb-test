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
import { ChartHeader } from "components/ChartHeader";
import {
  Search,
  SearchSmall,
  Dropdown,
  DropdownSmall,
  BtnViewStat,
  BtnChartDown,
} from "components/buttons";

import axios from "axios";

// Header에 넣을 컴포넌트들을 넣어준다.
const headerProps = [<Search props={"프롭스"} />, <Dropdown />];
const subHeaderProps = [<Search props={"프롭스"} />, <Dropdown />];

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

const SearchContainer = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 6px;
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
    visualMap: {
      show: true,
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
          <ChartHeader title={'경상북도 안동시 행정구역도'}/>
          <div className="chartCont" style={{height:"92%"}}>
            <GbMap/>
          </div>
        </ItemContainer>
        <Group1 className="group1">
          <ItemContainer className="item2 itemStyle">
          <ChartHeader title={'지역별 인구수'}/>
          <div className="chartCont">
            <BarX barXData={barXData} ref={chartRef} />
          </div>
          </ItemContainer>
          <ItemContainer className="item2 itemStyle">
          <ChartHeader title={'지역별 출생아수'}/>
          <div className="chartCont">
            <BarY barYData={barYData} />
          </div>
          </ItemContainer>
          <ItemContainer className="item2 itemStyle">
          <ChartHeader title={'세대원수 별 세대수'}/>
          <div className="chartCont">
            <Doughnut />
          </div>
          </ItemContainer>
          <ItemContainer
            className="item2 itemStyle scroll1"
            style={{
              width: "100%",
              overflowX: "auto",
            }}
          >
            <ChartHeader title={'지역별 청년비율'}/>
            <div className="chartCont">
            <ExBarX barXData={barXData} />
          </div>
          </ItemContainer>
        </Group1>

        <ItemContainer className="item1 itemStyle">
        <ChartHeader title={'경상북도 전체 인구 변화량 추이'}/>
        <div className="chartCont">
          <SearchContainer>
            <SearchSmall props={"프롭스"} />
            <DropdownSmall />
            <DropdownSmall />
            <DropdownSmall />
          </SearchContainer>
          <Stacked />
          </div>
        </ItemContainer>

        <Group2 className="group2">
          <ItemContainer className="item2 itemStyle">
          <ChartHeader title={'인구 피라미드'}/>
          <div className="chartCont">
            <BarNegative />
          </div>
          </ItemContainer>
          <ItemContainer className="item2 itemStyle">
          <ChartHeader title={'귀농 귀촌 통계'}/>
          <div className="chartCont">
            <HalfPie halfPieData={halfPieData} />
          </div>
          </ItemContainer>
        </Group2>
      </Contents>
    </Container>
  );
}
