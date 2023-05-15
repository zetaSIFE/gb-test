import React from "react";
import ReactECharts from "echarts-for-react";
import { graphic } from "echarts";

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
      // top: "18%",
      left: "0%",
      right: "0%",
      bottom: "0%",
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
    yAxis: {
      
    },

    series: [
      {
        name: "지역별인구수",
        type: "bar",
        data: [20, 50, 100, 150, 200, 250, 300, 350, 400],
        itemStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#8C93FF" },
            { offset: 0.5, color: "#656CE1" },
            { offset: 1, color: "#656CE1" },
          ]),
        },
        showBackground: true,
        backgroundStyle: {
          color: '#ECEEF5',
          shadowColor: '#ECEEF5',
          // shadowBlur: '1'
          shadowOffsetY: '-20'

        },
        barWidth: 30
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

export { BarX };
