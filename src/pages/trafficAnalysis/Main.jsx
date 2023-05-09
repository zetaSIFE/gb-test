import React, { useState } from "react";
import styled from "styled-components";
import { Aside, Header, Content } from "../../components/layouts";
import { TabMenu } from "./component/TabMenu";
import { TabCont } from "./component/TabCont";
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
      <Header>
        <TabMenu setClickTab={setClickTab} />
      </Header>
      <StyledLayoutDiv>
        <TabCont currentTab={currentTab} />
      </StyledLayoutDiv>
    </StyledLayoutDiv>
  );
};

export default Main;
