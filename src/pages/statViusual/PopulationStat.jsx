import React from "react";
import styled from "styled-components";
import { GbMap, BarX, BarY } from "components/charts";

const Container = styled.div`
  height: 100%;
  padding: 20px;
  /* background-color: skyblue; */
  display: grid;
  grid-gap: 20px;
  /* border: 2px solid #aaa; */

  grid-template-rows: 2fr 1.3fr;
  grid-template-columns: 1fr 1fr 1fr;
  .item1:nth-child(2) {
    grid-column: span 2;
  }
  /* align-items: center; */

  .item1 {
    padding: 5px;
    /* background-color: bisque; */
    border: 2px solid #aaa;
    border-radius: 10px;
  }
`;

const SecondContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  /* background-color: aqua; */
  padding: 5px;
  grid-gap: 20px;

  .item2 {
    /* background-color: #a5a7f2; */
    padding: 10px;
    border: 2px solid #aaa;
    border-radius: 10px;
  }
`;
export default function PopulationStat() {
  return (
    <>
      <Container className="container">
        <GbMap className="item1" />
        {/* <div className="item">1</div> */}
        {/* <div className="item"> */}
        <SecondContainer className="item1">
          <BarX className="item2" />
          <BarY className="item2" />
          <div className="item2">2-3</div>
          <div className="item2">2-4</div>
        </SecondContainer>
        {/* </div> */}
        <div className="item1">3</div>
        <div className="item1">4</div>
        <div className="item1">5</div>
      </Container>
    </>
  );
}
