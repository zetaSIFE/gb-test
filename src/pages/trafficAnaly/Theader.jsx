import React, { useState } from "react";
import styled from "styled-components";
import { BtnReport } from "components/buttons";

/**
 * styled-components 및 styled interface 정의 영역
 */

const Container = styled.div`
  /* background-color: skyblue; */
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;

const StyledHeader = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  gap: 12px;
  justify-content: space-between; //yh

  input {
    /* width: 400px; */
    height: 40px;
    border-radius: 2px;
    background: #ffffff;
    border: 1px solid #cccccc;
    margin-right:10px;
  }
  select {
    width:200px;
    height: 40px;
    border-radius: 2px;
    background: #ffffff;
    border: 1px solid #cccccc;
  }
`;
const TabMenu = styled.ul`
  color: #777;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  /* justify-content: flex-end; */
  align-items: flex-end;
  margin-top:20px;
  
  
  .submenu {
    cursor:pointer;
    display: flex;
    width: 170px;
    height:60px;
    padding: 10px;
    font-size: 15px;
    font-weight: 400;
    transition: 0.5s;
    border: 2px solid #000;
    border-radius: 3px 3px 0 0;
    align-items: center;
    justify-content: center;
    background-color: #11233F;
    color: #fff;
    margin-left:3px
  }

  .focused {
    background-color: #fff;
    color: #000;
    border-bottom : none;
  }

  & div.desc {

  }
`;
export const Theader = (props) => {
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
    <Container>
      <StyledHeader>
        <div>
          <input type="search" placeholder="대상지 검색"></input>
          <select>
            <option>경북 안동시 와룡면</option>
            <option>선택하세요</option>
            <option>선택하세요</option>
            <option>선택하세요</option>
          </select>
        </div>
        <button 
          style={{
            width:"118px",
            height:"40px",
            background: "#E5E5E5",
            border: "none",
            borderRadius:"24px"
          }}
        >분할지도 보기
        </button>
        <BtnReport/>
        <TabMenu>
          {menuArr.map((el,index) => (
              <li key={index} className={index === currentTab ? "submenu focused" : "submenu" }
              onClick={() => selectMenuHandler(index)}>{el.name}</li>
            ))}
        </TabMenu>
      </StyledHeader>
    </Container>
  );
};
