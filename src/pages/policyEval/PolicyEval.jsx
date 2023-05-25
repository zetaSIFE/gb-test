import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import { Header } from "components/layouts/Header";
import { Search, Dropdown } from "components/buttons";
import { GbMap, BarX } from "components/charts";
import { useRecoilValue } from "recoil";
import { slideIsOpen } from "states/PolicyEvalSlideBar";

// Header에 넣을 컴포넌트들을 넣어준다.
const headerProps = [<Search props={"프롭스"} />, <Dropdown />];

const Container = styled.div`
  display: flex;
  /* height: 100%; */
  /* width: 100%; */
  /* margin-right: 0px; */
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  /* width: calc(100% + 9px); */
  /* margin-right: 0px; */
`;

const Group = styled.div`
  height: calc(100vh - 50px);
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 1fr 1fr;

  padding: 10px;
  grid-gap: 10px;
`;

const ItemContainer = styled.div`
  :nth-child(3) {
    grid-column: span 2;
  }
  /* border: 1px solid #cccccc;
  border-radius: 10px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
  padding: 10px; */
`;

export default function PolicyEval() {
  const isOpen = useRecoilValue(slideIsOpen);
  const barXData = {
    title: "데이터차트(차트 수정예정)",
    data: {
      value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
    },
  };

  return (
    <Container>
      <SideBar />
      <Main
        style={
          isOpen
            ? { width: `calc(100vw - 500px)` }
            : { width: `calc(100vw - 140px)` }
        }
      >
        <Header props={headerProps} />{" "}
        <Group>
          <ItemContainer className="itemStyle">
            {/* <div>h!</div> */}
            <GbMap />
          </ItemContainer>
          <ItemContainer className="itemStyle">
            <GbMap />
            {/* <div>h!</div> */}
          </ItemContainer>
          <ItemContainer className="itemStyle">
            <BarX barXData={barXData} />
          </ItemContainer>
        </Group>
      </Main>
    </Container>
  );
}
