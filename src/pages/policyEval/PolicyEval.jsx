import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import { Header } from "components/layouts/Header";
import { GbMap, BarX } from "components/charts";

const Container = styled.div`
  display: flex;
  height: 100%;

  /* height: calc(100vh - 150px); */
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background-color: skyblue; */
  /* height: calc(100vh - 150px); */
`;

const Group = styled.div`
  height: 100%;
  /* width: 100%; */
  display: grid;
  grid-template-rows: 2fr 1fr;
  /* grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); */

  grid-template-columns: 1fr 1fr;
  padding: 10px;
  padding-top: 0;
  grid-gap: 10px;
`;

const ItemContainer = styled.div`
  :nth-child(3) {
    grid-column: span 2;
  }
  border: 1px solid #cccccc;
  border-radius: 10px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
  padding: 10px;
`;

export default function PolicyEval() {
  return (
    <Container>
      <SideBar />
      <Main>
        <Header />
        <Group>
          <ItemContainer>
            {/* <div>HI!</div> */}
            <GbMap />
          </ItemContainer>
          <ItemContainer>
            {/* <div>HI!</div> */}
            <GbMap />
          </ItemContainer>
          <ItemContainer>
            {/* <div>HI!</div> */}
            <BarX />
          </ItemContainer>
        </Group>
      </Main>
    </Container>
  );
}
