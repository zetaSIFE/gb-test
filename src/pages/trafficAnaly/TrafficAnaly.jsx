import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { InOutFlow } from "./component/InOutFlow.jsx";
import { Card } from "./component/Card.jsx";
import { Pattern } from "./component/Pattern.jsx";

const Container = styled.div`
  height: 100%;
  padding: 20px;
  display: grid;
  grid-gap: 10px;
  border: 1px solid grey;

  grid-template-rows: 2fr 1fr;
  grid-template-columns: repeat(8, 1fr);
  .item1:nth-child(1) {
    grid-column: span 4;
  }
  .item1:nth-child(2) {
    grid-column: span 4;
  }
  .item2:nth-child(3) {
    grid-column: span 3;
  }
  .item2:nth-child(4) {
    grid-column: span 3;
  }
  .item3:nth-child(5) {
    grid-column: span 2;
  }
  


  .item1,
  .item2,
  .item3 {
    border: 1px solid #cccccc;
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
  }
`;

const Group1 = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px;
  grid-gap: 10px;
`;

const ItemContainer = styled.div`
  
`

export default function TrafficAnaly() {
  return (
    <Container className="container">
      <ItemContainer className="item1">item1</ItemContainer>
      <ItemContainer className="item1">item1</ItemContainer>
      <ItemContainer className="item2">item2</ItemContainer>
      <ItemContainer className="item2">item2</ItemContainer>
      <ItemContainer className="item3">item3</ItemContainer>
    </Container>
  );
}
