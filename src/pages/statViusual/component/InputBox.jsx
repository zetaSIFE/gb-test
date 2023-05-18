// import React, { useState} from "react";
// // import styled from "styled-components";



// export const InputBox = (props) => {
//   const [checkValue, setCheckValue] = useState("전체");
//   const [barXData, setBarXData] = useState({
//     title: "지역별 인구수",
//     data: {
//       value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
//     },
//   });
//   const checkOnlyOne = (e) => {
//     let checkItem = document.getElementsByName("flow");
//     Array.prototype.forEach.call(checkItem, function (el) {
//       el.checked = false;
//     });
//     e.target.checked = true;
//     const getflowVal = e.target.defaultValue;
//     setCheckValue(getflowVal);

//     if (getflowVal === "전체") {
//       setBarXData((prevState) => {
//         return {
//           ...prevState,
//           title: "지역별 인구수",
//           data: {
//             value: [5, 20, 36, 13, 27, 60, 50, 90, 50],
//           },
//         };
//       });
//     } else if (getflowVal === "도내") {
//       setBarXData((prevState) => {
//         return {
//           ...prevState,
//           title: "지역별 인구수",
//           data: {
//             value: [46, 26, 31, 33, 17, 50, 70, 40, 90],
//           },
//         };
//       });
//     } else {
//       setBarXData((prevState) => {
//         return {
//           ...prevState,
//           title: "지역별 인구수",
//           data: {
//             value: [5, 20, 36, 13, 27, 60, 50, 90, 50],
//           },
//         };
//       });
//     }
//   };
//   return (
//     <div className="inlineBlock right">
//     <input
//       type="checkbox"
//       id="total"
//       name="flow"
//       value="전체"
//       onChange={props.onChange}
//       checked={checkValue === "전체"}
//     />
//     <label htmlFor="total">전체</label>
//     <input
//       type="checkbox"
//       id="inflow"
//       name="flow"
//       value="도내"
//       onChange={(e) => checkOnlyOne(e)}
//       checked={checkValue === "도내"}
//     />
//     <label htmlFor="inflow">도내</label>
//     <input
//       type="checkbox"
//       id="outflow"
//       name="flow"
//       value="도외"
//       // onChange={(e) => checkOnlyOne(e)}
//       // checked={checkValue === "도외"}
//     />
//     <label htmlFor="outflow">도외</label>
//   </div>
//   );
// };
