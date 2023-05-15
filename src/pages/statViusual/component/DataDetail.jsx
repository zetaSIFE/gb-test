import React, { useState } from "react";
import styled from "styled-components";
import { font } from '../../../assets/fonts/fonts'; 

const Container = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  height: 26px;
  align-items: left;
  font-family: font;
`;

const TabMenu = styled.ul`
  color: #777;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  /* justify-content: flex-end; */
  align-items: flex-end;
  margin-top: 20px;

  .submenu {
    cursor: pointer;
    display: flex;
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 15px;
    font-weight: 400;
    transition: 0.5s;
    border: 2px solid #000;
    border-radius: 3px 3px 0 0;
    align-items: center;
    justify-content: center;
    background-color: #11233f;
    color: #fff;
    margin-left: 3px;
  }

  .focused {
    background-color: #fff;
    color: #000;
    border-bottom: none;
  }

  & div.desc {
  }
`;

export const DataDetail = (props) => {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: "항목", val: "Tab menu 1" },
    { name: "시군선택", val: "Tab menu 2" },
    { name: "기간", val: "Tab menu 3" },
  ];

  const selectMenuHandler = (index) => {
    props.setClickTab(index);
    clickTab(index);
  };

  return (
    <Container>
      <Title>
        데이터 상세 설정
      </Title>
      <TabMenu>
        {menuArr.map((el, index) => (
          <li
            key={index}
            className={index === currentTab ? "submenu focused" : "submenu"}
            onClick={() => selectMenuHandler(index)}
          >
            {el.name}
          </li>
        ))}
      </TabMenu>
    </Container>
  );
};
