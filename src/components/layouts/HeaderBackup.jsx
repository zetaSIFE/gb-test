import { BtnReport } from "components/buttons";
import React, { useState } from "react";
import styled from "styled-components";

/**
 * styled-components 및 styled interface 정의 영역
 */

const Container = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 10px;
  gap: 12px;
  justify-content: space-between;

`;
const HeaderBox = styled.div`
  width:50%;
  * {
    height: 40px;
    border: 1px solid #cccccc;
    border-radius: 10px;
    background: #ffffff;
  }
  input {
    padding:0 5px;
    width:30%;
    /* min-width: 300px; */
    margin-right: 15px;
  }
  select{
    /* min-width:200px; */
  }
`;

export const Header = (props) => {
  return (
    <Container>
      <StyledHeader>
        <HeaderBox>
          <input type="text" placeholder="검색 대상"></input>
          <select>
            <option>선택하세요</option>
            <option>선택하세요</option>
            <option>선택하세요</option>
            <option>선택하세요</option>
          </select>
        </HeaderBox>
        <BtnReport/>
        {/* <button>버튼</button> */}
      </StyledHeader>
    </Container>
  );
};
