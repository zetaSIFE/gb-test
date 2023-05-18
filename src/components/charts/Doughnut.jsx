import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { graphic } from "echarts";
import axios from 'axios';

const Doughnut = () => {

  const colors = [
    {
      color: new graphic.RadialGradient(0.4, 0.3, 1, [
        { offset: 0, color: "#4791DE" },
        { offset: 1, color: "#2B7ACF" },
      ]),
    },
    {
      color: new graphic.RadialGradient(0.4, 0.3, 1, [
        { offset: 0, color: "#D575E6" },
        { offset: 1, color: "#986DEB" },
      ]),
    },
    {
      color: new graphic.RadialGradient(0.4, 0.3, 1, [
        { offset: 0, color: "#FFFBA7" },
        { offset: 1, color: "#E4E079" },
      ]),
    },
    {
      color: new graphic.RadialGradient(0.4, 0.3, 1, [
        { offset: 0, color: "#F57A78" },
        { offset: 1, color: "#FA689E" },
      ]),
    },
    {
      color: new graphic.RadialGradient(0.4, 0.3, 1, [
        { offset: 0, color: "#51C8A9" },
        { offset: 1, color: "#3ABDC0" },
      ]),
    }
  ]
  
  const [testData, setTestData] = useState({
    title: '',
    data: {
      name: [],
      value: []
    }
  });

  useEffect(() => {
    axios.get(process.env.REACT_APP_SERVER_URL + "/portal/populationStat/getHouseHoldCountByFamilyMemberCount.do")
      .then(res => {
        setTestData(res.data);
      })
      .catch(err => console.log(err))

  }, [])

  const option = {
    title: {
      // text: "세대원 별 세대수",
      text: testData.title,
      textStyle: {
        fontSize: 16,
      },
      left: "left",
    },
    tooltip: {
      trigger: "item",
      left: true,

      // formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      icon: "circle",
      bottom: "1%",
      right: "-1%",
    },
    series: [
      {
        name: "data",
        type: "pie",
        radius: ["25%", "60%"],
        center: ["45%", "55%"],
        // avoidLabelOverlap: false,
        label: {
          show: true,
          position: "outside",
        },

        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        labelLine: {
          show: true,
        },
        data: [
          {
            // value: 1048,
            // name: "5인가구",
            value: testData.data.value[0],
            name: testData.data.name[0],
            itemStyle: colors[0],
          },
          {
            // value: 580,
            // name: "4인가구",
            value: testData.data.value[1],
            name: testData.data.name[1],
            itemStyle: colors[1],
          },
          {
            // value: 450,
            // name: "3인가구",
            value: testData.data.value[2],
            name: testData.data.name[2],
            itemStyle: colors[2],
          },
          {
            // value: 350,
            // name: "2인가구",
            value: testData.data.value[3],
            name: testData.data.name[3],
            itemStyle: colors[3],
          },
          {
            // value: 465,
            // name: "1인가구",
            value: testData.data.value[4],
            name: testData.data.name[4],
            itemStyle: colors[4],
          },
        ],
      },
    ],
  };
  return (
    <ReactECharts
      option={option}
      style={{ height: "90%", width: "90%" }}
      // opts={{ renderer: "svg" }}
    />
  );
};

export { Doughnut };
