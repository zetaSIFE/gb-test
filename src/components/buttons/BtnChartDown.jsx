import React from "react";
import styled from "styled-components";
import { ReactComponent as DownloadSVG } from "assets/images/buttons/download.svg";

const StyleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background: #11233f;
  border-radius: 24px;
`;

export const BtnChartDown = () => {
  return (
    <StyleBtn>
      <DownloadSVG />
    </StyleBtn>
  );
};
