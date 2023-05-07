import React, { useState } from "react";
import styled from "styled-components";

/**
 * styled-components 및 styled interface 정의 영역
 */

const Container = styled.div`
  // position: relative;
  // left: 5rem;
  // position: sticky;
  // top: 0;
`;

const StyledHeader = styled.div`
  background-color: ivory;
  padding: 8px 16px 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
  height: 8vh;
  // width: 100vw;
`;

export const Header = (props) => {
  return (
    <Container>
      <StyledHeader>
        <div>
          <input type="search"></input>
          <select>
            <option>선택하세요</option>
            <option>선택하세요</option>
            <option>선택하세요</option>
            <option>선택하세요</option>
          </select>
        </div>
      </StyledHeader>
    </Container>
  );
};
