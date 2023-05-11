import React, { useEffect, useState} from "react";
import styled from "styled-components";
import { InOutFlow } from "./component/InOutFlow.jsx";
import { Card } from "./component/Card.jsx";
import { Pattern } from "./component/Pattern.jsx";
import { Theader } from "./Theader.jsx";

const Wrap = styled.div`
  height: 100%;
`;
const Container = styled.div`
  height:calc(100vh - 80px);
  padding: 20px;
  display: grid;
  grid-gap: 10px;
  border: 1px solid grey;

  grid-template-rows: 2fr 1fr;
  grid-template-columns: repeat(8, 1fr);
  .item1:nth-child(1) {
    grid-column: span 4;
  }
  .item1:nth-child(2) {
    grid-column: span 4;
  }
  .item2:nth-child(3) {
    grid-column: span 3;
  }
  .item2:nth-child(4) {
    grid-column: span 3;
  }
  .item3:nth-child(5) {
    grid-column: span 2;
  }
  


  .item1,
  .item2,
  .item3 {
    border: 1px solid #cccccc;
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
  }
`;

const Group1 = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px;
  grid-gap: 10px;
`;

const ItemContainer = styled.div`
  
`

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
    <Wrap>
      <Theader setClickTab={setClickTab} />
      <Container className="container">
        {tabCont}      
      </Container>
    </Wrap>
  );
}
