import React from "react";
import styled from "styled-components";

/**
 * styled-components 및 styled interface 정의 영역
 */
const StyledAside = styled.div`
  background-color:#e4dfff;
  min-height:100vh;
  grid-row: span 2;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;

  .menuLi {
    height:70px;
    border-bottom:1px solid #999;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
  }

`;

export const Aside = () => {
  return (
    <StyledAside className="aside">
      <Menu>
        <li className="menuLi">1</li>
        <li className="menuLi">2</li>
        <li className="menuLi">3</li>
        <li className="menuLi">4</li>
        <li className="menuLi">5</li>
        <li className="menuLi">5</li>
        <li className="menuLi">5</li>
        <li className="menuLi">5</li>
      </Menu>
    </StyledAside>
  );
};
