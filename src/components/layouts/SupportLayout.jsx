import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Aside } from ".";
// SVG
import { ReactComponent as StatSupport } from "assets/images/aside/2-1statSupport.svg";
import { ReactComponent as IndustInvest } from "assets/images/aside/2-2industInvest.svg";
import { ReactComponent as TrafficAnaly } from "assets/images/aside/2-3trafficAnaly.svg";
import { ReactComponent as PolicyEval } from "assets/images/aside/2-4policyEval.svg";

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: 100%;
`;

export default function SupportLayout() {
  const menuData = [
    {
      name: "통계업무지원\n특화서비스",
      url: "/stat/support/statSupport.do",
      svg: <StatSupport className="svg" />,
    },
    {
      name: "산업투자효과\n분석서비스",
      url: "/stat/support/IndustInvest.do",
      svg: <IndustInvest className="svg" />,
    },
    {
      name: "유동인구\n데이터\n분석서비스",
      url: "/stat/support/trafficAnaly.do",
      svg: <TrafficAnaly className="svg" />,
    },
    {
      name: "정책평가\n지원서비스",
      url: "/stat/support/policyEval.do",
      svg: <PolicyEval className="svg" />,
    },
  ];

  return (
    <>
      <Container>
        <Aside menuData={menuData} />
        <Content>
          <Outlet />
        </Content>
      </Container>
    </>
  );
}
