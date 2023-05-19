import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import { graphic } from "echarts";

//************** */
// Pie = {
//   title: '업종별 소비 비율',
//   legend: {
      //   orient: 'vertical',
      //   left: 'left',
      //   top: "20%",
      //   data: ['숙박','식당','병원', '서적','생활','생활문화']
      // },
      // series: {
      //   data: [
      //     { value: 335, name: "숙박" },
      //     { value: 310, name: "식당" },
      //     { value: 234, name: "병원" },
      //     { value: 534, name: "서적" },
      //     { value: 135, name: "생활" },
      //     { value: 548, name: "생활문화" },
      //   ]
      // }
// }
//************** */ 

const Pie = (prop) => {
  const { title, legend, series } = prop.pieData;
  
  const option = {
    title: {
      text: title,
      textStyle: {
        fontSize: 16,
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
      
    },
    toolbox: {
      feature: {
        saveAsImage: {
          title: "이미지 다운로드",
        }, 
      },
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: "20%",
      data: ['숙박','식당','병원', '서적','생활','생활문화']
    },
    grid: {
      width: "14%",
    },
    series: [
      {
        name: "아마 tooltip tit",
        type: "pie",
        radius: "55%",
        // width: '42%',
        center: ["50%", "60%"],
        data: [
          { value: 335, name: "숙박" },
          { value: 310, name: "식당" },
          { value: 234, name: "병원" },
          { value: 534, name: "서적" },
          { value: 135, name: "생활" },
          { value: 548, name: "생활문화" },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const [count, setCount] = useState(0);

  function onChartReady(echarts) {
    // console.log('echarts is ready', echarts);
  }

  function onChartClick(param, echarts) {
    // console.log(param, echarts);
    setCount(count + 1);
  }

  function onChartLegendselectchanged(param, echarts) {
    // console.log(param, echarts);
  }

  return (
    <>
      <ReactECharts
        option={option}
        style={{ height: "90%" }}
        onChartReady={onChartReady}
        onEvents={{
          click: onChartClick,
          legendselectchanged: onChartLegendselectchanged,
        }}
      />
      {/* <div>Click Count: {count}</div> */}
    </>
  );
};

export { Pie };
