import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Aside, Header } from ".";
import industInvest from "assets/images/industInvest.svg";

/**
 * styled-components 및 styled interface 정의 영역
 */

const Container = styled.div`
  display: flex;
`;

const SubContainer = styled.div`
  width: 100%;
`;

const Content = styled.div`
  height: 92vh;
`;

export default function StatVisualLayout() {
  const menuData = [
    { name: "인구지표", url: "/statVisual/populationStat.do" },
    { name: "전입전출", url: "/statVisual/transfer.do" },
    { name: "산업관련", url: "/statVisual/industrialStat.do" },
    { name: "경북특화 통계19종", url: "/statVisual/gbStat.do" },
    { name: "K-지방 소멸지수", url: "/statVisual/extinction.do" },
  ];

  return (
    <>
      <Container>
        <Aside menuData={menuData} />
        <SubContainer>
          <Header />
          <Content>
            <Outlet />
          </Content>
        </SubContainer>
      </Container>
    </>
  );
}
