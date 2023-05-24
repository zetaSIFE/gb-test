import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { image } from "d3";

// import cloneDeep from 'lodash.clonedeep';

const Dynamic = () => {
  const DEFAULT_OPTION = {
    // title: {
    //   text: "시간대별 유입(유출) 인구 추이",
    //   textStyle: {
    //     fontSize: 15,
    //   },
    // },
    tooltip: {
      trigger: "axis",
    },
    // legend: {
    //   show: true,
    //   icon: "circle",
    //   data: ["유입", "유출"],
    //   selectedMode: "single",
    //   bottom: 0,
    // },
    // toolbox: {
    //   show: true,
    //   feature: {
    //     // dataView: { readOnly: false },
    //     // restore: {},
    //     saveAsImage: {
    //       title: '이미지 다운로드',
    //       show: true,
    //       // type: "png",
    //       // // // icon:'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
    //       // icon: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
    //       // iconStyle: {
    //       //   borderColor: "rgba(47, 83, 241, 1)",
    //       //   borderWidth: 2,
    //       // }
    //     },
    //     //https://echarts.apache.org/en/option.html#toolbox.feature.saveAsImage
    //   },
    // },
    //SAMPLE
  //   toolbox: {
  //     feature: {
  //         myTool1: {
  //             show: true,
  //             title: 'custom extension method 1',
  //             icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
  //             onclick: function (){
  //                 alert('myToolHandler1')
  //             }
  //         },
  //         myTool2: {
  //             show: true,
  //             title: 'custom extension method',
  //             icon: 'image://https://echarts.apache.org/en/images/favicon.png',
  //             onclick: function (){
  //                 alert('myToolHandler2')
  //             }
  //         }
  //     }
  // },
    grid: {
      top: 60,
      left: 30,
      right: 60,
      bottom: 30,
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100,
    },
    visualMap: {
      show: false,
      min: 0,
      max: 1000,
      color: [
        "#BE002F",
        "#F20C00",
        "#F00056",
        "#FF2D51",
        "#FF2121",
        "#FF4C00",
        "#FF7500",
        "#FF8936",
        "#FFA400",
        "#F0C239",
        "#FFF143",
        "#FAFF72",
        "#C9DD22",
        "#AFDD22",
        "#9ED900",
        "#00E500",
        "#0EB83A",
        "#0AA344",
        "#0C8918",
        "#057748",
        "#177CB0",
      ],
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: (function () {
          let now = new Date();
          let res = [];
          let len = 50;
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ""));
            now = new Date(now - 2000);
          }
          return res;
        })(),
      },
      {
        type: "category",
        boundaryGap: true,
        data: (function () {
          let res = [];
          let len = 50;
          while (len--) {
            res.push(50 - len + 1);
          }
          return res;
        })(),
      },
    ],
    yAxis: [
      {
        type: "value",
        scale: true,
        name: "테스트",
        max: 20,
        min: 0,
        boundaryGap: [0.2, 0.2],
      },
      {
        type: "value",
        scale: true,
        name: "테스트",
        max: 1200,
        min: 0,
        boundaryGap: [0.2, 0.2],
      },
    ],
    series: [
      {
        name: "预购队列",
        type: "bar",
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            barBorderRadius: 4,
          },
        },
        animationEasing: "elasticOut",
        animationDelay: function (idx) {
          return idx * 10;
        },
        animationDelayUpdate: function (idx) {
          return idx * 10;
        },
        data: (function () {
          let res = [];
          let len = 50;
          while (len--) {
            res.push(Math.round(Math.random() * 1000));
          }
          return res;
        })(),
      },
      {
        name: "最新成交价",
        type: "line",
        data: (function () {
          let res = [];
          let len = 0;
          while (len < 50) {
            res.push((Math.random() * 10 + 5).toFixed(1) - 0);
            len++;
          }
          return res;
        })(),
      },
    ],
  };

  // let count;

  const [option, setOption] = useState(DEFAULT_OPTION);

  // function fetchNewData() {
  //   const axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
  //   console.log(option)
  //   const newOption = option;
  //   // const newOption = cloneDeep(option); // immutable
  //   newOption.title.text = 'Hello Echarts-for-react.' + new Date().getSeconds();
  //   const data0 = newOption.series[0].data;
  //   const data1 = newOption.series[1].data;
  //   data0.shift();
  //   data0.push(Math.round(Math.random() * 1000));
  //   data1.shift();
  //   data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

  //   newOption.xAxis[0].data.shift();
  //   newOption.xAxis[0].data.push(axisData);
  //   newOption.xAxis[1].data.shift();
  //   newOption.xAxis[1].data.push(count++);

  //   setOption(newOption);
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     fetchNewData();
  //   }, 1000);

  //   return () => clearInterval(timer);
  // });

  return <ReactECharts option={option} style={{ height: "90%" }} />;
};

export {Dynamic};
