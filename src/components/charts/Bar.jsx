import React from 'react';
import ReactECharts from 'echarts-for-react';

const Bar = () => {
  const option = {
    title: {
      text: '제목'
    },
    tooltip: {},
    legend: {
      data:['홈런개수']
    },
    xAxis: {
      data: ['두산', '삼성', '엘지', '케티', '한화', '롯데']
    },
    yAxis: {},
    series: [{
      name: '홈런개수',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };

  return <ReactECharts
    option={option}
    style={{ height: 400, borderBottom:"3px solid #000" }}
    opts={{ renderer: 'svg' }}
  />;
};

export default Bar;