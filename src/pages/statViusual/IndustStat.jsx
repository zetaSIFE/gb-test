import React from "react";
import styled from "styled-components";
import { Header } from "components/layouts";
import { Search, Dropdown } from "components/buttons";
import { GbMap, BarX, Stacked, HalfPie, Pictorial } from "components/charts";
import { ChartHeader } from "components/ChartHeader";

// Header에 넣을 컴포넌트들을 넣어준다.
const headerProps = [<Search props={"프롭스"} />, <Dropdown />];

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contents = styled.div`
  height: calc(100vh - 50px);
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
    grid-column: span 4;
  }
  .item1:nth-child(4) {
    grid-column: span 1;
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
  padding: 0px;
  grid-gap: 10px;
`;

const pictoData = {
  title: "종사자 수(성별)",
  men: "55",
  women: "45",
  grid: {
    left: "25%",
    width: "75%",
  },
};
const barXData = {
  title: "지역별 사업체수",
  data: {
    value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
  },
};
const halfPieData = {
  title: "청년사장 비율",
  radius: ["100%", "170%"],
  center: ["50%", "100%"],
  legend: {
    icon: "circle",
    selectedMode: false,
    itemWidth: 10,
    left: "0%",
    top: "20%",
    width: "10%",
  },
  label: {
    show: true,
    formatter(param) {
      return param.name + " (" + param.percent * 2 + "%)";
    },
  },
};
export default function IndustStat() {
  return (
    <Container>
      <Header props={headerProps} />

      <Contents className="container">
        <ItemContainer className="item1 itemStyle">
        <ChartHeader title={'경상북도 안동시 행정구역도'}/>
          <div className="chartCont" style={{height:"92%"}}>
            <GbMap/>
          </div>
        </ItemContainer>
        <Group1 className="group1">
          <ItemContainer className="item2 itemStyle">
            <ChartHeader title={'지역별 사업체수'}/>
            <div className="chartCont">
              <BarX barXData={barXData} />
            </div>
          </ItemContainer>
          <ItemContainer className="item2 itemStyle">
            <ChartHeader title={'청년사장 비율'}/>
            <div className="chartCont">
              <HalfPie halfPieData={halfPieData} />
            </div>
          </ItemContainer>
        </Group1>

        <ItemContainer className="item1 itemStyle">
        <ChartHeader title={'경상북도 신규사업자 현황 및 폐업자 현황<'}/>
          <div className="chartCont">
            <Stacked />
          </div>
        </ItemContainer>
        <ItemContainer className="item1 itemStyle">
          <ChartHeader title={'종사자 수(성별)'}/>
          <div className="chartCont">
            <Pictorial pictoData={pictoData} />
          </div>
        </ItemContainer>
      </Contents>
    </Container>
  );
}
