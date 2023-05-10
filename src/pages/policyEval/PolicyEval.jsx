import React from "react";
import styled from "styled-components";
import { Header } from "components/layouts/Header";
import SideBar from "./SideBar";

const Container = styled.div`
  display: flex;
  height: 100%;
  /* background-color: skyblue; */
  /* padding-top: 10px; */
  /* margin-left: -15px; */
`;

// direction(4) : ↑ → ↓ ←
// const SideBar = styled.div`
//   width: 405px;
//   height: 100% - 10px;
//   margin: 10px 10px 10px -20px;

//   background: #ffffff;
//   border: 1px solid #7eb3ff;
//   box-shadow: 2px 0px 6px rgba(13, 19, 29, 0.25);
//   border-radius: 0px 10px 10px 0px;
//   z-index: -1;
// `;

const Main = styled.div``;

const Group = styled.div``;

export default function PolicyEval() {
  return (
    <Container className="container">
      <SideBar />
      <Main>
        <Header />
        <Group></Group>
      </Main>
    </Container>
  );
}
