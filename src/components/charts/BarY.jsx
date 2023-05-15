import React from "react";
import ReactECharts from "echarts-for-react";
import { graphic } from "echarts";

const BarY = () => {
  const option = {
    title: {
      text: "지역별 출생아수",
    },
    tooltip: {},
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        saveAsImage: {},
      },
    },
    grid: {
      // top: "20%",
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    // 범례
    // legend: {
    //   data: ["출생데이터"],
    // },
    xAxis: {},
    yAxis: {
      data: [
        "울진",
        "포항",
        "영덕",
        "경주",
        "성주",
        "김천",
        "예천",
        "문경",
        "안동",
      ],
    },
    visualMap: {
      orient: "horizontal",
      top: "10%",
      left: "right",
      min: 10,
      max: 100,
      text: ["출산율 높음", "출산율 낮음"],

      dimension: 0,
      inRange: {
        color: ["#B372D3", "#8777FB", "#FC6AA2", "#FCA76A"],
      },
    },

    series: [
      {
        name: "출생데이터",
        type: "bar",
        data: [5, 20, 36, 13, 27, 60, 50, 90],
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "90%" }}
      // opts={{ renderer: "svg" }}
    />
  );
};

export { BarY };
