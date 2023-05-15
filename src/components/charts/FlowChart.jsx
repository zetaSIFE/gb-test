import React, { useEffect, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import EChartsLayer from "ol-echarts";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import GeoJSON from "ol/format/GeoJSON";
import { fromLonLat, get as getProjection, toLonLat, transform } from "ol/proj";
import Fill from "ol/style/Fill.js";
import Stroke from "ol/style/Stroke.js";
import Style from "ol/style/Style.js";
import gb from "assets/maps/gbmap_topo.json";
import kor from "assets/maps/koreaTopo2.json"; //national
import data1 from "assets/maps/경북 시군구.json";
import data2 from "assets/maps/경북 읍면동.json";
import centerData from "assets/maps/시군별 중심좌표.json";
import gbCenterData from "assets/maps/경북 시군구 중심좌표.json";
import Select from "ol/interaction/Select";
import { pointerMove, click } from "ol/events/condition";
import { feature } from "topojson-client";

// const korgeoData = feature(kor, kor.objects.korea_WSG84);
const geoData = feature(gb, gb.objects.gbmap);

export const FlowChart = (prop) => {
  const [clickCity, setClickCity] = useState("포항시 남구");
  const [moveData, setMoveData] = useState([]);

  useEffect(() => {
    gbCenterData.features.map((el) =>
      setMoveData((data) => [
        [
          { name: clickCity },
          { name: el.properties.SIG_KOR_NM },
          { value: 10 },
        ],
        ...data,
      ])
    );
  }, []);

  useEffect(() => {}, [clickCity]);

  var geoCoordMap = {};
  gbCenterData.features.map((el) => {
    geoCoordMap[el.properties.SIG_KOR_NM] = el.geometry.coordinates;
  });

  var color = ["#a6c84c", "#ffa022", "#46bee9"];
  // var planePath = 'path://m97.06,7.49l-44.48,51.76L2.14,118.4s-3.34,4.05-1.67,10.26,7.39,9.78,14.07,9.78c5.78,0,36.98-20.49,45.23-25.97.92-.61,2.14-.03,2.27,1.06l30.87,278.12c.42,3.83,1.95,8.39,4.52,11.26,2.4,2.67,5.99,5.04,11.21,5.04,4.47,0,7.97-1.75,10.6-3.95,3.91-3.26,6.28-8.01,6.84-13.07l14.88-134.68,15.5-143.36c.11-1.06,1.28-1.64,2.2-1.11l42.94,24.95c2.21,1.29,4.85,1.64,7.31.93,3.42-.99,7.89-3.23,9.69-8.29,2.22-6.22-1.53-11.4-3.86-13.86-1.8-1.9-3.58-3.81-5.28-5.81l-43.34-50.82L122.84,8.56c-.62-.72-1.23-1.46-1.84-2.2-2.35-2.85-12.46-13.37-23.94,1.14Z';
  var planePath =
    "path://m86.06,1.01L.28,146.93c-.8,1.36.18,3.07,1.76,3.07h44.41c1.01,0,1.87.74,2.02,1.73l36.65,242.12c.35,2.31,3.67,2.32,4.03,0l37.69-242.14c.15-.99,1.01-1.73,2.02-1.73h44.15c1.57,0,2.56-1.71,1.76-3.07L89.58,1.01c-.79-1.35-2.73-1.35-3.52,0Z";
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
          coords: [fromCoord, toCoord],
        });
      }
    }
    return res;
  };
  const series = [];
  var testMoveData = [];

  gbCenterData.features.map((el) =>
    testMoveData.push([
      { name: clickCity },
      { name: el.properties.SIG_KOR_NM, value: 10 },
    ])
  );

  [["포항시 남구", testMoveData]].forEach(function (item, i) {
    series.push(
      {
        name: item[0] + " Top10",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "#fff",
          symbolSize: 3,
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        name: item[0] + " Top10",
        type: "lines",
        zlevel: 2,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: [30, 50],
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.4,
            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        name: item[0] + " Top10",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke",
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}",
          },
        },
        symbolSize: function (val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i],
          },
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name],
          };
        }),
      }
    );
  });
  useEffect(() => {
    const geoCoordMap_test = data1.features.map(function (obj) {
      const rObj = obj.properties;
      const newO = new Object();
      // newO.ENM= rObj.
      // const oobj = {
      //   rObj.CTP_ENG_NM : [rObj.CTPRVN_CD],
      // };
      // console.log(newO);
      return rObj;
    });
    const geojsonUrl = data1;
    const baseLayer = new TileLayer({
      preload: 4,
      source: new OSM(),
    });

    const style = new Style({
      fill: new Fill({
        color: "#eeeeee61",
      }),
      stroke: new Stroke({
        color: "#66666661",
        // width: 2,
      }),
    });
    const selectStyle = new Style({
      // 클릭 이벤트 도중 클릭 시 색이 이상하게 바껴서 임시 주석
      // fill: new Fill({
      //   color: "rgb(122 188 246 / 70%)",
      // }),
      // stroke: new Stroke({
      //   color: "rgb(21 108 172 / 73%)",
      //   width: 2.5,
      // }),
    });

    //클릭 이벤트
    const test = new Select({
      // condition: click,
      // style: new Style({
      //   stroke: new Stroke({
      //     color: "white",
      //     width: 2,
      //   }),
      //   fill: new Fill({
      //     color: "rgba(0,0,255,0.6)",
      //   }),
      // }),
    });

    //클릭 이벤트
    test.getFeatures().on("add", function (e) {
      setClickCity(e.element.values_.SIG_CD);
    });

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(geojsonUrl, {
          dataProjection: "EPSG:4326",
          featureProjection: "EPSG:3857",
        }),
      }),
      style: function (feature) {
        const color = feature.get("COLOR") || "rgb(143 241 92 / 42%)";
        style.getFill().setColor(color);
        return style;
      },
    });
    var map = new Map({
      layers: [baseLayer, vectorLayer],
      loadTilesWhileAnimating: true,
      target: "OdMap",
      attribution: false,
      // controls: control.defaults({ attribution: false }),

      view: new View({
        // projection: 'EPSG:4326',
        // center: [128.505599, 36.576032],
        center: fromLonLat(
          [128.5055956, 36.5760207], //[경도, 위도] 값 설정 -> 경상북도청기준으로 설정
          getProjection("EPSG:3857")
        ),
        zoom: 5,
      }),
    });

    //클릭 이벤트
    map.addInteraction(test);

    let selected = null;
    map.on("pointermove", function (e) {
      if (selected !== null) {
        selected.setStyle(undefined);
        selected = null;
      }
      map.forEachFeatureAtPixel(e.pixel, function (f) {
        // 클릭 이벤트 도중 클릭 시 색이 이상하게 바껴서 임시 주석
        // selected = f;
        // selectStyle
        //   .getFill()
        //   .setColor(f.get("COLOR") || "rgb(122 188 246 / 70%)");
        // f.setStyle(selectStyle);
        return true;
      });
    });
    var echartslayer = new EChartsLayer({
      tooltip: {
        trigger: "item",
      },
      series: series,
    });
    echartslayer.appendTo(map);
  }, []);

  return (
    <div id="OdMap" style={{ width: prop.width, height: prop.height }}></div>
  );
};
