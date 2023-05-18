import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.select``;

const Dropdown = styled.ul``;

const Option = styled.option`
  /* -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none; */
  height: 50px;
  background-color: red;
  padding: 10px 0;
`;

// NOTE props 예시 (리스트)
// const props = ["1번", "2번", "3번", "4번","5번"]

export const SelectBox = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    return console.log("click");
  };

  return (
    <Container>
      {isOpen && props.children ? <Dropdown></Dropdown> : null}
    </Container>
  );
};

// {data.map(({ name, tableVal }) => (
//   <tr key={name + tableVal}>
//     <Title>{name}</Title>
//     <Val>{tableVal}</Val>
//   </tr>
