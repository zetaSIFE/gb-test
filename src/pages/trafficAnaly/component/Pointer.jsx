import React, { useRef } from "react";
import styled from "styled-components";
import { ReactComponent as PointerSVG } from "assets/images/buttons/pointer.svg";

// ****************
// const pointerArr = [
//   {val: "1", name:'안동시 일직면'},
//   {val: "2", name:'안동시 북후면'},
//   {val: "3", name:'안동시 와룡면'},
//   {val: "4", name:'안동시 길안면'},
//   {val: "5", name:'안동시 임하면'},
//   {val: "6", name:'안동시 풍천면'},
// ];
// ****************

const Container = styled.div`
  display: flex;
`;
const Item = styled.div``;
const TextArea = styled.text`
  /* position: absolute; */
`;

export const Pointer = (prop) => {
  const pointerArr = prop.pointerData;
  const svgRef = useRef(null);

  return (
    <Container>
      {pointerArr.map((el, index) => (
        <Item>
          <PointerSVG className="pointerSvg" ref={svgRef}>
            <TextArea key={index}>{el.name}</TextArea>
          </PointerSVG>
        </Item>
      ))}
    </Container>
  );
};
