import React from "react";
import styled from "styled-components";
import { Aside, Header, Content } from ".";
/**
 * styled-components 및 styled interface 정의 영역
 */

const StyledLayoutDiv = styled.div`
  // width:100vw;
  height:100vh;
  grid-column-start: 2;
  display: grid;
  grid-template-columns: 80px minmax(100px, 1fr);
  grid-template-rows: 50px 1fr;
`;

export const Layout = () => {
  return (
    <StyledLayoutDiv className="main">
      <Aside></Aside>
      <Header></Header>
      <Content />
    </StyledLayoutDiv>
  );
};
