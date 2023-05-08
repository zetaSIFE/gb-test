import { GbMap, Bar, Pie } from "components/charts";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  /* background-color: skyblue; */
  display: grid;
  grid-gap: 5px;

  grid-template-rows: 2fr 1.3fr;
  grid-template-columns: 1fr 1fr 1fr;
  .item:nth-child(2) {
    grid-column: span 2;
  }

  .item {
    padding: 5px;
    background-color: bisque;
    border: 1px;
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
  background-color : #a5a7f2
  padding: 10px;
  border:  solid 1px;
}
`;

export default function Transfer() {
  return (
    <>
      <Container className="container">
        <GbMap />
        <div className="item">
          <SecondContainer>
          <Bar />
          <Pie />
          <div className="item2">4</div>
          <div className="item2">5</div>
          </SecondContainer>
        </div>
        <div className="item">6</div>
        <div className="item">7</div>
        <div className="item">8</div>
      </Container>
    </>
  );
}
