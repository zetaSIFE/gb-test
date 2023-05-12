import React from "react";
import ReactECharts from "echarts-for-react";
import { color, graphic } from 'echarts'

const Doughnut = () => {
  const option = {
    title: {
      text: '세대원 별 세대수'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      icon: 'circle',
      bottom: '5%',
      right: 'right',
      
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['25%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'left'
        },
        emphasis: {
          // label: {
          //   show: false,
          //   fontSize: 5,
          //   fontWeight: 'bold'
          // }
        },
        labelLine: {
          show: true
        },
        data: [
          { value: 1048, name: '5인가구',
            itemStyle: {
              // color: "rgba(63, 119, 15, 1)"
              color: new graphic.RadialGradient(0.4, 0.3, 1, [
                { offset: 0, color: '#4791DE' },
                { offset: 1, color: '#2B7ACF' }
              ])
              // color: new graphic.LinearGradient(0, 0, 0, 1, [
              //   { offset: 0, color: '#83bff6' },
              //   { offset: 0.5, color: '#188df0' },
              //   { offset: 1, color: '#188df0' }
              // ])
            }
          },
          { value: 580, name: '4인가구',
          itemStyle: {
            color: new graphic.RadialGradient(0.4,0.3,1, [
              { offset: 0, color: '#D575E6' },
              { offset: 1, color: '#986DEB' }
            ])
          }
        },
        { value: 450, name: '3인가구',
        itemStyle: {
          color: new graphic.RadialGradient(0.4,0.3,1, [
            { offset: 0, color: '#FFFBA7' },
            { offset: 1, color: '#E4E079' }
          ])
        }
      },
      { value: 350, name: '2인가구',
      itemStyle: {
        color: new graphic.RadialGradient(0.4,0.3,1, [
          { offset: 0, color: '#F57A78' },
          { offset: 1, color: '#FA689E' }
        ])
      }
    },
    { value: 465, name: '1인가구',
    itemStyle: {
      color: new graphic.RadialGradient(0.4,0.3,1, [
        { offset: 0, color: '#51C8A9' },
        { offset: 1, color: '#3ABDC0' }
      ])
    }
  },
        ]
      }
    ]
  };
  return (
    <ReactECharts
      option={option}
      style={{height: '100%', width:'100%', }}
      // opts={{ renderer: "svg" }}
    />
  );
};

export { Doughnut };
