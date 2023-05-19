import React from "react";
import ReactECharts from "echarts-for-react";
import { graphic } from "echarts";

/**
 * const halfPieData = {
 *    title: "귀농귀촌 통계",
 *    
 *  }
 */
const HalfPie = (props) => {
  const option = {
    title: {
      text: props.halfPieData.title,
      textStyle: {
        fontSize: 16,
      },
    },
    tooltip: {
      trigger: "item",
    },
    toolbox: {
      feature: {
        saveAsImage: {
          title: "이미지 다운로드",
        },
      },
    },
    legend: props.halfPieData.legend, 
    grid: {
      width: "100%",
      top: "5%",
    },
    series: [
      {
        // name: "Access From",
        type: "pie",
        radius: props.halfPieData.radius,
        center: props.halfPieData.center,
        width: "100%",
        height: "100%",
        label: props.halfPieData.label,
        startAngle: 180,
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
          },
        ],
      },
    ],
  };
  return (
    <ReactECharts
      option={option}
      style={{ height: "90%", width: "95%" }}
      // opts={{ renderer: "svg" }}
    />
  );
};

export { HalfPie };
