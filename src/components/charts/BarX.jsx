import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { graphic } from "echarts";
import axios from 'axios';

//************** */
// const barXData = {
//   title: '지역별 인구수',
//   data: {
//     value: [20, 50, 100, 150, 200, 250, 300, 350, 400]
//   }
// }
//************** */

const BarX = (props) => {
  let barXData = props.barXData;
  // const [testData, setTestData] = useState({
  //   title: '',
  //   data: {
  //     xAxis: [],
  //     value: []
  //   }
  // });

  // useEffect(() => {
  //   axios.get(process.env.REACT_APP_SERVER_URL + "/portal/populationStat/getPopulationCountByArea.do")
  //     .then(res => {
  //       setTestData(res.data);
  //     })
  //     .catch(err => console.log(err))

  // }, [])

  // const data = barXData.data.value;
  // const xAxis = barXData.data.xAxis;
  const option = {
    title: {
      text: barXData.title,
    },
    tooltip: {},
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        saveAsImage: {},
      },
    },
    grid: {
      // top: "18%",
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    // 범례
    // legend: {
    //   data: ["지역별인구수"],
    // },
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
      // data: xAxis
    },
    yAxis: {
      
    },

    series: [
      {
        name: "지역별인구수",
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
          color: '#ECEEF5',
          shadowColor: '#ECEEF5',
          // shadowBlur: '1'
          shadowOffsetY: '-20'

        },
        barWidth: 30
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "90%" }}
      // opts={{ renderer: "svg" }}
    />
  );
};

export { BarX };
