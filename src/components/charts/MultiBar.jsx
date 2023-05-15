import React from "react";
import ReactECharts from "echarts-for-react";

const MultiBar = () => {
  const option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ["Matcha Latte", 43.3, 85.8, 93.7],
        ["Milk Tea", 83.1, 73.4, 55.1],
        ["Cheese Cocoa", 86.4, 65.2, 82.5],
        ["Walnut Brownie", 72.4, 53.9, 39.1],
      ],
    },
    xAxis: { type: "category" },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
  };
  return <ReactECharts option={option} style={{ height: "90%" }} />;
};

export { MultiBar };
