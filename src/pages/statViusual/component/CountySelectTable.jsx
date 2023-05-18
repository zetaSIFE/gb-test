import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  background-color: #F9F9F9;
`;

const StyledTop = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;
const ItemUl = styled.ul`
  border-top: 1px solid #11233F;
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
        <StyledTop>
          <input type="checkbox"/>전체선택
        </StyledTop>
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
