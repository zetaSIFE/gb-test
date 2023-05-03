import React from "react";
import styled from "styled-components";

/**
 * styled-components 및 styled interface 정의 영역
 */
const StyledCon = styled.div`
  background-color: #c8e0fc;
  min-height: 420px;
  display: grid;
  grid-template-rows: 2fr 1fr;
`;

const Styledbox = styled.div`
  background: #8b9dff;
`;
export const Content = () => {
  return (
    <StyledCon className="container">
      <Styledbox className="itemBox">
        <div className="item"></div>
        <div className="item"></div>
      </Styledbox>
      <div className="itemBox"></div>
    </StyledCon>
  );
};
