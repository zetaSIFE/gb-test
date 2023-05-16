import React, { useEffect, useState} from "react";
import styled from "styled-components";
import { InOutFlow } from "./component/InOutFlow.jsx";
import { Card } from "./component/Card.jsx";
import { Pattern } from "./component/Pattern.jsx";
import { Theader } from "./Theader.jsx";

const Wrap = styled.div`
  height: 100%;
  position: relative;
`;
const Line = styled.div`
  width:100%;
  height: 1px;
  padding:0 10px;
  background-color: #11233f;
  background-clip: content-box;
  position: absolute;
  top: 74px;
`;
const Container = styled.div`
  height:calc(100vh - 80px);
  padding: 10px;
  display: grid;
  grid-gap: 10px;
`;

export default function TrafficAnaly() {
  const [currentTab, setClickTab] = useState(0);
  const [division, setDivision] = useState();
  const [tabCont, SetTabCont] = useState(<InOutFlow division={division}/>);
    
  useEffect(() =>{
    setDivision(division);
    SetTabCont(<InOutFlow division={division}/>)
  },[division])

  useEffect(() =>{
    switch(currentTab){
      case 0 : 
        SetTabCont(<InOutFlow division={division}/>)
        break;
      case 1 : 
        SetTabCont(<Pattern/>);
        break;
      case 2 : 
        SetTabCont(<Card/>);
        break;
    }
  }, [currentTab])

  return (
    <Wrap>
      <Theader setClickTab={setClickTab} setDivision={setDivision} />
      <Line/>
      <Container className="container">
        {tabCont}      
      </Container>
    </Wrap>
  );
};