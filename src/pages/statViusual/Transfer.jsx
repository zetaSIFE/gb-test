import { GbMap, BarX, Stacked, BarY } from "components/charts";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  padding: 20px;
  /* background-color: skyblue; */
  display: grid;
  grid-gap: 15px;

  grid-template-rows: 2fr 1.3fr;
  grid-template-columns: repeat(5, 1fr);
  .item1:nth-child(1) {
    grid-column: span 2;
  }
  .item1-1:nth-child(2) {
    grid-column: span 3;
  }
  .item1:nth-child(3) {
    grid-column: span 3;
  }
  .item1-1:nth-child(4) {
    grid-column: span 2;
  }

  .item1 {
    padding: 5px;
    /* background-color: bisque; */
    border: 1px solid #aaa;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px #aaa;
  }
`;

const SmallContainer = styled.div`
  height: 100%;
  padding: 5px;
`;

const SecondContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  /* background-color: aqua; */
  padding: 5px;
  grid-gap: 10px;

  .item2 {
    /* background-color: #a5a7f2; */
    padding: 10px;
    margin: 0%;
    /* grid-gap: 10px; */
    border: 1px solid #aaa;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px #aaa;
  }
`;

const ThirdContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5px;
  grid-gap: 10px;

  .item3 {
    /* background-color: #a5a7f2; */
    padding: 10px;
    /* grid-gap: 10px; */
    border: 1px solid #aaa;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px #aaa;
  }
`;

export default function Transfer() {
  return (
    <Container className="container">
      <SmallContainer className="item1">
        <GbMap />
      </SmallContainer>
      <SecondContainer className="item1-1">
        <SmallContainer className="item2">
          <BarX />
        </SmallContainer>
        <SmallContainer className="item2">
          <BarY />
        </SmallContainer>
        <SmallContainer className="item2">
          <BarX />
        </SmallContainer>
        <SmallContainer className="item2">
          <BarX />
        </SmallContainer>
      </SecondContainer>
      <SmallContainer className="item1">
        <Stacked />
      </SmallContainer>
      <ThirdContainer className="item1-1">
        <SmallContainer className="item3">
          <BarY />
        </SmallContainer>
        <SmallContainer className="item3">
          <BarY />
        </SmallContainer>
      </ThirdContainer>
    </Container>

    // <>
    //   <Container className="container">
    //     <GbMap className="item1" />
    //     {/* <div className="item1"> */}
    //     {/* <div> */}
    //       <SecondContainer className="item1">
    //         <BarX className="item2" />
    //         <BarY className="item2" />
    //         <BarX className="item2" />
    //         <BarX className="item2" />
    //       </SecondContainer>
    //     {/* </div> */}
    //     <Stacked className="item1" />
    //     {/* <div className="item1" /> */}
    //     <BarY className="item1" />
    //     <BarY className="item1" />
    //   </Container>
    // </>
  );
}
