import React, { useEffect } from "react";
import styled from 'styled-components';
import { Ol_Echar_flow, Bar, Line, Pie } from '../../echartCompo';

const Wrap = styled.div`
  display:flex;
  flex-wrap: wrap;
`;


export const Card = () => {
  // useEffect(()=> {
  // },[]);
  return (
    <Wrap>
      <Line width="250px" height="300px"/> 
      <Ol_Echar_flow width="670px" height="450px"/>
      <Bar width="250px" height="300px"/>
      <Pie width="250px" height="300px"/>
    </Wrap>
  );
};
