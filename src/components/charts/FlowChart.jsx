import React, { useEffect, useMemo, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import EChartsLayer from "ol-echarts";
import { Tile, Vector as VectorLayer } from "ol/layer";
import { TileWMS, Vector as VectorSource, WMTS } from "ol/source";
import GeoJSON from "ol/format/GeoJSON";
import { transform } from "ol/proj";
import Fill from "ol/style/Fill.js";
import Stroke from "ol/style/Stroke.js";
import Style from "ol/style/Style.js";
import data1 from "assets/maps/5179/test_5179.json";
import data2 from "assets/maps/5179/경북_읍면동5179.json";
import centerData from "assets/maps/5179/시군별_중심좌표5179.json";
import gbCenterData from "assets/maps/5179/경북 시군구 중심좌표 5179.json";
import Select from "ol/interaction/Select";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import { register } from "ol/proj/proj4";
import proj4 from "proj4/dist/proj4";
import { Overlay } from "ol";
import { Popup } from "components/charts/Popup";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  ageState,
  endDateState,
  endTimeState,
  genderState,
  startDateState,
  startTimeState,
  trafficState,
  SelectRiState,
  SelectEmgState,
  SelectSggState,
} from "states/TrafficAnaly";
import axios from "axios";

const PopupContent = styled.div`
  table {
    width: 100%;
    height: 100%;
    line-height: 30px;
  }

  table tr td {
    border-bottom: 1px solid #cccccc;
  }
  table tr:last-child td {
    border-bottom: none;
  }

  .title {
    text-align: left;
    font-weight: 400;
  }

  .info {
    font-weight: 700;
    text-align: right;
  }
`;

