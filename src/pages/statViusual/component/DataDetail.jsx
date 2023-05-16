import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "assets/images/buttons/searchWhite.svg";
import { ItemListTable } from "./ItemListTable";
import { CountySelectTable } from './CountySelectTable'
import { PeriodTable } from './PeriodTable'

const Container = styled.div`
  height: 100%;
  /*display: flex;
  flex-direction: column;
  justify-content: center; */
  position: relative;
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
    border: 1px solid #000;
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

const SearchBtn = styled.div`
  width: 100%;
  height: 40px;
  position:absolute;
  bottom:0;
  background: #11233f;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  font-size: 16px;
  font-weight: 500;

`;

export const DataDetail = (props) => {
  const [currentTab, clickTab] = useState(0);
  const [tabCont, setTabCont ] = useState(<ItemListTable/>);

  const menuArr = [
    { name: "항목", val: "itemList" },
    { name: "시군선택", val: "countySelect" },
    { name: "기간", val: "period" },
  ];

  const selectMenuHandler = (el, index) => {
    clickTab(index);
  };

  useEffect(()=> {
    switch(currentTab){
      case 0: setTabCont(<ItemListTable />)
        break;
      case 1: setTabCont(<CountySelectTable />)
        break;
      case 2: setTabCont(<PeriodTable />)
        break;
    }
  }, [currentTab]);

  return (
    <Container>
      <p className="chartTit">데이터 상세 설정</p>
      <div className="tab">
        <TabMenu>
          {menuArr.map((el, index) => (
            <li
              key={index}
              className={index === currentTab ? "submenu focused" : "submenu"}
              onClick={() => selectMenuHandler(el, index)}
            >
              {el.name}
            </li>
          ))}
        </TabMenu>
        <div>
          {tabCont}
        </div>
      </div>
      <SearchBtn>조회</SearchBtn>
    </Container>
  );
};
