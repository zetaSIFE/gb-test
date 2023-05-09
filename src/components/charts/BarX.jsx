import React from "react";
import ReactECharts from "echarts-for-react";

const BarX = () => {
  const option = {
    title: {
      text: "지역별 인구수",
    },
    tooltip: {},
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
    // 범례
    // legend: {
    //   data: ["지역별인구수"],
    // },
    xAxis: {
      data: [
        "안동",
        "문경",
        "예천",
        "김천",
        "성주",
        "경주",
        "영덕",
        "포항",
        "울진",
      ],
    },
    yAxis: {},
    series: [
      {
        name: "지역별인구수",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20, 15, 8, 30],
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "100%" }}
      // opts={{ renderer: "svg" }}
    />
  );
};

export { BarX };
