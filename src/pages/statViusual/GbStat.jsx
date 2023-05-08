import React from "react";
import styled from "styled-components";
import { GbMap, Pie, BarX } from "components/charts";

const Container = styled.div`
  height: 100%;
  /* background-color: skyblue; */
  display: grid;
  grid-gap: 5px;
  border-color: black;
  border: 15px;

  grid-template-rows: 2fr 1.3fr;
  grid-template-columns: 1fr 1fr 1fr;
  .item:nth-child(2) {
    grid-column: span 2;
  }
  /* align-items: center; */

  .item {
    padding: 5px;
    background-color: bisque;
    border: 3px;
    border-color: black;
  }
`;

const SecondContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  background-color: aqua;
  padding: 5px;
  grid-gap: 5px;

  .item2 {
    background-color: #a5a7f2;
    padding: 10px;
  }
`;
export default function GbStat() {
  return (
    <>
      <Container className="container">
        <GbMap />
        {/* <div className="item">1</div> */}
        <div className="item">
          <SecondContainer>
            <BarX />
            <Pie />
            <div className="item2">3</div>
            <div className="item2">4</div>
          </SecondContainer>
        </div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
      </Container>
    </>
  );
}
