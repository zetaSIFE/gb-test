import React from "react";
import styled from "styled-components";
import { ReactComponent as Statistics } from "assets/images/buttons/statistics.svg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 28px;
  height: 28px;
  background: #fcf2f2;
  border-radius: 24px;
  color: #333333;
  font-size: 14px;
  /* border:1px solid #7EB3FF; */
  /* font-weight: 500; */
`;

export const BtnViewStat = () => {
  return (
    <Container>
      <Statistics />
      {/* <div>통계표 보기</div> */}
    </Container>
  );
};
