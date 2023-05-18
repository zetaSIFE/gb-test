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
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);

  div:nth-child(1) {
    background-color: #EBEFF4;
    :before {
      border-left: 30px solid #EBEFF4;
    }
  }
  div:nth-child(2) {
    background-color: #DCE3EC;
    :before {
      border-left: 30px solid #DCE3EC;
    }
  }
  div:nth-child(3) {
    background-color: #CDD7E4;
    :before {
      border-left: 30px solid #CDD7E4;
    }
  }
  div:nth-child(4) {
    background-color: #BDCADB;
    :before {
      border-left: 30px solid #BDCADB;
    }
  }
  div:nth-child(5) {
    background-color: #ACBBD1;
    :before {
      border-left: 30px solid #ACBBD1;
    }
  }
  div:nth-child(6) {
    background-color: #9CAFC8;
    :before {
      border-left: 30px solid #9CAFC8;
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
        <PointerDiv
          key={index}
        >
          {el.name}
        </PointerDiv>
      ))}
      {/* <TimeLine></TimeLine> */}
    </Wrap>
  );
};
