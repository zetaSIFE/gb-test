import { GbMap, BarX, Stacked, BarY } from "components/charts";
import React, { useState } from "react";
import styled from "styled-components";
import { InputBox } from "./component/InputBox";

const Container = styled.div`
  height: calc(100vh - 80px);
  min-height: 100%;
  padding: 10px;
  padding-top: 0;
  display: grid;
  grid-gap: 10px;

  grid-template-rows: 2fr 1fr;
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

  /* .item1,
  .item2 {
    border: 1px solid #cccccc;
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
  } */
  .inlineBlock_right {
    position: absolute;
    right: 570px;
    bottom: 790px;
    padding: 0px;
    z-index: 10;
  }
  .inlineBlock_right2 {
    position: absolute;
    right: 570px;
    bottom: 510px;
    padding: 0px;
    z-index: 10;
  }
`;

const ItemContainer = styled.div`
  /* height: 100%; */
`;

const Group1 = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 0px;
  grid-gap: 10px;
  /* object-fit: fill; */
`;

const Group2 = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px;
  grid-gap: 10px;
`;

export default function Transfer() {
  const [checkValue, setCheckValue] = useState("전체");
  const [barXData, setBarXData] = useState({
    title: "지역별 인구수",
    data: {
      value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
    },
  });
  // const [barYData, setBarYData] = useState({
  //   title: "지역별 전출자수",
  //   data: {
  //     value: [5, 20, 36, 13, 27, 60, 50, 90, 50],
  //   },
  // });
  // const barXData1 = {
  //   title: "지역별 인구수",
  //   data: {
  //     value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
  //   },
  // };
  // const barXData2 = {
  //   title: "지역별 전입자수",
  //   data: {
  //     value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
  //   },
  // };
  // const barXData3 = {
  //   title: "지역별 청년 전출자수",
  //   data: {
  //     value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
  //   },
  // };
  const barYData = {
    title: "지역별 전출자수",
    data: {
      value: [5, 20, 36, 13, 27, 60, 50, 90, 50],
    },
  };

  const checkOnlyOne = (e) => {
    let checkItem = document.getElementsByName("flow");
    Array.prototype.forEach.call(checkItem, function (el) {
      el.checked = false;
    });
    e.target.checked = true;
    const getflowVal = e.target.defaultValue;
    setCheckValue(getflowVal);

    /****************** barX 체크박스 데이터 ****************/
    if (getflowVal === "전체") {
      setBarXData((prevState) => {
        return {
          ...prevState,
          title: "지역별 인구수",
          data: {
            value: [5, 20, 36, 13, 27, 60, 50, 90, 50],
          },
        };
      });
    } else if (getflowVal === "도내") {
      setBarXData((prevState) => {
        return {
          ...prevState,
          title: "지역별 인구수",
          data: {
            value: [46, 26, 31, 33, 17, 50, 70, 40, 90],
          },
        };
      });
    } else {
      setBarXData((prevState) => {
        return {
          ...prevState,
          title: "지역별 인구수",
          data: {
            value: [5, 20, 36, 13, 27, 60, 50, 90, 50],
          },
        };
      });
    }
  };

  return (
    <Container className="container">
      <ItemContainer className="item1 itemStyle">
        <GbMap />
      </ItemContainer>

      <Group1 className="group1">
        <ItemContainer className="item2 itemStyle">
          <div className="inlineBlock_right">
            <input
              type="checkbox"
              id="total"
              name="flow"
              value="전체"
              onChange={(e) => checkOnlyOne(e)}
              checked={checkValue === "전체"}
            />
            <label htmlFor="total">전체</label>
            <input
              type="checkbox"
              id="inflow"
              name="flow"
              value="도내"
              onChange={(e) => checkOnlyOne(e)}
              checked={checkValue === "도내"}
            />
            <label htmlFor="inflow">도내</label>
            <input
              type="checkbox"
              id="outflow"
              name="flow"
              value="도외"
              onChange={(e) => checkOnlyOne(e)}
              checked={checkValue === "도외"}
            />
            <label htmlFor="outflow">도외</label>
          </div>
          <BarX barXData={barXData} />
        </ItemContainer>
        <ItemContainer className="item2 itemStyle">
          <BarY barYData={barYData} />
        </ItemContainer>
        <ItemContainer className="item2 itemStyle">
          <div className="inlineBlock_right2">
            <input
              type="checkbox"
              id="total"
              name="flow"
              value="전체"
              onChange={(e) => checkOnlyOne(e)}
              checked={checkValue === "전체"}
            />
            <label htmlFor="total">전체</label>
            <input
              type="checkbox"
              id="inflow"
              name="flow"
              value="도내"
              onChange={(e) => checkOnlyOne(e)}
              checked={checkValue === "도내"}
            />
            <label htmlFor="inflow">도내</label>
            <input
              type="checkbox"
              id="outflow"
              name="flow"
              value="도외"
              onChange={(e) => checkOnlyOne(e)}
              checked={checkValue === "도외"}
            />
            <label htmlFor="outflow">도외</label>
          </div>
          <BarX barXData={barXData} />
        </ItemContainer>
        <ItemContainer className="item2 itemStyle">
          <BarX barXData={barXData} />
        </ItemContainer>
      </Group1>

      <ItemContainer className="item1 itemStyle">
        <Stacked />
      </ItemContainer>

      <Group2 className="group2">
        <ItemContainer className="item2 itemStyle">
          <BarY barYData={barYData} />
        </ItemContainer>
        <ItemContainer className="item2 itemStyle">
          <BarY barYData={barYData} />
        </ItemContainer>
      </Group2>
    </Container>
  );
}
