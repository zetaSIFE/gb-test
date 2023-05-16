import React, { forwardRef, useEffect, useState } from "react";
import {
  FlowChart,
  BarX,
  Stacked,
  BarY,
  Table,
  MultiBar,
  Pictorial,
} from "components/charts";
import styled from "styled-components";
import { Select } from "./Select";
import { DivisonMap } from "./DivisionMap";
import { DatePicker } from "./DatePicker";
import { TimePicker } from "./TimePicker";
import { CustomPicker } from "./CustomPicker";

const Container = styled.div`
  /* height:95vh; */
  display: grid;
  grid-gap: 10px;
  height: calc(100vh - 90px);
  padding-bottom: 10px;
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
  const pictoData = {
    title: "성별 유입율",
    men: "40",
    women: "50",
  };
  return (
    <>
      {prop.division ? (
        <DivisonMap />
      ) : (
        <Container className="container">
          <ItemContainer className="item1 flex-column">
            <SelecBox>
              <CustomPicker
                component={
                  <Select title={"유입 유출"} values={["유입", "유출"]} />
                }
              />
              <Select title={"유입 유출"} values={["유입", "유출"]} />
              <Select
                title={"기간 설정"}
                values={[]}
                onClick={() => showDatePicker()}
              />
              {openDate && <DatePicker />}
              <Select
                title={"시간 설정"}
                values={[]}
                onClick={() => showTimePicker()}
              />
              {openTime && <TimePicker />}
              <Select title={"성별 설정"} values={["남자", "여자"]} />
              <Select title={"연령 설정"} values={["유입", "유출"]} />
            </SelecBox>
            <FlowChart width="100%" height="100%" />
          </ItemContainer>

          <Group1 className="group1">
            <ItemContainer className="item2">
              {/* <p className="chartTit">시간대별 유입량</p> */}
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
              <BarX barXData={barXData} />
            </ItemContainer>
          </Group1>

          <ItemContainer className="item1">
            <Stacked />
          </ItemContainer>

          <Group2 className="group2">
            <ItemContainer className="item2">
              <BarY />
            </ItemContainer>
            <ItemContainer
              className="item2"
              style={
                {
                  // width:"500px"
                }
              }
            >
              <Pictorial pictoData={pictoData} />
            </ItemContainer>
          </Group2>
        </Container>
      )}
    </>
  );
};
