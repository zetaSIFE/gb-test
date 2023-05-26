import React from "react";
import styled from "styled-components";
import {
  GbMap,
  BarX,
  Table,
  Pie,
  BarNLine,
  FlowChart,
} from "components/charts";
import { SelecGroup } from "./SelectGroup";

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
    grid-column: span 6;
  }
  .item1:nth-child(4) {
    grid-column: span 2;
  }
  .item2:nth-child(1) {
    grid-column: span 2;
  }
  .item2:nth-child(2) {
    grid-column: span 2;
  }
  .item2:nth-child(3) {
    grid-column: span 4;
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
const ChkContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const ChkBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ChkChart = styled.p`
  width: 60%;
`;
const ChkBoxchk = styled.div`
  background-color: #f3f3f3;
  padding: 20px 15px;
  height: 100%;
  label {
    display: inline-block;
    width: 50px;
    height: 35px;
  }
`;
export const Card = () => {
  const barXData = {
    title: "업종별 결제금액",
    data: {
      value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
    },
  };
  const barXData2 = {
    title: "행정구역별 카드 사용량",
    data: {
      value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
    },
  };
  const pieData = {
    title: "업종별 카드소비 비율",
    legend: {
      orient: "vertical",
      left: "left",
      top: "20%",
      data: ["숙박", "식당", "병원", "서적", "생활", "생활문화"],
    },
    series: {
      data: [
        { value: 335, name: "숙박" },
        { value: 310, name: "식당" },
        { value: 234, name: "병원" },
        { value: 534, name: "서적" },
        { value: 135, name: "생활" },
        { value: 548, name: "생활문화" },
      ],
    },
  };
  return (
    <Container className="container">
      <ItemContainer className="item1 flex-column itemStyle">
        <SelecGroup />
        <FlowChart width="100%" height="100%" />
      </ItemContainer>
      <Group1 className="group1">
        <ItemContainer className="item2 itemStyle">
          <p className="chartTit">최대 소비 업종 순위</p>
          <Table />
        </ItemContainer>
        <ItemContainer className="item2 itemStyle">
          <div className="spaceBetween">
            <p className="chartTit">업종별 결제금액</p>
          </div>
          <BarX barXData={barXData} />
        </ItemContainer>
        <ItemContainer className="item2 itemStyle">
          <div className="spaceBetween">
            <p className="chartTit">행정구역별 카드 사용량</p>
          </div>
          <BarX barXData={barXData2} />
        </ItemContainer>
      </Group1>
      <ChkContainer className="item1 itemStyle">
        <ChkBox>
          <p className="chartTit inlineBlock">업종별 카드사용량 추이</p>
          <ChkBoxchk>
            <input type="checkbox" checked />
            <label for="test">전체</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
            <input type="checkbox" />
            <label for="test">test</label>
          </ChkBoxchk>
        </ChkBox>
        <ChkChart>
          <BarNLine />
        </ChkChart>
      </ChkContainer>
      <ItemContainer className="item1 itemStyle">
        <div className="spaceBetween">
          <p className="chartTit">업종별 연령별 소비비율</p>
          <div className="inlineBlock right"></div>
          <select>
            <option disabled="disabled">업종선택</option>
            <option>숙박</option>
            <option>식당</option>
            <option>병원</option>
            <option>생활</option>
            <option>문화</option>
            <option>서적</option>
            <option>서비스업</option>
            <option>관광</option>
          </select>
        </div>
        <Pie pieData={pieData} />
      </ItemContainer>
    </Container>
  );
};
