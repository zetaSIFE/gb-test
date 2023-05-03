import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import gb from '../data/gbmap_topo.json';
import { feature } from 'topojson-client';

const geoData = feature(gb, gb.objects.gbmap);

const data = geoData.features.map(function(obj){
  const rObj =  obj.properties;
  return rObj;
})

// echarts.registerMap('USA', geoData, {
  
//   Alaska: {     
//     left: -149,
//     top: 49,
//     width: 23
//   },
//   Hawaii: {
//     left: -141,
//     top: 28,
//     width: 5
//   },
//   'Puerto Rico': {     
//     left: -76,
//     top: 20,
//     width: 2
//   }
// });

const mapOption = {
  title: {
    text: 'Echart로 경북지도 만들어봤다.',
    subtext: '여기 링크 설정도 가능',
    sublink:
      'https://gb.go.kr/Main/open_contents/section/data/index.html'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br/>{c}'
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {}
    }
  },
  visualMap: {
    // 지금 지역코드 기준으로 됨
    min: 47100,
    max: 47999,
    text: ['High', 'Low'],
    realtime: false,
    calculable: true,
    inRange: {
      color: ['#b0cde16b', '#004374'],
      opacity: .2
    }
  },
  series: [
    {
      id: 'population',
      type: 'map',
      // roam: true,   ---> zooming or translating
      // zoom: 2,
      map: 'USA',
      animationDurationUpdate: 1000,
      universalTransition: true,
      data: data,
      label: {
        show: true,
        fontSize: 10,
      },
    }
  ]
};


export default function E_map() {    

  return (
    <>
      <ReactEcharts option={mapOption} style={{ width: "80vw", height: "80vh", borderBottom :"3px solid #000"}} />      
    </>
  );
};