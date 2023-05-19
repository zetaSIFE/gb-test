import React, { useState } from "react";
import styled from "styled-components";

const SelectBox = styled.div`
  position: relative;
  width: 165px;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  align-self: center;
  border: 1px solid #cccccc;

  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 5px;
    right: 8px;
    color: #777777;
    font-size: 20px;
    font-weight: bold;
  }
`;
const Label = styled.label`
  font-size: 14px;
  text-align: center;
`;
const SelectOptions = styled.ul`
  position: absolute;
  top: 39px;
  left: 0;
  width: 100%;
  height: 100px;
  overflow-y: auto;
  max-height: ${(props) => (props.show ? "none" : "0")};

  background-color: #fefefe;
  border-color: black;
`;
const Option = styled.li`
  font-size: 14px;
  padding: 10px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #dadada;
  }
`;

export const Dropdown = (props) => {
  console.log(props.props.data);
  const list = props.props.data;
  const [currentValue, setCurrentValue] = useState(list[0]);
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e) => {
    setCurrentValue(e.target.getAttribute("value"));
  };

  return (
    <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
      <Label>{currentValue}</Label>
      <SelectOptions show={showOptions}>
        {list.map((data, index) => (
          <Option key={index} value={data} onClick={handleOnChangeSelectValue}>
            {/* <Option key={index} value={data}> */}
            {data}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};
