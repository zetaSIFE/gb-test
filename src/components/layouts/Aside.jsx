import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

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
  border-top: 1px solid #c4ddff;
  border-left: 1px solid #c4ddff;
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
    font-size: 13px;
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
    border: none;
    color: #fff;
    box-shadow: 3px 3px 10px rgba(8, 20, 255, 0.2);
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
  const navigate = useNavigate();
  const pathName = useLocation().pathname; // URL의 path값을 받아올 수 있다.

  const selectMenuHandler = (index) => {
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
              className={obj.url === pathName ? "menuLi focused" : "menuLi"}
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
