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

echarts.registerMap('USA', geoData, {
  
  Alaska: {     
    left: -149,
    top: 49,
    width: 23
  },
  Hawaii: {
    left: -141,
    top: 28,
    width: 5
  },
  'Puerto Rico': {     
    left: -76,
    top: 20,
    width: 2
  }
});

const mapOption = {
  visualMap: {
    left: 'right',
    min: 500000,
    max: 38000000,    
    inRange: {      
      color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    },
    text: ['High', 'Low'],
    calculable: true
  },
  
  series: [
    {
      id: 'population',
      type: 'map',
      roam: true,
      map: 'USA',
      animationDurationUpdate: 1000,
      universalTransition: true,
      data: data
    }
  ]
};


export default function E_Choropleth() {    

  return (
    <>
      <ReactEcharts option={mapOption} style={{ width: "80vw", height: "80vh", borderBottom :"3px solid #000"}} />      
    </>
  );
};