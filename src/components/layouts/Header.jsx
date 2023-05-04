import React, { useState }  from "react";
import styled from 'styled-components';

/**
 * styled-components 및 styled interface 정의 영역
 */
const StyledHeader = styled.div`
    background-color: ivory;
    padding: 8px 16px 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: space-between;
`;

export const Header = (props) => {
  return (
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
  );
};
