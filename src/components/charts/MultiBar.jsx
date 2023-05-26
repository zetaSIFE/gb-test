import React from "react";
import ReactECharts from "echarts-for-react";

const MultiBar = () => {
  const option = {
    // title: {
    //   text: "시간대별 유입량",
    //   textStyle: {
    //     fontSize: 15,
    //   },
    // },
    grid: {
      top: "23%",
      left: "7%",
      width: "88%",
      height:"55%",
    },
    legend: {
      bottom: "0"
    },

  dataset: {
    source: [
      ['product', '2015', '2016', '2017'],
      ['안동', 43.3, 85.8, 93.7],
      ['상주', 83.1, 73.4, 55.1],
      ['포항', 86.4, 65.2, 82.5],
      ['경주', 72.4, 53.9, 39.1]
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  };
  return <ReactECharts option={option} style={{ height: "95%" }} />;
};

export { MultiBar };
