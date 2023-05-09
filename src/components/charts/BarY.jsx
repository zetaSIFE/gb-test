import React from "react";
import ReactECharts from "echarts-for-react";

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
      left: "3%",
      right: "4%",
      bottom: "3%",
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
    series: [
      {
        name: "출생데이터",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20, 8, 15],
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "100%" }}
      opts={{ renderer: "svg" }}
    />
  );
};

export { BarY };
