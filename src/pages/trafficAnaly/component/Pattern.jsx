import React, {useState} from "react";
import styled from "styled-components";
import { Dynamic, GbMap, Pictorial, Pie } from "components/charts";

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  height:calc(100vh - 80px);
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
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(4, 1fr);
  padding: 0px;
  grid-gap: 10px;
`;

const ItemContainer = styled.div``;

export const Pattern = () => {
  const [checkValue, setCheckValue] = useState('유입');

  const checkOnlyOne = (e) => {
    let checkItem = document.getElementsByName("flow");
    Array.prototype.forEach.call(checkItem, function (el) {
      el.checked = false;
    });
    e.target.checked = true;
    setCheckValue(e.target.defaultValue);
  };
  return (
    <Container className="container">
      <ItemContainer className="item1">
        <GbMap />
      </ItemContainer>
      <Group1 className="group1">
        <ItemContainer className="item2">
          <Dynamic/>
        </ItemContainer>
        <ItemContainer className="item2">
          <Pie />
        </ItemContainer>
        <ItemContainer className="item2">
          <div className="inlineBlock right">
            <input
              type="checkbox"
              id="inflow"
              name="flow"
              value="유입"
              onChange={(e) => checkOnlyOne(e)}
              checked={checkValue === "유입"}
            />
            <label htmlFor="inflow">유입</label>
            <input
              type="checkbox"
              id="outflow"
              name="flow"
              value="유출"
              onChange={(e) => checkOnlyOne(e)}
              checked={checkValue === "유출"}
            />
            <label htmlFor="outflow">유출</label>
          </div>
          <Pictorial />
        </ItemContainer>
      </Group1>
      <ItemContainer className="item1">chart5</ItemContainer>
    </Container>
  );
};
