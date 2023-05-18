import React from "react";
import ReactECharts from "echarts-for-react";
import { graphic } from "echarts";

const Stacked = (props) => {
  /**
   *  {
   *    title: "경상북도 전입전출 추이",
   *    legend: ["data1", "data2"],
   *    data: {
   *      xAxis: ["2013년","2014년","2015년","2016년","2017년","2018년","2019년","2020년","2021년","2022년"],
   *      series: [
   *        [120, 132, 101, 134, 90, 230, 210],
   *        [220, 182, 191, 234, 290, 330, 310]
   *      ]
   *    }
   *  }
   */

  // const stackedData = props.stackedData.data;

  const option = {
    title: {
      text: "경상북도 전입전출 추이",
      // text: stackedData.title,
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["data1", "data2"],
      // data: stackedData.legend,
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
        data: [
          "2013년",
          "2014년",
          "2015년",
          "2016년",
          "2017년",
          "2018년",
          "2019년",
          "2020년",
          "2021년",
          "2022년",
        ],
        // data: stackedData.data.xAxis,
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
        itemStyle: {
          color: "#FF39A7",
        },
        // areaStyle: {normal: {}},
        data: [120, 132, 101, 134, 90, 230, 210],
        // data: stackedData.data.series[0],
      },
      {
        name: "data2",
        type: "line",
        stack: "Total",
        itemStyle: {
          color: "#656CE1",
        },
        // areaStyle: {normal: {}},
        data: [220, 182, 191, 234, 290, 330, 310],
        // data: stackedData.data.series[1],
      },
    ],
  };

  //TODO: 는 아니고 areaStyle: {normal: {}}로 라인 내부 색상 가능

  return <ReactECharts option={option} style={{ height: "90%" }} />;
};

export { Stacked };
