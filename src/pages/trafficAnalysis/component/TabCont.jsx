import React, { useEffect } from "react";
import { useState } from 'react';
import styled from 'styled-components';
import {InOutFlow} from './InOutFlow'
import {Pattern} from './Pattern'
import {Card} from './Card'

// Styled-Component 라이브러리를 활용해 TabMenu 와 Desc 컴포넌트의 CSS를 구현.

// const Desc = styled.div`
//   text-align: center;
//   padding:15px;
//   background:#fff;
// `;

export const TabCont = (prop) => {
  const [tabCont, SetTabCont] = useState();
  console.log(prop.val);
  // useEffect(() =>{
    
  //   switch(prop.val){
  //     case 0 : 
  //       SetTabCont(<InOutFlow/>)
  //       break;
  //     case 1 : 
  //       SetTabCont(<Pattern/>);
  //       break;
  //     case 2 : 
  //       SetTabCont(<Card/>);
  //       break;
  //   }
  // }, [prop])

  return (
    <>
      {/* <p>{menuArr[currentTab].val}</p> */}
      {/* {tabCont} */}
      <InOutFlow/>
    </>
  );
};