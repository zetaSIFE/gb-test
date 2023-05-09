import React from "react";
import ReactECharts from "echarts-for-react";

const Stacked = () => {
  const option = {
    title: {
      text: "경상북도 전입전출 추이",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["data1", "data2"],
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["2013년", "2014년", "2015년", "2016년", "2017년", "2018년", "2019년", "2020년", "2021년", "2022년"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "data1",
        type: "line",
        stack: "Total",
        // areaStyle: {normal: {}},
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "data2",
        type: "line",
        stack: "Total",
        // areaStyle: {normal: {}},
        data: [220, 182, 191, 234, 290, 330, 310],
      },
    ],
  };

  //TODO: 는 아니고 areaStyle: {normal: {}}로 라인 내부 색상 가능

  return <ReactECharts option={option} style={{ height: "100%" }} />;
};

export { Stacked };
