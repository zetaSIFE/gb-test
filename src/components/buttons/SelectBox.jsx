import React from "react";
import styled from "styled-components";

const Container = styled.select`
  background-color: skyblue;
`;

// const props = ["1번", "2번", "3번", "4번","5번"]

export const SelectBox = (props) => {
  console.log(props.props);
  return (
    <div>
      {props.props.length > 2 ? (
        <Container label="test">{<option>props.props[0]</option>}</Container>
      ) : (
        <Container option={() => null}>
          <option value={() => null}>props.props[0]</option>
        </Container>
      )}
    </div>
  );
};
