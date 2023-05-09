import React from "react";
import { useState } from 'react';
import styled from 'styled-components';

const StyleTabMenu = styled.ul`
  color: rgb(232, 234, 237);
  font-weight: bold;
  // display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin:0;
  z-index:999;
  border:3px solid red;

  .submenu {
    cursor:pointer;
    display: flex;
    width: 200px;
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    border-radius: 10px 10px 0px 0px;
    border:1px solid #000;
    align-items: center;
    justify-content: center;
  }

  .focused {
    background-color: rgb(255,255,255);
    color: rgb(21,20,20);
  }

  & div.desc {

  }
`;

export const TabMenu = (props) => {
  const [currentTab, clickTab] = useState(0);
  const menuArr = [
    { name: '유입유출 인구분석', val: 'Tab menu ONE' },
    { name: '인구이동 패턴', val: 'Tab menu TWO' },
    { name: '카드사용 분석', val: 'Tab menu THREE' },
  ];

  const selectMenuHandler = (index) => {
    props.setClickTab(index);
    clickTab(index);
  };
  
  return (
    <>
      <StyleTabMenu>
      {menuArr.map((el,index) => (
          <li key={index} className={index === currentTab ? "submenu focused" : "submenu" }
          onClick={() => selectMenuHandler(index)}>{el.name}</li>
        ))}
      </StyleTabMenu>
    </>
  );
};
