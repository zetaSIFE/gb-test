import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { graphic } from "echarts";
import axios from "axios";

//************** */
// const barXData = {
//   title: '지역별 인구수',
//   data: {
//     value: [20, 50, 100, 150, 200, 250, 300, 350, 400]
//   }
// }
//************** */

const BarX = (props) => {
  // const downloadIcon = [
  //   // "path://M1.75 14C1.26875 14 0.856626 13.8285 0.513626 13.4855C0.170626 13.1425 -0.000581848 12.7307 1.48557e-06 12.25V9.625H1.75V12.25H12.25V9.625H14V12.25C14 12.7312 13.8285 13.1434 13.4855 13.4864C13.1425 13.8294 12.7307 14.0006 12.25 14H1.75ZM7 10.5L2.625 6.125L3.85 4.85625L6.125 7.13125V0H7.875V7.13125L10.15 4.85625L11.375 6.125L7 10.5Z"
  // ];
  // console.log(prop.barXData.data)

  // TODO API 작성 부분, 주석 해제
  /* ********************** START!  
  const [testData, setTestData] = useState({
    title: '',
    data: {
      xAxis: [],
      value: []
    }
  });
>>>>>>> 0358796b84ffcf046b2e0879dcfd90033274393d

  // useEffect(() => {
  //   axios.get(process.env.REACT_APP_SERVER_URL + "/portal/populationStat/getPopulationCountByArea.do")
  //     .then(res => {
  //       setTestData(res.data);
  //     })
  //     .catch(err => console.log(err))

  // }, [])

  const data = testData.data.value;
  const xAxis = testData.data.xAxis;
    ********************* END!  */

  const data = props.barXData.data.value;
  const title = props.barXData.title;
  const show = props.barXData.legend;
   
  

  const option = {
    title: {
      // text: testData.title, // // TODO : 주석 해제
      text: title,
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
          // assets\images\buttons\material-symbols_download.png
          // icon: '../../assets/images/buttons/download.svg',
          // iconStyle: {
          //   width: 31,
          //   height: 31,
          //    color: "#a01a1a",
          // },
        },
      },
    },
    grid: {
      top: "30%",
      height: "60%",
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    legend: {
      show: show,
      icon:'circle',
      data: ["전체", "도내", "도외"],
      selectedMode: "single",
      bottom: 0,
    },
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
      // data: xAxis, // TODO : 주석 해제
    },
    yAxis: {},

    series: [
      // props.barXData.series,
      {
        name: "전체",
        type: "bar",
         data: [20, 50, 100, 150, 200, 250, 300, 350, 400],
        // data: data,
        itemStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#8C93FF" },
            { offset: 0.5, color: "#656CE1" },
            { offset: 1, color: "#656CE1" },
          ]),
        },
        showBackground: true,
        backgroundStyle: {
          color: "#ECEEF5",
          shadowColor: "#ECEEF5",
          // shadowBlur: '1'
          shadowOffsetY: "-20",
        },
        barWidth: 30,
      },
      {
        name: "도내",
        type: "bar",
         data: [5, 20, 36, 13, 27, 60, 50, 90, 50],
        // data: data,
        itemStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#8C93FF" },
            { offset: 0.5, color: "#656CE1" },
            { offset: 1, color: "#656CE1" },
          ]),
        },
        showBackground: true,
        backgroundStyle: {
          color: "#ECEEF5",
          shadowColor: "#ECEEF5",
          // shadowBlur: '1'
          shadowOffsetY: "-20",
        },
        barWidth: 30,
      },
      {
        name: "도외",
        type: "bar",
         data: [20, 50, 100, 150, 200, 250, 300, 350, 400],
        // data: data,
        itemStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#8C93FF" },
            { offset: 0.5, color: "#656CE1" },
            { offset: 1, color: "#656CE1" },
          ]),
        },
        showBackground: true,
        backgroundStyle: {
          color: "#ECEEF5",
          shadowColor: "#ECEEF5",
          // shadowBlur: '1'
          shadowOffsetY: "-20",
        },
        barWidth: 30,
      },
      // {
      //   name: "기본",
      //   type: "bar",
      //   // data: [20, 50, 100, 150, 200, 250, 300, 350, 400],
      //   data: data,
      //   itemStyle: {
      //     color: new graphic.LinearGradient(0, 0, 0, 1, [
      //       { offset: 0, color: "#8C93FF" },
      //       { offset: 0.5, color: "#656CE1" },
      //       { offset: 1, color: "#656CE1" },
      //     ]),
      //   },
      //   showBackground: true,
      //   backgroundStyle: {
      //     color: "#ECEEF5",
      //     shadowColor: "#ECEEF5",
      //     // shadowBlur: '1'
      //     shadowOffsetY: "-20",
      //   },
      //   barWidth: 30,
      // },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "95%", width: "95%" }}
      // opts={{ renderer: "svg" }}
    />
  );
};

export { BarX };
