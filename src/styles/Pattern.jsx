import React, { useEffect } from "react";
import styled from 'styled-components';
import '../../css/traffic.css'
import { Ol_Echar_flow, Bar, Line, Pie, Scatter } from '../../echartCompo';

const TrafficBox = styled.div`
  border: 1px solid #000;
`;


export const Pattern = () => {
  // useEffect(()=> {
  // },[]);
  return (
    <div id="traffic_wrap">
      <TrafficBox className="topMap">
        <Ol_Echar_flow width="670px" height="100%"/>
      </TrafficBox>
      <TrafficBox className="topChart">
        <div className="grid-item" id="item1">
          <Scatter width="250px" height="100%"/> 
        </div>
        <div className="grid-item" id="item">
          <Line width="250px" height="100%"/> 
        </div>
        <div className="grid-item" id="item3">
          <Bar width="250px" height="100%"/>
        </div>
        <div className="grid-item" id="item4">
          <Pie width="250px" height="100%"/>
        </div>
      </TrafficBox>
      <TrafficBox className="bomChart"></TrafficBox>
    
    </div>
  );
};
