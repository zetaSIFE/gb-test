import React, { useEffect } from "react";
import { useState } from 'react';
import styled from 'styled-components';
// import {InOutFlow} from './InOutFlow'
// import {Pattern} from './Pattern'
// import {Card} from './Card'

// Styled-Component 라이브러리를 활용해 TabMenu 와 Desc 컴포넌트의 CSS를 구현.

// const Desc = styled.div`
//   text-align: center;
//   padding:15px;
//   background:#fff;
// `;

export const TabCont = (props) => {
  const [tabCont, SetTabCont] = useState();


  useEffect(() =>{
    console.log(props)
    
    // switch(prop.val){
    //   case 0 : 
    //     SetTabCont(<InOutFlow/>)
    //     break;
    //   case 1 : 
    //     SetTabCont(<Pattern/>);
    //     break;
    //   case 2 : 
    //     SetTabCont(<Card/>);
    //     break;
    // }
  }, [props])

  return (
    <>
      {/* <p>{menuArr[currentTab].val}</p> */}
      <div>{props.val}sdfsdf</div>
    </>
  );
};