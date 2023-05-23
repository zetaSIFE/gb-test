import React from "react";
import styled from "styled-components";
import { ReactComponent as Statistics } from "assets/images/buttons/statistics.svg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 144px;
  height: 31px;
  background: #e5e5e5;
  border-radius: 24px;
  color: #333333;
`;

export const BtnStatView = () => {
  return (
    <Container>
      <Statistics />
      <div>통계표 보기</div>
    </Container>
  );
};
