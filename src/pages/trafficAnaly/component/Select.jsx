import React from "react";

export const Select = (props) => {
  return (
    <div>
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
    </div>
  );
};
