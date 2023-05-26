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

  /** NOTE by 이성조 : 이런식으로 바뀌어야 하지 않을까요?
   *  {
   *    title: "경상북도 전입전출 추이",
   *    xAxis: ["2013년","2014년","2015년","2016년","2017년","2018년","2019년","2020년","2021년","2022년"],
   *    data: {1개 묶음(범례 이름, 데이터 목록),
   *          1개 묶음(범례 이름, 데이터 목록),
   *          1개 묶음(범례 이름, 데이터 목록)
   *   }
   */

  // const stackedData = props.stackedData.data;

  const option = {
    // title: {
    //   text: "경상북도 전입전출 추이",
    //   // text: stackedData.title,
    //   textStyle: {
    //     fontSize: 15,
    //   },
    // },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["경상북도", "안동시"],
      // data: stackedData.legend,
    },
    toolbox: {
      feature: {
        // dataView: { readOnly: false },
        // saveAsImage: {
        //   title: "이미지 다운로드",
        // },
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
        name: "경상북도",
        type: "line",
        stack: "Total",
        itemStyle: {
          color: "#FF39A7",
        },
        // areaStyle: {normal: {}},
        data: [120, 132, 101, 134, 90, 230, 210, 180, 190, 200],
        // data: stackedData.data.series[0],
      },
      {
        name: "안동시",
        type: "line",
        stack: "Total",
        itemStyle: {
          color: "#656CE1",
        },
        // areaStyle: {normal: {}},
        data: [220, 182, 191, 234, 290, 330, 310, 280, 270, 150],
        // data: stackedData.data.series[1],
      },
    ],
  };

  //TODO: 는 아니고 areaStyle: {normal: {}}로 라인 내부 색상 가능

  return <ReactECharts option={option} style={{height: "90%", width: "95%" }} />;
};

export { Stacked };
