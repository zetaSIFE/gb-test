import React from "react";
import styled from "styled-components";

/**
 * styled-components 및 styled interface 정의 영역
 */
const StyledAside = styled.div`
  background-color:#c8bdff;
  min-height:100vh;
  grid-row: span 2;
`;

export const Aside = () => {
  return (
    <StyledAside className="aside">

    </StyledAside>
  );
};