proj4.defs(
  "EPSG:5179",
  "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
);
register(proj4);
export const FlowChart = (prop) => {
  const [series, setSeries] = useState([]); //echartslayer 데이터
  const map = useRef(); //map 객체 전역변수
  const echartslayer = useRef(); //echartslayer 객체 전역변수
  const overlay = useRef(); //overlay 객체 전역변수
  const popupRef = useRef(); //popup을 띄우기 위한 ref
  const mapId = useRef(); //FlowChart를 분할할 경우 각 map의 id지정
  const clickEvent = useRef(); //클릭 이벤트 객체 전역번수
  const [storage, setStorage] = useState(["sgg", "L100013702"]);
  const [SelectSgg, setSelectSgg] = useRecoilState(SelectSggState); //선택된 시군구 정보
  const [SelectEmd, setSelectEmd] = useRecoilState(SelectEmgState); //선택된 읍면동 정보
  const [ri, setRi] = useRecoilState(SelectRiState); //선택된 리 정보
  const sggLayer = useRef();
  const emdLayer = useRef();
  const riLayer = useRef();

  const [testLayer, setTestLayer] = useState();

  const layers = useRef(); //레이어 전역변수

  const sggZoom = 8;
  const emgZoom = 11;
  const riZoom = 20;

  //geosever와 연결하기 전 까지 임시
  const [sggName, setSggName] = useState();

  if (prop.id) {
    mapId.current = prop.id;
  } else {
    mapId.current = "OdMap";
  }

  var geoCoordMap = {};
  gbCenterData.features.map((el) => {
    geoCoordMap[el.properties.SIG_KOR_NM] = el.geometry.coordinates;
    geoCoordMap[el.properties.SIG_CD] = el.properties.SIG_KOR_NM;
  });

  var color = ["#ffd30f", "#ffa022", "#46bee9"];
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

  const focusArea = (zoom, areaCode) => {
    map.current.getView().setZoom(zoom);
    map.current
      .getView()
      .setCenter(
        transform(geoCoordMap[geoCoordMap[areaCode]], "EPSG:4326", "EPSG:5179")
      );
  };

  const createLayer = (addrgeo) => {
    switch (addrgeo) {
      case "sgg":
        setStorage([addrgeo, "L100013702"]);
        break;
      case "emd":
        setStorage([addrgeo, "L100013703"]);
        break;
      case "ri":
        setStorage([addrgeo, "L100013704"]);
        break;
    }
  };

  const addLayer = (layer) => {
    layers.current = layer;
    console.log("레이어", layer);
    map.current.addLayer(layers.current);
  };

  useEffect(() => {
    loadWfs.then((res) => {
      const style = new Style({
        fill: new Fill({
          color: "#00D8FF",
        }),
        stroke: new Stroke({
          color: "#000000",
          width: 0.5,
        }),
      });

      const vectorLayer = new VectorLayer({
        name: storage[0],
        source: new VectorSource({
          features: new GeoJSON().readFeatures(res.data, {
            dataProjection: "EPSG:5179",
            featureProjection: "EPSG:5179",
          }),
        }),
        style: style,
      });
      switch (storage[0]) {
        case "sgg":
          sggLayer.current = vectorLayer;
          setTestLayer(vectorLayer);
          break;
        case "emd":
          emdLayer.current = vectorLayer;
          break;
        case "ri":
          riLayer.current = vectorLayer;
          break;
      }
    });
  }, [storage]);

  const createMap = () => {
    overlay.current = new Overlay({
      element: popupRef.current,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });

    const baseLayer = new TileLayer({
      preload: 4,
      projection: "EPSG:5179",
      source: new WMTS({
        url: "http://192.168.11.19:5050/smt/proxyUrl.jsp?url=http://192.168.11.11:20000/map/api/map/baroemap?layer=korean_map&crtfckey=tmiKPqf1niMu5rq1VcG49XKIYmhwDJEh",
        projection: "EPSG:5179",
        tileGrid: new WMTSTileGrid({
          origin: [-200000, 4000000],
          resolutions: [
            2088.96, 1044.48, 522.24, 261.12, 130.56, 65.28, 32.64, 16.32, 8.16,
            4.08, 2.04, 1.02, 0.51, 0.255, 0.1275, 0.06375,
          ],
          matrixIds: [
            "L05",
            "L06",
            "L07",
            "L08",
            "L09",
            "L10",
            "L11",
            "L12",
            "L13",
            "L14",
            "L15",
            "L16",
            "L17",
            "L18",
            "L19",
            "L20",
          ],
        }),
        style: "korean",
        format: "image/jpg",
        matrixSet: "NGIS_AIR",
      }),
    });

    map.current = new Map({
      layers: [baseLayer],
      loadTilesWhileAnimating: true,
      target: mapId.current,
      projection: "EPSG:5179",
      overlays: [overlay.current],
      view: new View({
        projection: "EPSG:5179",
        center: transform([128.5055956, 36.5760207], "EPSG:4326", "EPSG:5179"),
        zoom: sggZoom,
        minZoom: sggZoom - 1,
      }),
    });
  };

  const createMapEvent = () => {
    // map.current.on("pointermove", function (e) {
    //   overlay.current.setPosition(null);
    //   map.current.forEachFeatureAtPixel(e.pixel, function (selected) {
    //     // 툴팁 임시 주석
    //     overlay.current.setPosition(
    //       transform(
    //         geoCoordMap[selected.values_.SIG_KOR_NM],
    //         "EPSG:4326",
    //         "EPSG:5179"
    //       )
    //     );
    //   });
    // });

    map.current.getView().on("change:resolution", (event) => {
      //시군구 레이어
      if (
        event.target.values_.zoom >= sggZoom &&
        event.target.values_.zoom < emgZoom &&
        layers.current.values_.name != "sgg"
      ) {
        map.current.removeLayer(layers.current);

        addLayer(sggLayer.current);

        //읍면동 레이어
      } else if (
        event.target.values_.zoom >= emgZoom &&
        event.target.values_.zoom < riZoom &&
        layers.current.values_.name != "emd"
      ) {
        map.current.removeLayer(layers.current);

        // map.current.addLayer(emdLayer.current);
        addLayer(emdLayer.current);

        //리 레이어
      } else if (
        event.target.values_.zoom >= riZoom &&
        layers.current.values_.name != "ri"
      ) {
      }
    });

    //클릭 이벤트 등록
    clickEvent.current = new Select({
      style: new Style({
        fill: new Fill({
          color: "#00D8FF",
        }),
        stroke: new Stroke({
          color: "#000000",
          width: 0.5,
        }),
      }),
    });
    clickEvent.current.getFeatures().on("add", function (e) {
      setSelectSgg(e.element.values_.SIG_CD);
    });
    map.current.addInteraction(clickEvent.current);
  };

  const loadWfs = useMemo(() => {
    return axios.post(`/map/api/map/wfs`, null, {
      withCredentials: true,
      params: {
        service: "WFS",
        typeName: `Wjhs5902:${storage[1]}`,
        request: "GetFeature",
        version: "1.0.0",
        outputFormat: "application/json",
        apikey: "",
        crtfckey: "ddbb581407634411bde15e27f96540b0",
        srsname: "EPSG:5179",
      },
    });
  }, [storage]);

  useEffect(() => {
    createMap();
    createLayer("sgg");
    createLayer("emd");
    // createLayer("ri");
  }, []);

  useEffect(() => {
    if (map.current && testLayer) {
      addLayer(testLayer);
      createMapEvent();
    }
  }, [map.current, testLayer]);

  useEffect(() => {
    //임시
    setSggName(geoCoordMap[SelectSgg]);

    // focusArea(sggZoom, SelectSgg);
    map.current.getView().setZoom(8);
    map.current
      .getView()
      .setCenter(
        transform(geoCoordMap[geoCoordMap[SelectSgg]], "EPSG:4326", "EPSG:5179")
      );
    if (clickEvent.current) {
      clickEvent.current.getFeatures().clear();
    }
    if (layers.current) {
      layers.current
        .getSource()
        .getFeatures()
        .map((feature) => {
          if (SelectSgg == feature.values_.SIG_CD) {
            clickEvent.current.getFeatures().push(feature);
          }
        });
    }
  }, [SelectSgg]);

  //임시
  useEffect(() => {
    var testMoveData = [];

    gbCenterData.features.map((el) =>
      testMoveData.push([
        { name: sggName },
        { name: el.properties.SIG_KOR_NM, value: 10 },
      ])
    );

    [[sggName, testMoveData]].forEach(function (item, i) {
      setSeries(() => [
        {
          name: item[0],
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
          name: item[0],
          type: "lines",
          zlevel: 2,
          effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: [15, 20],
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
          name: item[0],
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
        },
      ]);
    });
  }, [sggName]);

  // 경북 지역 클릭 후의 이벤트
  useEffect(() => {
    if (echartslayer.current) {
      echartslayer.current.remove();
    }

    echartslayer.current = new EChartsLayer({
      series: series,
    });
    echartslayer.current.appendTo(map.current);
  }, [series]);

  return (
    <>
      <div
        id={mapId.current}
        style={{ width: prop.width, height: prop.height }}
      ></div>
      {SelectSgg == null ? (
        <></>
      ) : (
        <Popup
          popupRef={popupRef}
          content={
            <PopupContent>
              <table>
                <tr>
                  <td className="title">유입</td>
                  <td className="info">1만명</td>
                </tr>
                <tr>
                  <td className="title">유출</td>
                  <td className="info">2만명</td>
                </tr>
              </table>
            </PopupContent>
          }
        />
      )}
    </>
  );
};
