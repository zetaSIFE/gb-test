import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Aside, Header } from ".";
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
  const menuArr = [
    "인구 통계",
    "전입 전출",
    "산업 통계",
    "경북통합 통계 19종",
    "주요 소멸 지수",
  ];

  return (
    <>
      <Container>
        <Aside menuArr={menuArr} />
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

// export const StatVisualLayout = () => {
//   const menuArr = [
//     "인구 통계",
//     "전입 전출",
//     "산업 통계",
//     "경북통합 통계 19종",
//     "주요 소멸 지수",
//   ];

//   return (
//     <Container>
//       <Header />
//       <Aside menuArr={menuArr} />
//       {/* <StyledLayoutDiv> */}
//       <Outlet />
//       {/* </StyledLayoutDiv> */}
//     </Container>
//   );
// };
