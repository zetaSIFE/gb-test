import React, { useEffect, useState } from "react";
import ECharts, { EChartsReactProps } from "echarts-for-react";

const Line = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
    response.json()
  );
  // .then(json => console.log(json))

  const [options, setOptions] = useState({
    title: {
      text: "경상북도 전입전출 추이",
    },
    xAxis: {
      type: "category",
      data: ["일", "이", "삼", "사", "오", "육", "칠"],
    },
    yAxis: {
      type: "value",
    },
    legend: {
      show: true,
      data: ["전국", " test"],
    },
    grid: {
      top: "25%",
      height: "60%",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },

    ],
  });

  return (
    <>
      <ECharts
        option={options}
        style={{
          height: "95%",
        }}
        // opts={{ renderer: 'svg', width: 'auto', height: '400px' }}
      />
    </>
  );
};
export { Line };
