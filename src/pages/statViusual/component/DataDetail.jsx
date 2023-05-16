import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "assets/images/buttons/searchWhite.svg";
import { ItemListTable } from "./ItemListTable";

const Container = styled.div`
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  height: 26px;
  align-items: left;
  font-size: 20px;
  font-weight: 700;
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
`;

const SelectContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  width: 566px;
  height: 400px;
  left: 1330px;
  top: 195px;
  background: #f9f9f9;
  align-items: center;
  justify-content: center;
`;

const SearchBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 6px;
  width: 434px;
  height: 39px;
  background: #11233f;
  border-radius: 24px;
  color: #ffffff;
  /* font-family: ; */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
`;

export const DataDetail = (props) => {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: "항목", val: "itemList" },
    { name: "시군선택", val: "countySelect" },
    { name: "기간", val: "period" },
  ];

  const selectMenuHandler = (index) => {
    props.setClickTab(index);
    clickTab(index);
  };

  return (
    <Container>
      <Title>데이터 상세 설정</Title>
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
      <SelectContainer>
        <ItemListTable />
        <SearchBtn>
          <Search />
          조회
        </SearchBtn>
      </SelectContainer>
    </Container>
  );
};
