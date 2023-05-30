import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.select`
  width: 160;
  height: 30px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 14px;
  /* padding-right: 15px; */
`;

const Option = styled.option``;

export const DropdownSmall = ({ title, props }) => {
  const [optionList, setOptionList] = useState(["데이터를 입력해주세요"]);
  console.log(props);
  console.log(title);
  useEffect(() => {
    if (props) {
      setOptionList(props.data);
    }
  }, [props]);

  // const optionList = props.data;
  return (
    <Container defaultValue="selectAll">
      <Option disabled value="selectAll">
        {title}
      </Option>
      {optionList.map((data, index) => (
        <Option key={index} value={data}>
          {data}
        </Option>
      ))}
    </Container>
  );
};
