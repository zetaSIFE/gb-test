import React from "react";
import styled from "styled-components";
import { ReactComponent as Statistics } from "assets/images/buttons/statistics.svg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 125px;
  height: 28px;
  background: #e5e5e5;
  border-radius: 24px;
  color: #333333;
  font-size: 14px;
  background: #ffffff;
  border: 1px solid #7eb3ff;
  /* font-weight: 500; */
`;

export const BtnViewStat = () => {
  return (
    <Container>
      <Statistics />
      <div>통계표 보기</div>
    </Container>
  );
};
