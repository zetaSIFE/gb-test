import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;
const ItemUl = styled.ul`
    border-top: 2px solid rgb(0, 0, 0);
    overflow: auto;
    height: 280px;
`;

const ItemLi = styled.li`
  height: 50px;
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  /* justify-content: ; */
  align-items: center;
  gap:25px;
`;

const selectSi = [
  {val: 1, name: "2022"},
  {val: 2, name: "2021"},
  {val: 3, name: "2020"},
  {val: 4, name: "2019"},
  {val: 5, name: "2018"},
  {val: 5, name: "2017"},
  {val: 5, name: "2016"},
  {val: 5, name: "2015"},
  {val: 5, name: "2014"},
]

export const PeriodTable = () => {
  return (
    <Container>
        <div className="flexAlign"
        style={{
          height:"50px",
        }}
      >
        <input type="date"/>
        <input type="date"/>
      </div>
      <div className="flexAlign"
        style={{
          height:"50px",
        }}
      >
        <input type="checkbox"/>전체선택
      </div>
      <ItemUl className="chk">
        {selectSi.map((el, idx) => (
          <ItemLi
            key={idx}
            val={el.val}
          >
            <input type="checkbox"/>
            {el.name}
          </ItemLi>
        ))}

      </ItemUl>
    </Container>
  );
};
