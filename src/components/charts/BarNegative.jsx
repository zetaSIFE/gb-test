import React from "react";
import ReactECharts from "echarts-for-react";
import { graphic } from "echarts";

const BarNegative = () => {
  const ageStep = [
    "100",
    "90",
    "80",
    "70",
    "60",
    "50",
    "40",
    "30",
    "20",
    "10",
    "0",
  ];
  const option = {
    title: {
      text: "인구 피라미드",
    },
    tooltip: {},
    // legend: {
    //   data: ['Males', 'Females']
    // },
    xAxis: [
      {
        //인구수
        type: "value",
        // type: 'value',
        data: [0, 10, 20, 30, 40, 50, 60],
      },
    ],
    yAxis: [
      {
        //연령
        type: "category",
        axisTick: {
          show: false,
        },
        data: ageStep.reverse(),
      },
    ],
    series: [
      {
        name: "Females",
        type: "bar",
        itemStyle: {
          color: new graphic.RadialGradient(0.4, 0.3, 1, [
            { offset: 0, color: "#F75B68" },
            { offset: 1, color: "#FF717D" },
          ]),
        },
        stack: "Total",
        // label: {
        //   show: true
        // },
        emphasis: {
          focus: "series",
        },
        data: [
          0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
          4.5, 3.9, 3.5, 3,
        ],
      },
      {
        name: "Males",
        type: "bar",
        stack: "Total",
        itemStyle: {
          color: new graphic.RadialGradient(0.4, 0.3, 1, [
            { offset: 0, color: "#627FFF" },
            { offset: 1, color: "#2B7ACF" },
          ]),
        },
        // label: {
        //   show: true,
        //   // position: 'left'
        // },
        emphasis: {
          focus: "series",
        },
        data: [
          -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22,
          -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
        ],
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

export { BarNegative };
