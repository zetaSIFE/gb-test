import React, { useEffect } from 'react';
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import EChartsLayer from "ol-echarts";


const Ol_Echar_pie = () => {

  useEffect(() => {
    var map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: "pieMap", //id여야
      view: new View({
        projection: 'EPSG:4326',
        center: [128.505599, 36.576032],
        zoom: 9
      })
    });

    var echartslayer = new EChartsLayer(
      {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "right",
          data: ["data1", "data2", "data3", "data4", "data5"]
          // data: ["data1", "data2", "data3", "data4", "data5"]
        },
        series: [
          {
            name: "ex) 인구 조사",
            type: "pie",
            radius: "30",
            coordinates: [128.505599, 36.576032],
            data: [
              { value: 335, name: "data1" },
              { value: 310, name: "data2" },
              { value: 234, name: "data3" },
              { value: 135, name: "data4" },
              { value: 1548, name: "data5" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          },
          {
            name: "ex) 인구 조사",
            type: "pie",
            radius: "30",
            coordinates: [129.365933, 36.032786],
            data: [
              { value: 335, name: "data1" },
              { value: 310, name: "data2" },
              { value: 234, name: "data3" },
              { value: 135, name: "data4" },
              { value: 1548, name: "data5" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          },
          {
            name: "ex) 인구 조사",
            type: "pie",
            radius: "30",
            coordinates: [129.412832, 36.991726],
            data: [
              { value: 335, name: "data1" },
              { value: 310, name: "data2" },
              { value: 234, name: "data3" },
              { value: 135, name: "data4" },
              { value: 1548, name: "data5" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      },
      {
        stopEvent: false,
        insertFirst: true,
        polyfillEvents: false
      }
    );
    
    echartslayer.appendTo(map);
  }, []);

  return <div id="pieMap" style={{height: "600px"}}></div>;
};

export default Ol_Echar_pie;





