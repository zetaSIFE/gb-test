import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import { Header } from "components/layouts/Header";
import { GbMap, BarX } from "components/charts";
// https://www.npmjs.com/package/react-resize-detector
// import { useResizeDetector } from "react-resize-detector";

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: skyblue; */
  width: 100%;
  /* width: calc(100vw - 150px); */
`;

const Group = styled.div`
  /* height: calc(width - 500px); */
  /* width: calc(100% - width); */

  height: 100%;
  display: grid;
  grid-template-rows: 2fr 1fr;
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
  // const { width, height, ref } = useResizeDetector();

  // useEffect(() => {
  //   console.log(`${width}`);
  // }, [width]);

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
