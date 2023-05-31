import React, { useState } from "react";
import styled from "styled-components";
import { Dynamic, FlowChart, Pictorial, Pie } from "components/charts";
import { ChartHeader } from "components/ChartHeader";
import { Pointer } from "./Pointer";
import { SelecGroup } from "./SelectGroup";
import { ReactComponent as Download } from "assets/images/buttons/downloadCircle.svg";

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  height: calc(100vh - 70px);
  padding-bottom: 10px;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: repeat(8, 1fr);

  .item1:nth-child(1) {
    grid-column: span 3;
  }
  .group1:nth-child(2) {
    grid-column: span 5;
  }
  .item1:nth-child(3) {
    grid-column: span 8;
  }
  .item2:nth-child(1) {
    grid-column: span 4;
  }
  .item2:nth-child(2) {
    grid-column: span 2;
  }
  .item2:nth-child(3) {
    grid-column: span 2;
  }

  /* .item1,
  .item2,
  .item3 {
    border: 1px solid #cccccc;
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
  } */
`;

const Group1 = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(4, 1fr);
  padding: 0px;
  grid-gap: 10px;
`;

const ItemContainer = styled.div``;
const PointerContainer = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
`;

export const Pattern = (props) => {
  const [pieData, setPieData] = useState({
    legend: {
      show: true,
      orient: "vertical",
      left: "left",
      top: "20%",
      data: [
        "오전 (06~10)",
        "점심 (10~14)",
        "오후 (14~18)",
        "저녁 (18~22)",
        "심야 (22~06)",
      ],
    },
    series: {
      data: [
        { value: 375, name: "오전 (06~10)" },
        { value: 310, name: "점심 (10~14)" },
        { value: 234, name: "오후 (14~18)" },
        { value: 534, name: "저녁 (18~22)" },
        { value: 135, name: "심야 (22~06)" },
      ],
    },
  });
  const [checkValue, setCheckValue] = useState("유입");
  const [pictoData, setPictoData] = useState({
    title: "성별 유입(유출) 인구 비중",
    men: "52",
    women: "93",
    grid: {
      left: "25%",
      width: "75%",
    },
  });

  const [chkAbide, setChkAbide] = useState("insied");
  const [pointerData, setPointerData] = useState([
    { val: "1", name: "안동시 일직면" },
    { val: "2", name: "안동시 북후면" },
    { val: "3", name: "안동시 와룡면" },
    { val: "4", name: "안동시 길안면" },
    { val: "5", name: "안동시 임하면" },
    { val: "6", name: "안동시 풍천면" },
  ]);

  // const pieData = {
  //   title: "시간대별 유입(유출) 인구 비중",
  //   legend: {
  //     show: true,
  //     orient: "vertical",
  //     left: "left",
  //     top: "20%",
  //     data: [
  //       "오전 (06~10)",
  //       "점심 (10~14)",
  //       "오후 (14~18)",
  //       "저녁 (18~22)",
  //       "심야 (22~06)",
  //     ],
  //   },
  //   series: {
  //     data: [
  //       { value: 375, name: "오전 (06~10)" },
  //       { value: 310, name: "점심 (10~14)" },
  //       { value: 234, name: "오후 (14~18)" },
  //       { value: 534, name: "저녁 (18~22)" },
  //       { value: 135, name: "심야 (22~06)" },
  //     ],
  //   },
  // };

  const chkFlowBtn = (e) => {
    let checkItem = document.getElementsByName("flow");
    Array.prototype.forEach.call(checkItem, function (el) {
      el.checked = false;
    });
    e.target.checked = true;
    const getflowVal = e.target.defaultValue;
    setCheckValue(getflowVal);

    if (getflowVal === "유입") {
      setPictoData((prevState) => {
        return {
          ...prevState,
          title: "성별 유입 인구 비중",
          men: 52,
          women: 93,
        };
      });
    } else {
      setPictoData((prevState) => {
        return {
          ...prevState,
          title: "성별 유출 인구 비중",
          men: 72,
          women: 43,
        };
      });
    }
  };
  const chkFlowBtn2 = (e) => {
    let checkItem = document.getElementsByName("flow2");
    Array.prototype.forEach.call(checkItem, function (el) {
      el.checked = false;
    });
    e.target.checked = true;
    // console.log("zhsth",e);
    const getflowVal = e.target.defaultValue;
    setCheckValue(getflowVal);

    if (getflowVal === "inflow") {
      setPieData((prevState) => {
        return {
          ...prevState,
          series: {
            data: [
              { value: 375, name: "오전 (06~10)" },
              { value: 310, name: "점심 (10~14)" },
              { value: 234, name: "오후 (14~18)" },
              { value: 534, name: "저녁 (18~22)" },
              { value: 135, name: "심야 (22~06)" },
            ],
          },
        };
      });
    } else {
      setPieData((prevState) => {
        return {
          ...prevState,
          series: {
            data: [
              { value: 135, name: "오전 (06~10)" },
              { value: 210, name: "점심 (10~14)" },
              { value: 134, name: "오후 (14~18)" },
              { value: 334, name: "저녁 (18~22)" },
              { value: 435, name: "심야 (22~06)" },
            ],
          },
        };
      });
    }
  };

  const chkPointerBtn = (e) => {
    let checkItem = document.getElementsByName("abide");
    Array.prototype.forEach.call(checkItem, function (el) {
      el.checked = false;
    });
    e.target.checked = true;
    const getAbideVal = e.target.defaultValue;
    setChkAbide(getAbideVal);

    const copyArr = [...pointerData];

    if (getAbideVal === "inside") {
      setPointerData(copyArr);
    } else {
      setPointerData(copyArr.reverse());
    }
  };
  return (
    <Container className="container">
      <ItemContainer className="item1 flex-column itemStyle">
        <SelecGroup />
        <FlowChart width="100%" height="100%" />
      </ItemContainer>
      <Group1 className="group1">
        <ItemContainer className="item2 itemStyle">
          <ChartHeader title={'시간대별 유입(유출)인구 추이'}/>
          <div className="chartCont">
          <Dynamic />
          </div>
            {/* <div className="inlineBlock right">
              <input
                type="checkbox"
                id="inflow"
                name="flow"
                value="inflow2"
                //onChange={(e) => chkFlowBtn3(e)}
                checked={checkValue === "inflow2"}
              />
              <label htmlFor="inflow">유입</label>
              <input
                type="checkbox"
                id="outflow"
                name="flow"
                value="outflow2"
                //onChange={(e) => chkFlowBtn3(e)}
                checked={checkValue === "outflow2"}
              />
              <label htmlFor="outflow">유출</label>
            </div> */}
        </ItemContainer>
        <ItemContainer className="item2 itemStyle">
        <ChartHeader title={'시간대별 유입(유출)인구 비중'}/>
          <div className="chartCont">
            <Pie pieData={pieData} />
          </div>
            {/* <div className="inlineBlock right">
              <input
                type="checkbox"
                id="inflow"
                name="flow2"
                value="inflow"
                onChange={(e) => chkFlowBtn2(e)}
                checked={checkValue === "inflow"}
              />
              <label htmlFor="inflow">유입</label>
              <input
                type="checkbox"
                id="outflow"
                name="flow2"
                value="outflow"
                onChange={(e) => chkFlowBtn2(e)}
                checked={checkValue === "outflow"}
              />
              <label htmlFor="outflow">유출</label>
            </div> */}

        </ItemContainer>
        <ItemContainer className="item2 itemStyle">
        <ChartHeader title={'성별 유입(유출)인구 비중'}/>
            <div className="chartCont">
              <Pictorial pictoData={pictoData} />
            </div>
            {/* <div className="inlineBlock right">
              <input
                type="checkbox"
                id="inflow"
                name="flow"
                value="유입"
                onChange={(e) => chkFlowBtn(e)}
                checked={checkValue === "유입"}
              />
              <label htmlFor="inflow">유입</label>
              <input
                type="checkbox"
                id="outflow"
                name="flow"
                value="유출"
                onChange={(e) => chkFlowBtn(e)}
                checked={checkValue === "유출"}
              />
              <label htmlFor="outflow">유출</label>
            </div> */}
        </ItemContainer>
      </Group1>
      <PointerContainer className="item1 itemStyle">
        <ChartHeader title={'시간대별 인구 밀집/이동 패턴'}/>
        <div className="chartCont">
          <Pointer pointerData={pointerData} />
        </div>
          {/* <div className="inlineBlock right">
            <input
              type="checkbox"
              id="inside"
              name="abide"
              value="inside"
              onChange={(e) => chkPointerBtn(e)}
              checked={chkAbide === "inside"}
            />
            <label htmlFor="inside">관내인구</label>
            <input
              type="checkbox"
              id="outside"
              name="abide"
              value="outside"
              onChange={(e) => chkPointerBtn(e)}
              checked={chkAbide === "outside"}
            />
            <label htmlFor="outside">관외 인구</label>
          </div> */}
      </PointerContainer>
    </Container>
  );
};
