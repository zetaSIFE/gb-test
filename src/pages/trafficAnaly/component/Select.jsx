import React from "react";
import styled from "styled-components";

export const Select = (props) => {
  return (
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
  );
};
