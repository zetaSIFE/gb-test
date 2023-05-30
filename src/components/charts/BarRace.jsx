import React, { useRef, useEffect } from 'react';
import ReactECharts from "echarts-for-react";
import * as echarts from 'echarts';
import sample from 'assets/sample.json'
export const BarRace = () => {
  const updateFrequency = 2000;
  const dimension = 0;
  const countryColors = {
    Australia: '#00008b',
    Canada: '#f00',
    China: '#ffde00',
    Cuba: '#002a8f',
    Finland: '#003580',
    France: '#ed2939',
    Germany: '#000',
    Iceland: '#003897',
    India: '#f93',
    Japan: '#bc002d',
    'North Korea': '#024fa2',
    'South Korea': '#000',
    'New Zealand': '#00247d',
    Norway: '#ef2b2d',
    Poland: '#dc143c',
    Russia: '#d52b1e',
    Turkey: '#e30a17',
    'United Kingdom': '#00247d',
    'United States': '#b22234'
  };


  const chartDom = useRef(null);
  useEffect(() => {

    const myChart = echarts.init(chartDom.current);
    const fetchFlagsAndData = async () => {
    
      const flagsResponse = await fetch(
        'https://fastly.jsdelivr.net/npm/emoji-flags@1.3.0/data.json'
      );
      const res0 = await flagsResponse.json();
      return { res0 };
    };
    // res0, res1
    const res1 = sample;
  
    fetchFlagsAndData().then(({  res0 }) => {
      
      const flags = res0;
      const data = res1;
      // const data = res1[0];
      console.log(data);
      const years = [];
      for (let i = 0; i < data.length; ++i) {
        if (years.length === 0 || years[years.length - 1] !== data[i][4]) {
          years.push(data[i][4]);
        }
      }
      function getFlag(countryName) {
        // if (!countryName) {
        //   return '';
        // }
        // return (
        //   flags.find(function (item) {
        //     return item.name === countryName;
        //   }) || {}
        // ).emoji;
      
        if (countryName === 'Country') {
          return '';
        }
        return (
          flags.find(function (item) {
            return item.name === countryName;
          }) || {}
        ).emoji;
      }


      let startIndex = 10;
      let startYear = years[startIndex];
      const option = {
        timeline: {
          axisType: 'time',
          // realtime: false,
          // loop: false,
          autoPlay: true,
          // currentIndex: 2,
          playInterval: 1000,
          // controlStyle: {
          //     position: 'left'
          // },
          // data: [
          //   '2002-01-01',
          //   '2003-01-01',
          //   '2004-01-01',
          //   {
          //     value: '2005-01-01',
          //     tooltip: {
          //       formatter: '{b} GDP达到一个高度'
          //     },
          //     symbol: 'diamond',
          //     symbolSize: 16
          //   },
          //   '2006-01-01',
          //   '2007-01-01',
          //   '2008-01-01',
          //   '2009-01-01',
          //   '2010-01-01',
          //   {
          //     value: '2011-01-01',
          //     tooltip: {
          //       formatter: function (params) {
          //         return params.name + 'GDP达到又一个高度';
          //       }
          //     },
          //     symbol: 'diamond',
          //     symbolSize: 18
          //   }
          // ],
          label: {
            formatter: function (s) {
              return new Date(s).getFullYear();
            }
          }
        },
        calculable: true,
        grid: {
          top: 10,
          bottom: 30,
          left: 150,
          right: 80
        },
        xAxis: {
          max: 'dataMax',
          axisLabel: {
            formatter: function (n) {
              return Math.round(n) + '';
            }
          }
        },
        dataset: {
          source: data.slice(1).filter(function (d) {
            return d[4] === startYear;
          })
        },
        yAxis: {
          type: 'category',
          inverse: true,
          max: 10,
          axisLabel: {
            show: true,
            fontSize: 14,
            formatter: function (value) {
              return value + '{flag|' + getFlag(value) + '}';
            },
            rich: {
              flag: {
                fontSize: 25,
                padding: 5
              }
            }
          },
          animationDuration: 300,
          animationDurationUpdate: 300
        },
        series: [
          {
            realtimeSort: true, //실시간 정렬을 활성화
            seriesLayoutBy: 'column',
            type: 'bar',
            itemStyle: {
              color: function (param) {
                return countryColors[param.value[3]] || '#5470c6';
              }
            },
            encode: {
              x: dimension,
              y: 3
            },
            label: {
              show: true,
              precision: 1,
              position: 'right',
              valueAnimation: true,
              fontFamily: 'monospace'
            }
          }
        ],
        // Disable init animation.
        animationDuration: 0,
        animationDurationUpdate: updateFrequency,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
        graphic: {
          elements: [
            {
              type: 'text',
              right: 160,
              bottom: 60,
              style: {
                text: startYear,
                font: 'bolder 80px monospace',
                fill: 'rgba(100, 100, 100, 0.25)'
              },
              z: 100
            }
          ]
        }
      };
      // // console.log(option);
      myChart.setOption(option);
      for (let i = startIndex; i < years.length - 1; ++i) {
        (function (i) {
          setTimeout(function () {
            updateYear(years[i + 1]);
          }, (i - startIndex) * updateFrequency);
        })(i);
      }
      function updateYear(year) {
        let source = data.slice(1).filter(function (d) {
          return d[4] === year;
        });
        option.series[0].data = source;
        option.graphic.elements[0].style.text = year;
        myChart.setOption(option);
      }
    }).catch(e => {
      console.log(e);
    });
    // const data = [];
    // for (let i = 0; i < 5; ++i) {
    //   data.push(Math.round(Math.random() * 200));
    // }

  // function run() {
  //   var data = option.series[0].data;
  //   for (var i = 0; i < data.length; ++i) {
  //     if (Math.random() > 0.9) {
  //       data[i] += Math.round(Math.random() * 2000);
  //     } else {
  //       data[i] += Math.round(Math.random() * 200);
  //     }
  //   }
  //   myChart.setOption(option);
  // }
  
  // setTimeout(function() {
  //   run();
  // }, 0);
  // // // 일정 시간 기다린 후 실행
  // setInterval(function() {
  //   run();
  // }, 3000);
  // //주기적
}, []);

  


  // return <div>BarRace</div>;
  // return <ReactECharts id="barRace" option={option} />;
  return (
    <div ref={chartDom} style={{ width: '100%', height: '90%' }}></div>
);
};
