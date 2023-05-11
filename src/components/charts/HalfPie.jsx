import React from "react";
import ReactECharts from "echarts-for-react";
import { graphic } from 'echarts'

const HalfPie = () => {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center',
      // doesn't perfectly work with our tricks, disable it
      selectedMode: false
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '70%'],
        // adjust the start angle
        startAngle: 180,
        label: {
          show: false,
          formatter(param) {
            // correct the percentage
            return param.name + ' (' + param.percent * 2 + '%)';
          }
        },
        data: [
          { value: 1048, name: '포항시' },
          { value: 735, name: '경주시' },
          { value: 580, name: '김천시' },
          { value: 484, name: '안동시' },
          { value: 300, name: '구미시' },
          {
            // make an record to fill the bottom 50%
            value: 1048 + 735 + 580 + 484 + 300,
            itemStyle: {
              // stop the chart from rendering this piece
              color: 'none',
              decal: {
                symbol: 'none'
              }
            },
            label: {
              show: false
            }
          }
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

export { HalfPie };
