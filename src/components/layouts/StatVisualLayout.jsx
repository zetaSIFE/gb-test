import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Aside, Header } from ".";
// SVG
import { ReactComponent as PopularStat } from "assets/images/aside/1-1popularStat.svg";
import { ReactComponent as Transfer } from "assets/images/aside/1-2transfer.svg";
import { ReactComponent as IndustStat } from "assets/images/aside/1-3industStat.svg";
import { ReactComponent as GbStat } from "assets/images/aside/1-4gbStat.svg";
import { ReactComponent as Extinction } from "assets/images/aside/1-5extinction.svg";

import { ReactComponent as IndustInvest } from "assets/images/aside/2-3industInvest.svg";

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
  height: 94vh;
`;

export default function StatVisualLayout() {
  const menuData = [
    {
      name: "인구지표",
      url: "/statVisual/populationStat.do",
      svg: <PopularStat className="svg" />,
    },
    {
      name: "전입전출",
      url: "/statVisual/transfer.do",
      svg: <Transfer className="svg" />,
    },
    {
      name: "산업관련",
      url: "/statVisual/industrialStat.do",
      svg: <IndustStat />,
    },
    {
      name: "경북 특화\n통계",
      url: "/statVisual/gbStat.do",
      svg: <GbStat className="svg" />,
    },
    {
      name: "K-지방\n소멸지수",
      url: "/statVisual/extinction.do",
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
