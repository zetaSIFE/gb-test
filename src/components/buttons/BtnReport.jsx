import React from "react";
import styled from "styled-components";
import { ReactComponent as Download } from "assets/images/buttons/download.svg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 20px;
  gap: 5px;
  width: 210px;
  height: 40px;
  background: #11233f;
  border-radius: 24px;
  color: #ffffff;
  font-size: 16px;
`;

export const BtnReport = () => {
  return (
    <Container>
      <Download />
      <text>전체 리포트 다운로드</text>
    </Container>
  );
};
