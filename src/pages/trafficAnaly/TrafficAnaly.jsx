import React, { useEffect, useState} from "react";
import styled from "styled-components";
import { InOutFlow } from "./component/InOutFlow.jsx";
import { Card } from "./component/Card.jsx";
import { Pattern } from "./component/Pattern.jsx";
import { Theader } from "./Theader.jsx";

const Container = styled.div`
  height: 100%;
  padding: 20px;
  display: grid;
  grid-gap: 20px;

  grid-template-rows: 2fr 1.3fr;
  grid-template-columns: repeat(5, 1fr);
  .item1:nth-child(1) {
    grid-column: span 2;
  }
  .group1:nth-child(2) {
    grid-column: span 3;
  }
  .item1:nth-child(3) {
    grid-column: span 3;
  }
  .group2:nth-child(4) {
    grid-column: span 2;
  }

  .item1,
  .item2 {
    border: 1px solid #cccccc;
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
  }
`;


export default function TrafficAnaly() {
  const [currentTab, setClickTab] = useState(0);
  const [tabCont, SetTabCont] = useState(<InOutFlow/>);
  useEffect(() =>{
    switch(currentTab){
      case 0 : 
        SetTabCont(<InOutFlow/>)
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
    <>
    <Theader setClickTab={setClickTab} />
    <Container className="container">
      {tabCont}      
    </Container>
    </>
  );
};
