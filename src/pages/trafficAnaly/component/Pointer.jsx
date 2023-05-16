import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  align-items: center;

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

const PointerDiv = styled.div`
  width: 300px;
  height: 80px;
  position: relative;
  margin-right: 30px;
  display: flex;
  justify-content: center;
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
export const Pointer = () => {
  
  return (
    <Wrap>
      <PointerDiv>안동시 풍천면</PointerDiv>
      <PointerDiv>안동시 풍천면</PointerDiv>
      <PointerDiv>안동시 풍천면</PointerDiv>
      <PointerDiv>안동시 풍천면</PointerDiv>
      <PointerDiv>안동시 풍천면</PointerDiv>
      <PointerDiv>안동시 풍천면</PointerDiv>
    </Wrap>
  );
};
