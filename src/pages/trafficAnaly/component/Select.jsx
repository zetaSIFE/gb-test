import React from "react";
import styled from "styled-components";

export const Select = (props) => {
  return (
    <select
      onChange={(e) => {
        if (props.onChange) props.onChange(e.currentTarget.value);
      }}
    >
      <option disabled selected value={props.title}>
        {props.title}
      </option>
      {props.values.map((obj) => {
        return (
          <option key={obj.name} value={obj.value}>
            {obj.name}
          </option>
        );
      })}
    </select>
  );
};
