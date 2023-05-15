import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Aside, Header } from ".";
// SVG
import { ReactComponent as PopularStat } from "assets/images/aside/1-1popularStat.svg";
import { ReactComponent as Transfer } from "assets/images/aside/1-2transfer.svg";
import { ReactComponent as IndustStat } from "assets/images/aside/1-3industStat.svg";
import { ReactComponent as GbStat } from "assets/images/aside/1-4gbStat.svg";
import { ReactComponent as Extinction } from "assets/images/aside/1-5extinction.svg";

const Container = styled.div`
  display: flex;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Content = styled.div`
  height: calc(100vh - 80px);
`;

export default function StatVisualLayout() {
  const menuData = [
    {
      name: "인구지표",
      url: "/stat/statVisual/populationStat.do",
      svg: <PopularStat className="svg" />,
    },
    {
      name: "전입전출",
      url: "/stat/statVisual/transfer.do",
      svg: <Transfer className="svg" />,
    },
    {
      name: "산업관련",
      url: "/stat/statVisual/industrialStat.do",
      svg: <IndustStat />,
    },
    {
      name: "경북특화\n통계",
      url: "/stat/statVisual/gbStat.do",
      svg: <GbStat className="svg" />,
    },
    {
      name: "K-지방\n소멸지수",
      url: "/stat/statVisual/extinction.do",
      svg: <Extinction className="svg" />,
    },
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
