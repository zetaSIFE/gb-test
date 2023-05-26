import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "components/layouts";
import {
  Search,
  Dropdown,
  BtnExtinction,
  BtnKExtinction,
} from "components/buttons";
import { GbMap, BarX, Table } from "components/charts";
// Recoil
import { useRecoilState } from "recoil";
import { extinctionTab } from "states/Extinction";

// Header에 넣을 컴포넌트들을 넣어준다.
const headerProps = [
  <Search props={"프롭스"} />,
  <Dropdown />,
  <BtnExtinction />,
  <BtnKExtinction />,
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contents = styled.div`
  height: calc(100vh - 50px);
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(5, 1fr);
  .group1:nth-child(1) {
    grid-row: span 5;
    grid-column: span 3;
  }
  .group2:nth-child(2) {
    grid-row: span 5;
    grid-column: span 2;
  }
`;

const ItemContainer = styled.div``;

const Group1 = styled.div`
  height: 100%;
  display: grid;
  padding: 0px;
  grid-gap: 10px;
`;

const Group2 = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 0px;
  grid-gap: 10px;
`;

const barXData = {
  title: "소멸지수별 지자체 수",
  data: {
    value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
  },
};
// const barYData = {
//   title: "지역별 전출자수",
//   data: {
//     value: [5, 20, 36, 13, 27, 60, 50, 90, 50],
//   },
// };

export default function Extinction() {
  // NOTE
  // regionExtin true 경우 지방소멸위험지수 차트 표출 및 버튼 활성화
  // regionExtin false 경우 K-지방소멸지수 차트 표출 및 버튼 활성화

  //TODO
  // regionExtin을 reocoil에서 불러와 2가지 탭을 나눠서
  // API 호출 및 Props 전달 로직 구현 예정
  return (
    <Container>
      <Header props={headerProps} />
      <Contents className="container">
        <Group1 className="group1">
          <ItemContainer className="itemStyle">
            <GbMap />
          </ItemContainer>
        </Group1>
        <Group2 className="group2">
          <ItemContainer className="itemStyle">
            <div className="spaceBetween">
              <p className="chartTit">소멸지수별 지차제 수</p>
            </div>
            <BarX barXData={barXData} />
          </ItemContainer>
          <ItemContainer className="itemStyle">
            <div className="spaceBetween">
              <p className="chartTit">소멸 위험지역 랭킹</p>
            </div>
            <Table />
          </ItemContainer>
        </Group2>
      </Contents>
    </Container>
  );
}
