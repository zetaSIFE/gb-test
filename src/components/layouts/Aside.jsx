import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

/**
 * styled-components 및 styled interface 정의 영역
 */

const Container = styled.div`
  min-width: 5.5rem;
  width: 5.5rem;
`;

const StyledAside = styled.div`
  background-color: #e4dfff;
  min-height: 100vh;
  grid-row: span 2;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;

  .menuLi {
    height: 70px;
    border-bottom: 1px solid #999;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .focused {
    background-color: #3339c7;
    color: #fff;
    border-bottom: unset;
  }
`;

export const Aside = ({ menuData }) => {
  const [currentMenu, setCurrentMenu] = useState(0);
  const navigate = useNavigate();

  const selectMenuHandler = (index) => {
    setCurrentMenu(index);
    console.log(menuData[index].url);
    // const url = menuData[index].url;
    const selectedUrl = menuData[index].url;
    navigate(selectedUrl);
  };

  return (
    <Container>
      <StyledAside className="aside">
        <Menu>
          {menuData.map((obj, index) => (
            <li
              key={index}
              className={index === currentMenu ? "menuLi focused" : "menuLi"}
              onClick={() => selectMenuHandler(index)}
              // onClick={() => Navigate({obj.url})}
            >
              {obj.name}
            </li>
          ))}
        </Menu>
      </StyledAside>
    </Container>
  );
};
