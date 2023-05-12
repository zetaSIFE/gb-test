import React from "react";
import ReactECharts from "echarts-for-react";
import { graphic } from "echarts";

const HalfPie = () => {
  const option = {
    title: {
      text: "귀농귀촌 통계",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      icon: "circle",
      bottom: "5%",
      left: "center",
      // doesn't perfectly work with our tricks, disable it
      selectedMode: false,
    },

    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        center: ["50%", "70%"],
        // adjust the start angle
        startAngle: 180,
        label: {
          show: false,
          formatter(param) {
            // correct the percentage
            return param.name + " (" + param.percent * 2 + "%)";
          },
        },
        data: [
          {
            value: 1048,
            name: "포항시",
            itemStyle: {
              color: new graphic.RadialGradient(0.4, 0.3, 1, [
                { offset: 0, color: "#4791DE" },
                { offset: 1, color: "#2B7ACF" },
              ]),
            },
          },
          {
            value: 735,
            name: "경주시",
            itemStyle: {
              color: new graphic.RadialGradient(0.4, 0.3, 1, [
                { offset: 0, color: "#D575E6" },
                { offset: 1, color: "#986DEB" },
              ]),
            },
          },
          {
            value: 580,
            name: "김천시",
            itemStyle: {
              color: new graphic.RadialGradient(0.4, 0.3, 1, [
                { offset: 0, color: "#FFFBA7" },
                { offset: 1, color: "#E4E079" },
              ]),
            },
          },
          {
            value: 484,
            name: "안동시",
            itemStyle: {
              color: new graphic.RadialGradient(0.4, 0.3, 1, [
                { offset: 0, color: "#F57A78" },
                { offset: 1, color: "#FA689E" },
              ]),
            },
          },
          {
            value: 300,
            name: "구미시",
            itemStyle: {
              color: new graphic.RadialGradient(0.4, 0.3, 1, [
                { offset: 0, color: "#51C8A9" },
                { offset: 1, color: "#3ABDC0" },
              ]),
            },
          },
          {
            // make an record to fill the bottom 50%
            value: 1048 + 735 + 580 + 484 + 300,
            itemStyle: {
              // stop the chart from rendering this piece
              color: "none",
              decal: {
                symbol: "none",
              },
            },
            label: {
              show: false,
            },
          },
        ],
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

export { HalfPie };
