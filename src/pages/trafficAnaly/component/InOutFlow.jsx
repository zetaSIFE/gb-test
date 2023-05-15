import React, {useEffect} from "react";
import { FlowChart, BarX, Stacked, BarY, Table, MultiBar } from "components/charts";
import styled from "styled-components";
import { Select } from "./Select";
import { DivisonMap } from "./DivisionMap";

const Container = styled.div`
  /* height:95vh; */
  display: grid;
  grid-gap: 10px;
  height:calc(100vh - 80px);
  padding-bottom: 10px;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: repeat(5, 1fr);
  overflow-x: auto;
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

const ItemContainer = styled.div`
  /* height: 100%; */
`;

const SelecBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Group1 = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 0px;
  grid-gap: 10px;
`;

const Group2 = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px;
  grid-gap: 10px;
`;
export const InOutFlow = (prop) => {
  return (
    <>
      {prop.division ?
        <DivisonMap/>
        :
        <Container className="container">
          <ItemContainer className="item1 flex-column">
            <SelecBox>
              <Select/>
              <Select/>
              <Select/>
              <Select/>
              <Select/>
              <button>조회</button>
            </SelecBox>
            <FlowChart width="100%" height="100%" />
          </ItemContainer>

          <Group1 className="group1">
            <ItemContainer className="item2">
            <p className="chartTit">시간대별 유입량</p>
              <MultiBar />
            </ItemContainer>
            <ItemContainer className="item2">
              <BarY />
            </ItemContainer>
            <ItemContainer className="item2">
              <p className="chartTit">최다 유입지 순위</p>
              <Table />
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
        </Container>
      }
    </>
  );
};

