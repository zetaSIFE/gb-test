import React from "react";
import styled from "styled-components";

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

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: absolute; */
  /* position: ; */
  top: 50%;
  transform: translate(0, -50%);

  div:nth-child(1) {
    background-color: #ebeff4;
    :before {
      border-left: 30px solid #ebeff4;
    }
  }
  div:nth-child(2) {
    background-color: #dce3ec;
    :before {
      border-left: 30px solid #dce3ec;
    }
  }
  div:nth-child(3) {
    background-color: #cdd7e4;
    :before {
      border-left: 30px solid #cdd7e4;
    }
  }
  div:nth-child(4) {
    background-color: #bdcadb;
    :before {
      border-left: 30px solid #bdcadb;
    }
  }
  div:nth-child(5) {
    background-color: #acbbd1;
    :before {
      border-left: 30px solid #acbbd1;
    }
  }
  div:nth-child(6) {
    background-color: #9cafc8;
    :before {
      border-left: 30px solid #9cafc8;
    }
  }
`;
const TimeLine = styled.div`
  position: absolute;
  /* left: 50%; */
  /* transition: translate(0, -50%); */
  height: 140px;
  width: 80%;
  border: 1px solid #000;
`;
const PointerDiv = styled.div`
  width: 265px;
  height: 80px;
  position: relative;
  margin-right: 30px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid black;

  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 40px solid white;
    border-top: 40px solid transparent;
    border-bottom: 40px solid transparent;
  }

  :before {
    content: "";
    position: absolute;
    right: -30px;
    bottom: 0px;
    width: 0px;
    height: 0px;
    border-top: 40px solid transparent;
    border-bottom: 40px solid transparent;
  }
`;
export const Pointer = (prop) => {
  const pointerArr = prop.pointerData;
  return (
    <Wrap>
      {pointerArr.map((el, index) => (
        <PointerDiv key={index}>{el.name}</PointerDiv>
      ))}
      {/* <TimeLine></TimeLine> */}
    </Wrap>
  );
};
