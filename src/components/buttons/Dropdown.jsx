import React, { useState, useEffect, useRef } from "react";
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
    top: 4px;
    right: 8px;
    color: #777777;
    font-size: 20px;
    font-weight: bold;
  }
`;
const Label = styled.label`
  font-size: 14px;
  display: inline-block;
`;
const SelectOptions = styled.ul`
  position: absolute;
  top: 38px;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  height: 200px;
  /* border: 1px solid #cccccc; */
  // show가 아닌 상태에서 테두리를 없앤다
  border: ${(props) => (props.show ? "1px solid #cccccc;" : "none")};
  border-radius: 5px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  background-color: #fefefe;

  // 스크롤바 CSS
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #77777781;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #cccccc;
    border-radius: 0px 3px 3px 0px;
  }
`;
const Option = styled.li`
  font-size: 14px;
  padding: 10px;
  transition: background-color 0.2s ease-in;
  &:hover {
    color: white;
    border-radius: 5px;
    // hover 색상 후보
    background: linear-gradient(135deg, #5658df 0%, #2f6dd0 100%);
    /* background-color: #dadada; */
    /* background-color: #1e90ff; */
  }
`;

export const Dropdown = ({ props }) => {
  console.log(props.data);
  const list = props.data;
  const selectRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(list[0]);
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e) => {
    setCurrentValue(e.target.getAttribute("value"));
  };

  useEffect(() => {
    // NOTE Dropdwon 박스 바깥쪽을 클릭시 옵션이 사라지는 기능
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        // dom 바깥 클릭
        setShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  return (
    <SelectBox onClick={() => setShowOptions((prev) => !prev)} ref={selectRef}>
      <Label>{currentValue}</Label>
      <SelectOptions show={showOptions}>
        {list.map((data, index) => (
          <Option key={index} value={data} onClick={handleOnChangeSelectValue}>
            {data}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};

// props Default value
Dropdown.defaultProps = {
  name: "초기값",
};
