import React from "react";
import { GbMap, BarX, Stacked, BarY } from "components/charts";
import styled from "styled-components";


const ItemContainer = styled.div`
  /* height: 100%; */
`;

const Group1 = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 0px;
  grid-gap: 20px;
`;

const Group2 = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px;
  grid-gap: 20px;
`;
export const InOutFlow = () => {
  return (
    <>
      <ItemContainer className="item1">
        <GbMap />
      </ItemContainer>

      <Group1 className="group1">
        <ItemContainer className="item2">
          <BarX />
        </ItemContainer>
        <ItemContainer className="item2">
          <BarY />
        </ItemContainer>
        <ItemContainer className="item2">
          <BarX />
        </ItemContainer>
        <ItemContainer className="item2">
          <BarX />
        </ItemContainer>
      </Group1>

      <ItemContainer className="item1">
        <Stacked />
      </ItemContainer>

      <Group2 className="group2">
        <ItemContainer className="item2">
          <BarY />
        </ItemContainer>
        <ItemContainer className="item2">
          <BarY />
        </ItemContainer>
      </Group2> 
    </>
  );
};
