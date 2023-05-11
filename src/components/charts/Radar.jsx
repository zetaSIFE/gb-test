import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

const Radar = (prop) => {
  const option = {
    title: {
      text: '제목'
    },
    tooltip: {},
    legend: {
      data: ['응규', '형택이']
    },
    radar: {
      // shape: 'circle', 
      indicator: [
          { name: '체력', max: 6500},
          { name: '공격력', max: 16000},
          { name: '조직력', max: 30000},
          { name: '수비력', max: 38000},
          { name: '선수층', max: 52000},
          { name: '조직력', max: 25000}
      ]
    },
    series: [{
      name: '응규랑 형택이',
      type: 'radar',
      // areaStyle: {normal: {}},
      data : [
        {
          value : [4300, 10000, 28000, 35000, 50000, 19000],
          name : '응규'
        },
          {
          value : [5000, 14000, 20000, 31000, 42000, 21000],
          name : '형택이'
        }
      ]
    }]
  };

  let timer;

  useEffect(() => {
    return () => clearTimeout(timer);
  });

  const loadingOption = {
    text: 'loading..',
    color: '#4413c2',
    textColor: '#270240',
    maskColor: 'rgba(194, 88, 86, 0.3)',
    zlevel: 0
  };

  function onChartReady(echarts) {
    timer = setTimeout(function() {
      echarts.hideLoading();
    }, 1000);
  }

  return <ReactECharts
    option={option}
    style={{width: prop.width, height: prop.height}}
    onChartReady={onChartReady}
    loadingOption={loadingOption}
    showLoading={true}
  />;
};

export {Radar};