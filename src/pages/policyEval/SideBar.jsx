import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "assets/images/buttons/leftArrow.svg";
import { ReactComponent as RightArrow } from "assets/images/buttons/rightArrow.svg";

// direction(4) : ↑ → ↓ ←
const Container = styled.div`
  width: 405px;
  height: 100% - 10px;
  margin: 10px 10px 10px -20px;
  /* padding-left: 20px; */
  background: #ffffff;
  border: 1px solid #7eb3ff;
  box-shadow: 2px 0px 6px rgba(13, 19, 29, 0.25);
  border-radius: 0px 10px 10px 0px;
  z-index: -1;
  .flexCenter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Open = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

const Title = styled.div`
  height: 70px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 104, 183, 0.5);
  /* padding: 10px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #0068b7;
  padding-left: 20px;
`;

// 클릭시 Open & close 영역
const ArrowContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  width: 50px;
  height: 70px;
`;

const SearchContainer = styled.div`
  height: 150px;
  width: 100%;
  padding-left: 20px;
  background-color: skyblue;
  .searchText {
    width: 100%;
    text-align: left;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    display: flex;
  }
`;
const SearchBar = styled.input`
  /* background-color: purple; */
  width: 360px;
  height: 40px;
  margin: 20px;
  margin-right: 35px;
  padding: 0px 12px;
  gap: 12px;
  border: 1px solid #cccccc;
`;
const DataList = styled.div``;

export default function SideBar() {
  return (
    <Container>
      <Open className="flexCenter">
        <Title>
          <div>정책평가지원 서비스</div>
          <ArrowContainer className="flexCenter">
            <LeftArrow />
          </ArrowContainer>
        </Title>
        <SearchContainer className=" flexCenter">
          <div className="searchText">지표 데이터명 검색</div>
          <SearchBar />
        </SearchContainer>
        <DataList></DataList>
      </Open>
    </Container>
  );
}
