import React from "react";
import ReactECharts from "echarts-for-react";
import { graphic } from "echarts";

//************** */
// const barYData = {
//   title: '지역별 출생아수',
//   data: {
//     value: [5, 20, 36, 13, 27, 60, 50, 90, 50],
//     yAxis: ["안동","문경","예천","김천","성주","경주","영덕","포항","울진"],
//   }
// }
//************** */

const BarY = (props) => {
  const data = props.barYData.data.value;
  const option = {
    title: {
      // text: "지역별 출생아수",
      text: props.barYData.title,
      textStyle: {
        fontSize: 16,
      },
    },
    tooltip: {},
    toolbox: {
      feature: {
        // dataView: { readOnly: false },
        saveAsImage: {
          title: "이미지 다운로드",
        },
      },
    },
    grid: {
      top: "18%",
      left: "0%",
      right: "0%",
      bottom: "0%",
      width: "95%",
      height: "70%",
      containLabel: true,
    },
    // 범례
    // legend: {
    //   // data: ["출생데이터"],
    //   bottom: 0,
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
      // data: barYData.data.yAxis
    },
    visualMap: {
      orient: "horizontal",
      // top: "10%",
      bottom: 0,
      left: "right",
      min: 0,
      max: 100,
      text: ["출산율 높음", "출산율 낮음"],
      itemWidth: 8,
      itemHeight: 80,
      dimension: 0,
      inRange: {
        color: ["#B372D3", "#8777FB", "#FC6AA2", "#FCA76A"],
      },
    },

    series: [
      {
        name: "출생데이터",
        type: "bar",
        data: [5, 20, 36, 13, 27, 60, 50, 90, 45],
        // data: data,
        // data: barYData.data.value
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

export { BarY };
