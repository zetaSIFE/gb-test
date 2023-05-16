import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;
const ItemUl = styled.ul`
    border-top: 2px solid rgb(0, 0, 0);
    overflow: auto;
    height: 320px;
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
  {val: 1, name: "포항시"},
  {val: 2, name: "안동시"},
  {val: 3, name: "경주시"},
  {val: 4, name: "김천시"},
  {val: 5, name: "영천시"},
  {val: 5, name: "의성군"},
  {val: 5, name: "상주시"},
  {val: 5, name: "의성군"},
  {val: 5, name: "구미시"},
]

export const CountySelectTable = () => {
  return (
    <Container>
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
