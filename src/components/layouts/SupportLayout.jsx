import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Aside } from ".";
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

export default function SupportLayout() {
  const menuData = [
    { name: "통계업무지원 특화서비스", url: "/support/statSupport.do" },
    { name: "산업투자효과 분석서비스", url: "/support/IndustInvest" },
    {
      name: "유동인구 데이터 분석서비스",
      url: "/support/trafficAnalysis.do",
    },
    { name: "정책평가 지원서비스", url: "/support/policyEvaluation.do" },
  ];

  return (
    <>
      <Container>
        <Aside menuData={menuData} />
        <SubContainer>
          <Content>
            <Outlet />
          </Content>
        </SubContainer>
      </Container>
    </>
  );
}
