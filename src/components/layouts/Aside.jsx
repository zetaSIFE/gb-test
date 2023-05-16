import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/**
 * styled-components 및 styled interface 정의 영역
 */

const Container = styled.div`
  height: 100vh;
  width: 90px;
  margin: 0px 0px 0px 10px;
  padding: 10px 0 10px 0;
  white-space: pre-wrap; // 메뉴 줄바꿈 개행문자 인식 기능

  z-index: 1;
`;

const StyledAside = styled.div`
  background: #e6f1ff;
  min-height: 100%;
  grid-row: span 2;
  /* border: 1px solid #c4ddff; */
  border-top: 1px solid #c4ddff;
  border-left: 1px solid #c4ddff;

  /* border-width: 1px 0px 0px 1px solid #c4ddff; */

  box-shadow: -4px -4px 14px #ffffff,
    inset 0px 4px 4px rgba(255, 255, 255, 0.25);
  border-radius: 10px;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 5px;

  .menuLi {
    width: 78px;
    height: 90px;
    border-radius: 10px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    // font
    font-size: 12px;
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
    /* background: rgb(96, 9, 240); */
    /* background: linear-gradient(
      0deg,
      rgba(96, 9, 240, 1) 0%,
      rgba(129, 5, 240, 1) 100%
    ); */
    border: none;
    /* border-top: 2px solid #6e70f7;
    border-left: 2px solid #6e70f7;

    background: linear-gradient(135deg, #5658df 0%, #2f6dd0 100%);
    border-color: #6e70f7;
    box-shadow: 3px 3px 10px #ffffff, inset 0px 4px 4px rgba(55, 55, 55, 0.25);*/
    color: #fff;
    box-shadow: 3px 3px 10px rgba(8, 20, 255, 0.2);

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

  .focused:before {
    height: 0%;
    width: 2px;
  }
  .focused:hover {
    box-shadow: 1px 1px 2px 0 rgba(255, 255, 255, 0.5),
      -1px -1px 3px 0 rgba(116, 125, 136, 0.5),
      inset -2px -2px 4px 0 rgba(255, 255, 255, 0.2),
      inset 2px 2px 4px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const Aside = ({ menuData }) => {
  const [currentMenu, setCurrentMenu] = useState(0);
  const navigate = useNavigate();

  const selectMenuHandler = (index) => {
    setCurrentMenu(index);
    // console.log(menuData[index].url);
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
