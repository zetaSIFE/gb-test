import React, { useEffect } from 'react';
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import EChartsLayer from "ol-echarts";
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import GeoJSON from 'ol/format/GeoJSON';
import { fromLonLat, get as getProjection, toLonLat, transform } from "ol/proj";
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import Style from 'ol/style/Style.js';
import gb from 'assets/maps/gbmap_topo.json';
import kor from 'assets/maps/koreaTopo2.json'; //national

import { feature } from 'topojson-client';

const korgeoData = feature(kor, kor.objects.korea_WSG84);
const geoData = feature(gb, gb.objects.gbmap);

export const Ol_Echar_flow = (prop) => {
  console.log('click')

  var geoCoordMap = {
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '东营': [118.7073, 37.5513],
    '中山': [113.4229, 22.478],
    '临汾': [111.4783, 36.1615],
    '临沂': [118.3118, 35.2936],
    '丹东': [124.541, 40.4242],
    '丽水': [119.5642, 28.1854],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043],
    '包头': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '北海': [109.314, 21.6211],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '南通': [121.1023, 32.1625],
    '厦门': [118.1689, 24.6478],
    '台州': [121.1353, 28.6688],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '咸阳': [108.4131, 34.8706],
    '哈尔滨': [127.9688, 45.368],
    '唐山': [118.4766, 39.6826],
    '嘉兴': [120.9155, 30.6354],
    '大同': [113.7854, 39.8035],
    '大连': [122.2229, 39.4409],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '威海': [121.9482, 37.1393],
    '宁波': [121.5967, 29.6466],
    '宝鸡': [107.1826, 34.3433],
    '宿迁': [118.5535, 33.7775],
    '常州': [119.4543, 31.5582],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '延安': [109.1052, 36.4252],
    '张家口': [115.1477, 40.8527],
    '徐州': [117.5208, 34.3268],
    '德州': [116.6858, 37.2107],
    '惠州': [114.6204, 23.1647],
    '成都': [103.9526, 30.7617],
    '扬州': [119.4653, 32.8162],
    '承德': [117.5757, 41.4075],
    '拉萨': [91.1865, 30.1465],
    '无锡': [120.3442, 31.5527],
    '日照': [119.2786, 35.5023],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '枣庄': [117.323, 34.8926],
    '柳州': [109.3799, 24.9774],
    '株洲': [113.5327, 27.0319],
    '武汉': [114.3896, 30.6628],
    '汕头': [117.1692, 23.3405],
    '江门': [112.6318, 22.1484],
    '沈阳': [123.1238, 42.1216],
    '沧州': [116.8286, 38.2104],
    '河源': [114.917, 23.9722],
    '泉州': [118.3228, 25.1147],
    '泰安': [117.0264, 36.0516],
    '泰州': [120.0586, 32.5525],
    '济南': [117.1582, 36.8701],
    '济宁': [116.8286, 35.3375],
    '海口': [110.3893, 19.8516],
    '淄博': [118.0371, 36.6064],
    '淮安': [118.927, 33.4039],
    '深圳': [114.5435, 22.5439],
    '清远': [112.9175, 24.3292],
    '温州': [120.498, 27.8119],
    '渭南': [109.7864, 35.0299],
    '湖州': [119.8608, 30.7782],
    '湘潭': [112.5439, 27.7075],
    '滨州': [117.8174, 37.4963],
    '潍坊': [119.0918, 36.524],
    '烟台': [120.7397, 37.5128],
    '玉溪': [101.9312, 23.8898],
    '珠海': [113.7305, 22.1155],
    '盐城': [120.2234, 33.5577],
    '盘锦': [121.9482, 41.0449],
    '石家庄': [114.4995, 38.1006],
    '福州': [119.4543, 25.9222],
    '秦皇岛': [119.2126, 40.0232],
    '绍兴': [120.564, 29.7565],
    '聊城': [115.9167, 36.4032],
    '肇庆': [112.1265, 23.5822],
    '舟山': [122.2559, 30.2234],
    '苏州': [120.6519, 31.3989],
    '莱芜': [117.6526, 36.2714],
    '菏泽': [115.6201, 35.2057],
    '营口': [122.4316, 40.4297],
    '葫芦岛': [120.1575, 40.578],
    '衡水': [115.8838, 37.7161],
    '衢州': [118.6853, 28.8666],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '连云港': [119.1248, 34.552],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '郑州': [113.4668, 34.6234],
    '鄂尔多斯': [108.9734, 39.2487],
    '重庆': [107.7539, 30.1904],
    '金华': [120.0037, 29.1028],
    '铜川': [109.0393, 35.1947],
    '银川': [106.3586, 38.1775],
    '镇江': [119.4763, 31.9702],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '长治': [112.8625, 36.4746],
    '阳泉': [113.4778, 38.0951],
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028]
  };
  var BJData = [
    [{name: '北京'}, {name: '上海', value: 95}],
    [{name: '北京'}, {name: '广州', value: 90}],
    [{name: '北京'}, {name: '大连', value: 80}],
    [{name: '北京'}, {name: '南宁', value: 70}],
    [{name: '北京'}, {name: '南昌', value: 60}],
    [{name: '北京'}, {name: '拉萨', value: 50}],
    [{name: '北京'}, {name: '长春', value: 40}],
    [{name: '北京'}, {name: '包头', value: 30}],
    [{name: '北京'}, {name: '重庆', value: 20}],
    [{name: '北京'}, {name: '常州', value: 10}]
  ];
  var SHData = [
    [{name: '上海'}, {name: '包头', value: 95}],
    [{name: '上海'}, {name: '昆明', value: 90}],
    [{name: '上海'}, {name: '广州', value: 80}],
    [{name: '上海'}, {name: '郑州', value: 70}],
    [{name: '上海'}, {name: '长春', value: 60}],
    [{name: '上海'}, {name: '重庆', value: 50}],
    [{name: '上海'}, {name: '长沙', value: 40}],
    [{name: '上海'}, {name: '北京', value: 30}],
    [{name: '上海'}, {name: '丹东', value: 20}],
    [{name: '上海'}, {name: '大连', value: 10}]
  ];
  var GZData = [
    [{name: '广州'}, {name: '福州', value: 95}],
    [{name: '广州'}, {name: '太原', value: 90}],
    [{name: '广州'}, {name: '长春', value: 80}],
    [{name: '广州'}, {name: '重庆', value: 70}],
    [{name: '广州'}, {name: '西安', value: 60}],
    [{name: '广州'}, {name: '成都', value: 50}],
    [{name: '广州'}, {name: '常州', value: 40}],
    [{name: '广州'}, {name: '北京', value: 30}],
    [{name: '广州'}, {name: '北海', value: 20}],
    [{name: '广州'}, {name: '海口', value: 10}]
  ];
  var color = ['#a6c84c', '#ffa022', '#46bee9'];
  // var planePath = 'path://m97.06,7.49l-44.48,51.76L2.14,118.4s-3.34,4.05-1.67,10.26,7.39,9.78,14.07,9.78c5.78,0,36.98-20.49,45.23-25.97.92-.61,2.14-.03,2.27,1.06l30.87,278.12c.42,3.83,1.95,8.39,4.52,11.26,2.4,2.67,5.99,5.04,11.21,5.04,4.47,0,7.97-1.75,10.6-3.95,3.91-3.26,6.28-8.01,6.84-13.07l14.88-134.68,15.5-143.36c.11-1.06,1.28-1.64,2.2-1.11l42.94,24.95c2.21,1.29,4.85,1.64,7.31.93,3.42-.99,7.89-3.23,9.69-8.29,2.22-6.22-1.53-11.4-3.86-13.86-1.8-1.9-3.58-3.81-5.28-5.81l-43.34-50.82L122.84,8.56c-.62-.72-1.23-1.46-1.84-2.2-2.35-2.85-12.46-13.37-23.94,1.14Z';
  var planePath = 'path://m86.06,1.01L.28,146.93c-.8,1.36.18,3.07,1.76,3.07h44.41c1.01,0,1.87.74,2.02,1.73l36.65,242.12c.35,2.31,3.67,2.32,4.03,0l37.69-242.14c.15-.99,1.01-1.73,2.02-1.73h44.15c1.57,0,2.56-1.71,1.76-3.07L89.58,1.01c-.79-1.35-2.73-1.35-3.52,0Z';
  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord]
        });
      }
    }
    return res;
  };
  const series = [];
  [['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(
    function (item, i) {
      series.push({
          name: item[0] + ' Top10',
          type: 'lines',
          zlevel: 1,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 1,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: item[0] + ' Top10',
          type: 'lines',
          zlevel: 2,
          effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: [30, 50]
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 1,
              opacity: 0.4,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: item[0] + ' Top10',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            brushType: 'stroke'
          },
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: '{b}'
            }
          },
          symbolSize: function (val) {
            return val[2] / 8;
          },
          itemStyle: {
            normal: {
              color: color[i]
            }
          },
          data: item[1].map(function (dataItem) {
            return {
              name: dataItem[1].name,
              value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
          })
        });
    }
  );
  useEffect(() => {
    const geoCoordMap_test = korgeoData.features.map(function(obj){
      const rObj =  obj.properties;
      const newO = new Object();
      // newO.ENM= rObj.
      // const oobj = {
      //   rObj.CTP_ENG_NM : [rObj.CTPRVN_CD],
      // };
      // console.log(newO);
      return rObj;
    })
    const geojsonUrl = korgeoData;
    const baseLayer = new TileLayer({
      preload: 4,
      source: new OSM()
    });

    const style = new Style({
      fill: new Fill({
        color: '#eeeeee61',
      }),
      stroke: new Stroke({
        color: '#66666661',
        // width: 2,
      }),
    });
    const selectStyle = new Style({
      fill: new Fill({
        color: 'rgb(122 188 246 / 70%)',
      }),
      stroke: new Stroke({
        color: 'rgb(21 108 172 / 73%)',
        width: 2.5,
      }),
    });
    
    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(geojsonUrl, {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857',
        })
      }),
      style: function (feature) {
        const color = feature.get('COLOR') || 'rgb(143 241 92 / 42%)';
        style.getFill().setColor(color);
        return style;
      },
    });
    var map = new Map({
      layers: [baseLayer, vectorLayer],
      loadTilesWhileAnimating: true,
      target: "OdMap",
      view: new View({
        // projection: 'EPSG:4326',
        // center: [128.505599, 36.576032],
        center: fromLonLat(
          [128.5055956, 36.5760207], //[경도, 위도] 값 설정 -> 경상북도청기준으로 설정
          getProjection("EPSG:3857")
        ),
        zoom: 5
      })
    });

    let selected = null;
    map.on('pointermove', function (e) {
      if (selected !== null) {
        selected.setStyle(undefined);
        selected = null;
      }
      map.forEachFeatureAtPixel(e.pixel, function (f) {
        selected = f;
        selectStyle.getFill().setColor(f.get('COLOR') || 'rgb(122 188 246 / 70%)');
        f.setStyle(selectStyle);
        return true;
      });
    });
    var echartslayer = new EChartsLayer(
      {
        tooltip: {
          trigger: 'item'
        },
        series: series
      }
    );
    echartslayer.appendTo(map);
  }, []);

  return <div id="OdMap" style={{width: prop.width, height: prop.height}}></div>;
};






