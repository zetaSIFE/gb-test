import React, { useEffect } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import EChartsLayer from "ol-echarts";

import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource, WMTS } from "ol/source";
import GeoJSON from "ol/format/GeoJSON";
import gb from "assets/maps/5179/test_5179.json";
import { transform } from "ol/proj";
import gb2 from "assets/maps/gbTopo.json";
import { feature } from "topojson-client";
import Fill from "ol/style/Fill.js";
import Style from "ol/style/Style.js";
import kor from "assets/maps/koreaTopo2.json"; //national
import { fromLonLat, get as getProjection } from "ol/proj";

const geoData = feature(gb2, gb2.objects.gbmap);

const BubbleMap = () => {
  var data = [
    { name: "center", value: 600 },
    { name: "test", value: 500 },
    { name: "test2", value: 404 },
    { name: "test3", value: 304 },
  ];
  var geoCoordMap = {
    center: [128.505599, 36.576032],
    test: [128.58319197573408, 36.04587916651266],
    test2: [129.5789245698766, 36.05175783820093],
    test3: [129.35955345398241, 35.86480684274281],
  };
  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
        });
      }
    }
    return res;
  };
  function renderItem(params, api) {
    var coords = [
      [116.7, 39.53],
      [103.73, 36.03],
      [112.91, 27.87],
      [120.65, 28.01],
      [119.57, 39.95],
    ];
    var points = [];
    for (var i = 0; i < coords.length; i++) {
      points.push(api.coord(coords[i]));
    }
    var color = api.visual("color");
    return {
      type: "polygon",
      // shape: {
      //   points: new graphic.clipPointsByRect(points, {
      //     x: params.coordSys.x,
      //     y: params.coordSys.y,
      //     width: params.coordSys.width,
      //     height: params.coordSys.height
      //   })
      // },
      style: api.style({
        fill: color,
        // stroke: echarts.color.lift(color)
      }),
    };
  }
  useEffect(() => {
    // var map = new Map({
    //   layers: [
    //     new VectorLayer({
    //       source: new OSM(),
    //     }),
    //   ],
    //   target: "pieMap", //id여야
    //   view: new View({
    //     projection: "EPSG:4326",
    //     center: [128.505599, 36.576032],
    //     zoom: 9,
    //   }),
    // });
    // const vectorLayer = new VectorLayer({
    //   source: new VectorSource({
    //     features: new GeoJSON().readFeatures(gb, {
    //       dataProjection: "EPSG:5179",
    //       featureProjection: "EPSG:5179",
    //     }),
    //   }),
    // });

    const style = new Style({
      fill: new Fill({
        color: "#d6b0b0",
      }),
    });

    const vectorLayer = new VectorLayer({
      background: "#69aee7",
      source: new VectorSource({
        // url: korgeoData,
        // url: "https://openlayers.org/data/vector/ecoregions.json",
        // format: new GeoJSON(),
        features: new GeoJSON().readFeatures(geoData, {
          dataProjection: "EPSG:4326",
          featureProjection: "EPSG:3857",
        }),
      }),
      style: function (feature) {
        const color = feature.get("COLOR") || "#eeeeee";
        style.getFill().setColor(color);
        return style;
      },
    });

    const map = new Map({
      layers: [vectorLayer],
      target: "pieMap",
      // view: new View({
      //   center: [0, 0],
      //   zoom: 1,
      // }),
      view: new View({
        projection: getProjection("EPSG:3857"),
        center: fromLonLat(
          [128.5055956, 36.5760207], //[경도, 위도] 값 설정 -> 경상북도청기준으로 설정
          getProjection("EPSG:3857")
        ),
        zoom: 8, // 초기 zoom 값 - 높을수록 확대
        maxZoom: 10,
        minZoom: 6,
      }),
    });
    var echartslayer = new EChartsLayer(
      {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        // toolbox: {
        //   feature: {
        //     dataView: { readOnly: false },
        //     saveAsImage: {},
        //   },
        // },
        // legend: {
        //   orient: "vertical",
        //   left: "right",
        //   data: ["data1", "data2", "data3", "data4", "data5"],
        //   // data: ["data1", "data2", "data3", "data4", "data5"]
        // },
        series: [
          {
            name: "pm2.5",
            type: "scatter",
            coordinateSystem: "bmap",
            data: convertData(data),
            encode: {
              value: 2,
            },
            symbolSize: function (val) {
              return val[2] / 10;
            },
            label: {
              formatter: "{b}",
              position: "right",
            },
            itemStyle: {
              color: "#ddb926",
            },
            emphasis: {
              label: {
                show: true,
              },
            },
          },
          // {
          //   type: 'scatter',
          //   coordinateSystem: 'geo',
          //   geoIndex: 0,
          //   symbolSize: function (params) {
          //     return (params[2] / 15) * 15 + 5;
          //   },
          //   itemStyle: {
          //     color: '#b02a02'
          //   },
          //   encode: {
          //     tooltip: 2
          //   },
          //   data: convertData(data),
          // },
          // {
          //   name: "ex) 인구 조사",
          //   type: "effectScatter",
          //   radius: "30",
          //   coordinates: [128.505599, 36.576032],
          //   data: [
          //     { value: 335, name: "data1" },
          //     { value: 310, name: "data2" },
          //     { value: 234, name: "data3" },
          //     { value: 135, name: "data4" },
          //     { value: 1548, name: "data5" },
          //   ],
          //   itemStyle: {
          //     emphasis: {
          //       shadowBlur: 10,
          //       shadowOffsetX: 0,
          //       shadowColor: "rgba(0, 0, 0, 0.5)",
          //     },
          //   },
          // },
          // {
          //   name: "ex) 인구 조사",
          //   type: "pie",
          //   radius: "30",
          //   coordinates: [129.365933, 36.032786],
          //   data: [
          //     { value: 335, name: "data1" },
          //     { value: 310, name: "data2" },
          //     { value: 234, name: "data3" },
          //     { value: 135, name: "data4" },
          //     { value: 1548, name: "data5" },
          //   ],
          //   itemStyle: {
          //     emphasis: {
          //       shadowBlur: 10,
          //       shadowOffsetX: 0,
          //       shadowColor: "rgba(0, 0, 0, 0.5)",
          //     },
          //   },
          // },
          // {
          //   name: "ex) 인구 조사",
          //   type: "pie",
          //   radius: "30",
          //   coordinates: [129.412832, 36.991726],
          //   data: [
          //     { value: 335, name: "data1" },
          //     { value: 310, name: "data2" },
          //     { value: 234, name: "data3" },
          //     { value: 135, name: "data4" },
          //     { value: 1548, name: "data5" },
          //   ],
          //   itemStyle: {
          //     emphasis: {
          //       shadowBlur: 10,
          //       shadowOffsetX: 0,
          //       shadowColor: "rgba(0, 0, 0, 0.5)",
          //     },
          //   },
          // },
        ],
      },
      {
        stopEvent: false,
        insertFirst: true,
        polyfillEvents: false,
      }
    );

    echartslayer.appendTo(map);
  }, []);

  return <div id="pieMap" style={{ height: "90%" }}></div>;
};

export { BubbleMap };
