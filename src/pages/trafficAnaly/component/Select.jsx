import React from "react";
import styled from "styled-components";

// const HeaderBox = styled.div`
//   * {
//     height: 40px;
//     border: 1px solid #cccccc;
//     border-radius: 10px;
//     background: #ffffff;
//     min-width: 120px;
//   }
//   input {
//     padding: 0 5px;
//     min-width: 250px;
//     margin-right: 15px;
//   }
//   select {
//     /* min-width:200px; */
//     margin-right: 10px;
//   }
// `;

export const Select = (props) => {
  return (
    // <HeaderBox>
    <select
      onClick={() => {
        if (props.onClick) props.onClick();
      }}
    >
      <option disabled selected>
        {props.title}
      </option>
      {props.values.map((value) => {
        return <option>{value}</option>;
      })}
    </select>
    // </HeaderBox>
  );
};
