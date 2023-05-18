import React from "react";
import styled from "styled-components";
import { BtnReport } from "components/buttons";
import { ReactComponent as SearchIcon } from "assets/images/buttons/search.svg";
import { ReactComponent as ArrowIcon } from "assets/images/buttons/downArrow.svg";
/**
 * styled-components 및 styled interface 정의 영역
 */
const sampleList = [
  "포항시 남구",
  "포항시 북구",
  "경주시",
  "김천시",
  "안동시",
  "구미시",
  "영주시",
  "영천시",
  "상주시",
  "문경시",
  "경산시",
  "의성군",
  "청송군",
  "영양군",
  "영덕군",
  "청도군",
  "고령군",
  "성주군",
  "칠곡군",
  "예천군",
  "봉화군",
  "울진군",
  "울릉군",
];

const Container = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  // 전체 Flex & center 설정
  .headerBox,
  .searchBox,
  .selectBox {
    display: flex;
    align-items: center;
  }
`;

const HeaderBox = styled.div``;

const SearchBox = styled.div`
  justify-content: space-between;
  width: 300px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #cccccc;
  padding-left: 12px;
  input {
    border: none;
    :focus {
      // input outline 테두리 없애기
      outline: none;
    }
  }
  .search {
    display: flex;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
  }
`;
const SelectBox = styled.div`
  width: 165px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #cccccc;
  margin-left: 12px;
  justify-content: space-between;
  padding: 0px 16px 0px 16px;
`;

export const Header = (props) => {
  const handleSearch = () => {
    console.log("찾기!");
  };
  return (
    <Container>
      <HeaderBox className="headerBox">
        <SearchBox className="searchBox">
          <input type="text" placeholder="검색 대상" />
          <div className="search" onClick={handleSearch}>
            <SearchIcon />
          </div>
        </SearchBox>
        <SelectBox className="selectBox">
          <label>경상북도</label>
          <ArrowIcon />
        </SelectBox>
        {/* <input type="text" placeholder="검색 대상"></input>
        <select>
          <option>선택하세요</option>
          <option>선택하세요</option>
          <option>선택하세요</option>
          <option>선택하세요</option>
        </select> */}
      </HeaderBox>
      <BtnReport />
    </Container>
  );
};
