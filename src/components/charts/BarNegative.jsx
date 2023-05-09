import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarNegative = () => {
  const ageStep = ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
    '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
    '0-4'
  ];
  const option = {
    title: {
      text: '제목'
    },
    tooltip: {},
    legend: {
      data: ['Males', 'Females']
    },
    xAxis: [
      { //인구수
        type: 'value',
        // type: 'value',
        data: [0, 10, 20, 30, 40]
      }
    ],
    yAxis: [
      { //연령
        type: 'category',
        axisTick: {
          show: false
        },
        data: ageStep.reverse()
      }
    ],
    series: [
      {
        name: 'Females',
        type: 'bar',
        itemStyle:{
          color: '#ff7c9e',
        },
        stack: 'Total',
        // label: {
        //   show: true
        // },
        emphasis: {
          focus: 'series'
        },
        data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
          3.9, 3.5, 3
        ]
      },
      {
        name: 'Males',
        type: 'bar',
        stack: 'Total',
        // label: {
        //   show: true,
        //   // position: 'left'
        // },
        emphasis: {
          focus: 'series'
        },
        data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
          -4.1, -4, -4.1, -3.4, -3.1, -2.8
        ]
      }
    ]
  };

  return <ReactECharts
    option={option}
    style={{ height: 400, borderBottom:"3px solid #000" }}
    opts={{ renderer: 'svg' }}
  />;
};

export {BarNegative};
