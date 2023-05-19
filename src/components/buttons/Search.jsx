import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "assets/images/buttons/search.svg";

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #cccccc;
  padding-left: 12px;
  border-radius: 5px;
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

export const Search = () => {
  const handleSearch = () => {
    console.log("찾기!");
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
