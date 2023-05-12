import React from "react";
import ReactECharts from "echarts-for-react";
import { graphic } from 'echarts'

const Doughnut = () => {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: '포항시',
            itemStyle: {
              // color: "rgba(63, 119, 15, 1)"
              color: new graphic.RadialGradient(0.4, 0.3, 1, [
                { offset: 0, color: 'rgb(129, 227, 238)' },
                { offset: 1, color: 'rgb(25, 183, 207)' }
              ])
              // color: new graphic.LinearGradient(0, 0, 0, 1, [
              //   { offset: 0, color: '#83bff6' },
              //   { offset: 0.5, color: '#188df0' },
              //   { offset: 1, color: '#188df0' }
              // ])
            }
          },
          { value: 735, name: '경주시' },
          { value: 580, name: '김천시' },
          { value: 484, name: '안동시' },
          { value: 300, name: '구미시' },
        ]
      }
    ]
  };
  return (
    <ReactECharts
      option={option}
      style={{ height: "100%" }}
      // opts={{ renderer: "svg" }}
    />
  );
};

export { Doughnut };
