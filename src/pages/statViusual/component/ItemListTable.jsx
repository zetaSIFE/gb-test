import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;


const ItemLi = styled.li`
  height: 50px;
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  /* justify-content: ; */
  align-items: center;
  gap:25px;
`;

export const ItemListTable = () => {
  const dataList = [
    { val: 1, name: '1인 가구'},
    { val: 2, name: '2인 가구'},
    { val: 3, name: '3인 가구'},
    { val: 4, name: '4인 이상 가구'}
  ];

  return (
  <Container>
    <div
      style={{
        padding:"10px"
      }}
    >
      <ul>
        {dataList.map((el, index) =>(          
        <ItemLi
            key={index}
            val={el.val}
          >
          <input type="radio"/>
          {el.name}
        </ItemLi>
        ))}
      </ul>
    </div>
  </Container>
  );
};
