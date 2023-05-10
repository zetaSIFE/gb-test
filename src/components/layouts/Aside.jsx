import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/**
 * styled-components 및 styled interface 정의 영역
 */

const Container = styled.div`
  /* min-width: 100px; */
  height: 100vh;
  width: 110px;
  padding: 10px;
  white-space: pre-wrap; // 메뉴 줄바꿈 개행문자 인식 기능
`;

const StyledAside = styled.div`
  background-color: #e6f1ff;
  opacity: 0.9;
  min-height: 100%;
  grid-row: span 2;
  border: 1px solid #7eb3ff;
  box-shadow: 2px 0px 6px rgba(13, 19, 29, 0.25);
  border-radius: 10px;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 5px;

  .menuLi {
    width: 78px;
    height: 100px;
    /* border: 1px solid #999; */
    /* padding: 0px; */
    /* gap: 3px; */
    /* border: 1px solid #7eb3ff; */
    /* box-shadow: 2px 0px 6px rgba(13, 19, 29, 0.25); */
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    // font
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
    text-align: center;

    cursor: pointer;
    .svg {
      .color1 {
        /* fill: #11233f; */
      }
      /* .color2 {
        fill: #0068b7;
      } */
    }
  }

  .focused {
    background: linear-gradient(135deg, #5658df 0%, #2f6dd0 100%);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    color: #fff;
    .svg {
      /* fill: white; */
      /* stroke: white; */
      /* .color1 {
        fill: white;
      } */
      .color2 {
        /* fill: white; */
        /* stroke: white; */
      }
    }
    /* border-bottom: unset; */
  }
`;

export const Aside = ({ menuData }) => {
  const [currentMenu, setCurrentMenu] = useState(0);
  const navigate = useNavigate();

  const selectMenuHandler = (index) => {
    setCurrentMenu(index);
    console.log(menuData[index].url);
    // console.log(menuData[index].svg[0]);
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
            >
              <div>{obj.svg}</div>
              <div className="text">{obj.name}</div>
            </li>
          ))}
        </Menu>
      </StyledAside>
    </Container>
  );
};
