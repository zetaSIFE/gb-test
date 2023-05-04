import React, { useEffect } from "react";
import styled from "styled-components";
/**
 * styled-components 및 styled interface 정의 영역
 */
const StyledCon = styled.div`
  display:grid; 
`;

export const Content = (props) => {

  return (
    <StyledCon className="container">
    </StyledCon>
  );
};
