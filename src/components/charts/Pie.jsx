import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';

const Pie = (prop) => {
  const option = {
    title : {
      text: '제목',
      subtext: '부제목',
      x:'center'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['data1','data2','data3','data4','data5']
    },
    series : [
      {
      name: '아마 tooltip tit',
      type: 'pie',
      radius : '55%',
      center: ['50%', '60%'],
      data:[
        {value:335, name:'data1'},
        {value:310, name:'data2'},
        {value:234, name:'data3'},
        {value:135, name:'data4'},
        {value:1548, name:'data5'}
      ],
      itemStyle: {
        emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
      }
    ]
  };

  const [count, setCount] = useState(0);

  function onChartReady(echarts) {
    // console.log('echarts is ready', echarts);
  }

  function onChartClick(param, echarts) {
    // console.log(param, echarts);
    setCount(count + 1);
  };

  function onChartLegendselectchanged(param, echarts) {
    // console.log(param, echarts);
  };

  return (
    <>
      <ReactECharts
        option={option}
        style={{ width: prop.width, height: prop.height }}
        onChartReady={onChartReady}
        onEvents={{
          'click': onChartClick,
          'legendselectchanged': onChartLegendselectchanged
         }}
         />
         {/* <div>Click Count: {count}</div> */}
    </>
  );
};

export {Pie};