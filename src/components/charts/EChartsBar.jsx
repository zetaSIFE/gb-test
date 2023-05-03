import React from 'react';
import { ECharts } from 'echarts';
import ReactECharts from 'echarts-for-react';

const EChartsBar = () => {
  const option = {
    title: {
      text: 'Simple Bar Chart',
    },
    tooltip: {},
    xAxis: {
      data: ['Category1', 'Category2', 'Category3', 'Category4', 'Category5'],
    },
    yAxis: {},
    series: [
      {
        name: 'Sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10],
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactECharts option={option} />
    </div>
  );
};

export default EChartsBar;
