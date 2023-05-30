import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "components/layouts";
import { Search, Dropdown } from "components/buttons";
import { BarRace, Stacked, MapPie, BubbleMap } from "components/charts";
import { DataDetail } from "./component/DataDetail";

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
  grid-template-columns: 1fr 1fr 1fr;
  .item1:nth-child(1) {
    grid-column: span 2;
  }
  .item1:nth-child(3) {
    grid-column: span 3;
  }
`;

const ItemContainer = styled.div``;
const TestZindex = styled.div`
z-index: 9999 !important;
`;

export default function GbStat() {
  const [showChart, setShowChart] = useState('bubble');
  const [charCont, setChartCont ] = useState(<BubbleMap/>); //버블차트 대신 임시로

  const selecChart = (e) => {
    setShowChart(e.target.id)
  };
  useEffect(() => {
    switch(showChart) {
      case "bubble" : setChartCont(<BubbleMap/>)
        break;
      case 'racing' : setChartCont(<BarRace/>)
        break;
    }
  },[showChart]);

  // Header에 넣을 컴포넌트들을 넣어준다.
  const headerProps = [<Dropdown />];

  // const [currentTab, setClickTab ] = useState(0);
  // const [tabCont, setTabCont] = useState();

  // useEffect(() => {
  //   switch(currentTab) {
  //     case 0 :
  //       setTabCont()
  //   }
  // })
  return (
    <Container>
      <Header props={headerProps} />
      <Contents className="container">
        <ItemContainer className="item1 itemStyle">
          <TestZindex className="inlineBlock right" 
          >
            <input
              type="checkbox"
              id="bubble"
              name="selectChart"
              value="버블차트"
              onChange={(e) => selecChart(e)}
              checked={showChart === "bubble"}
            />
            <label htmlFor="bubble">버블차트</label>
            <input
              type="checkbox"
              id="racing"
              name="selectChart"
              value="레이싱차트"
              onChange={(e) => selecChart(e)}
              checked={showChart === "racing"}
            />
            <label htmlFor="racing">레이싱차트</label>
          </TestZindex>
          {charCont}
        </ItemContainer>
        <ItemContainer className="item1 itemStyle">
          <DataDetail />
        </ItemContainer>
        <ItemContainer className="item1 itemStyle">
          <Stacked />
        </ItemContainer>
      </Contents>
    </Container>
  );
}
