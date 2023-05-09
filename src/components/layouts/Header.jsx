import React, { useState } from "react";
import styled from "styled-components";

/**
 * styled-components 및 styled interface 정의 영역
 */

const Container = styled.div`
  /* background-color: skyblue; */
  height: 6vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

const StyledHeader = styled.div`
  /* background-color: ivory;
  padding: 8px 16px 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
  height: 8vh; */
  // width: 100vw;
  // -----
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  gap: 12px;
  input {
    height: 40px;
    width: 400px;
    border: 1px solid #cccccc;
    border-radius: 10px;
    background: #ffffff;
  }
`;

export const Header = (props) => {
  return (
    <Container>
      <StyledHeader>
        <div>
          <input type="search"></input>
          <select>
            <option>선택하세요</option>
            <option>선택하세요</option>
            <option>선택하세요</option>
            <option>선택하세요</option>
          </select>
        </div>
      </StyledHeader>
    </Container>
  );
};
