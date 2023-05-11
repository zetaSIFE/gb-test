import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "assets/images/buttons/leftArrow.svg";
import { ReactComponent as RightArrow } from "assets/images/buttons/rightArrow.svg";

// direction(4) : ↑ → ↓ ←
const Container = styled.div`
  width: 1100px;
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
const ArrowContainer = styled.button`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  width: 50px;
  height: 70px;
  background-color: white;
  z-index: -2;
`;

const SearchContainer = styled.div`
  height: 100px;
  width: 100%;
  padding-left: 20px;
  background-color: #f5f5f5;
  margin: 10px;

  /* .searchText {
    width: 100%;
    text-align: left;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    
  } */
`;
const SearchBar = styled.input`
  /* background-color: purple; */
  width: 360px;
  height: 40px;
  margin: 20px;
  margin-right: 35px;
  /* padding: 0px 12px; */
  gap: 12px;
  border: 1px solid #cccccc;
`;
const DataList = styled.div``;

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const sideRef = useRef(null);

  function foldSide() {
    if(sideRef || !sideRef.current) {

      return ;
    }

    const style = sideRef.current.style;

    if(isOpen) {
      style.maxwidth = '0';
    } else if(!isOpen) {
      style.maxwidth = `${sideRef.current.scrollWidth}px`;
    }
    setIsOpen(!isOpen);
  }

  // const toggleMenu = () => {
  //   setIsOpen( isOpen => !isOpen);
  // }
  return (
    <Container>
      <Open className="flexCenter">
        <Title>
          <div>산업투자효과 분석 서비스</div>
          <ArrowContainer
            className={`${isOpen ? "close" : "open"}`}
            onClick={foldSide()}
          >
            <RightArrow />
          </ArrowContainer>
        </Title>
        <SearchContainer className=" flexCenter">
          <SearchBar />
        </SearchContainer>
        <DataList></DataList>
      </Open>
    </Container>
  );
}
