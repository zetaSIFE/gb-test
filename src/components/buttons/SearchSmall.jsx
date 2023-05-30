import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "assets/images/buttons/searchSmall.svg";

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 160px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #cccccc;
  padding-left: 10px;
  border-radius: 4px;
  font-size: 14px;
  input {
    width: 120px;

    border: none;
    :focus {
      // input outline 테두리 없애기
      outline: none;
    }
  }
  .search {
    display: flex;
    padding-top: 2px;
    padding-right: 5px;
    align-items: center;
    justify-content: center;
  }
`;

export const SearchSmall = ({ props }) => {
  const handleSearch = () => {
    console.log("찾기!");
    console.log(props);
  };
  return (
    <SearchBox className="searchBox">
      <input type="text" placeholder="검색 대상" />
      <div className="search" onClick={handleSearch}>
        <SearchIcon />
      </div>
    </SearchBox>
  );
};
