import React from "react";
import styled from "styled-components";
import { ReactComponent as Download } from "assets/images/buttons/download.svg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 8px 20px; */
  gap: 8px;
  width: 210px;
  height: 40px;
  background: #11233F;
  border-radius: 24px;
  color: #ffffff;
  font-size: 16px;
`;

export const BtnReport = () => {
  return (
    <Container>
      <Download />
      <div>전체 리포트 다운로드</div>
    </Container>
  );
};
