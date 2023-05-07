import React from "react";
import styled from "styled-components";
import "./GbStat.css";
// import { StatVisualLayout, Aside, Header } from "components/layouts";
import GbMap from "components/charts/GbMap";

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
  /* align-items: center; */
`;

export default function GbStat() {
  return (
    <>
      <Container className="container">
        <GbMap />
        {/* <div className="item">1</div> */}
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
      </Container>
    </>
  );
}
