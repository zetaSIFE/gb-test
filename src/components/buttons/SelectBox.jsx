import React from "react";
import styled from "styled-components";

const Container = styled.select`
  background-color: skyblue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  gap: 34px;

  width: 107px;
  height: 28px;

  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
`;

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
  console.log(props.props);

  const handleClick = () => {
    return console.log("click");
  };

  return (
    <div>
      {props.props.length > 1 ? (
        <Container label="test">
          {props.props.map((name, index) => (
            <option
              key={index}
            >{name}</option>
          ))}
        </Container>
      ) : (
        <Container onClick={handleClick}>
          {/* <option style={{ display: "none" }}></option> */}
          <Option className="option">dd</Option>
          <Option className="option">dd1</Option>
        </Container>
      )}
    </div>
  );
};

// {data.map(({ name, tableVal }) => (
//   <tr key={name + tableVal}>
//     <Title>{name}</Title>
//     <Val>{tableVal}</Val>
//   </tr>
