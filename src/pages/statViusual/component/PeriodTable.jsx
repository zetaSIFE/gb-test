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
const SelecBox = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 16px;
  gap: 35px;
`;
const StyledSelc = styled.select`
  width: 202px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
`;
const ItemUl = styled.ul`
  border-top: 1px solid #11233F;
  overflow: auto;
  max-height: 255px;
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
      <SelecBox >
        <StyledSelc>
          {selectSi.map((el, idx) => (
            <option
              key={idx}
              val={el.val}
            >{el.name}</option>
          ))}
        </StyledSelc>
        <span>~</span>
        <StyledSelc>
          {selectSi.map((el, idx) => (
            <option
              key={idx}
              val={el.val}
            >{el.name}</option>
          ))}
        </StyledSelc>
      </SelecBox>
      <StyledTop className="fontBold">
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
