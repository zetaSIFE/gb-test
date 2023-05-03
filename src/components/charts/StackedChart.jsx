import React from 'react';
import ReactECharts from 'echarts-for-react';

const Stacked = () => {
  const option = {
    title: {
      text: '제목'
    },
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data:['data1','data2','data3']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        data : ['x1','x2','x3','x4','x5','x6','x7']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'data1',
        type:'line',
        stack: 'Total',
        // areaStyle: {normal: {}},
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'data2',
        type:'line',
        stack: 'Total',
        // areaStyle: {normal: {}},
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'data3',
        type:'line',
        stack: 'Total',
        // areaStyle: {normal: {}},
        data:[150, 232, 201, 154, 190, 330, 410]
      }
    ]
  };

  //TODO: 는 아니고 areaStyle: {normal: {}}로 라인 내부 색상 가능

  return <ReactECharts
    option={option}
    style={{ height: 400, borderBottom: "3px solid #000" }}
  />;
};

export default Stacked;