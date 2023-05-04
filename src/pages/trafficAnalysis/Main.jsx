import React, { useState } from "react";
import styled from "styled-components";
import { Aside, Header, Content } from "../../components/layouts";
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

const Main = () => {
  const [currentTab, setClickTab] = useState(0);
  return (
    <StyledLayoutDiv>
      <Aside></Aside>
      <Header setClickTab={setClickTab} test="1"></Header>
      <Content currentTab={currentTab}/>
    </StyledLayoutDiv>
  );
};

export default Main;
