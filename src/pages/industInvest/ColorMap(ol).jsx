import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import GeoJSON from "ol/format/GeoJSON";
import { transform } from "ol/proj";
import Fill from "ol/style/Fill.js";
import Stroke from "ol/style/Stroke.js";
import Style from "ol/style/Style.js";
import gbCenterData from "assets/maps/5179/시도 중심좌표5179.json";
import { register } from "ol/proj/proj4";
import proj4 from "proj4/dist/proj4";
import { Overlay } from "ol";
import { Popup } from "components/charts/Popup";
import styled from "styled-components";
import Text from "ol/style/Text";
import axios from "axios";

const PopupContent = styled.div`

table {
  width: 100%;
  height: 100%;
  line-height: 30px;
  padding
}

table tr td {
  border-bottom: 1px solid #cccccc;
}
table tr:last-child td {
  border-bottom: none;
}

.area {
  color: #D5015E;
  padding: 9px 9px 9px 0px;
  font-weight: 700;
  font-size: 20px;
}

.title {
  text-align: left
  font-weight: 400;
}
.info {
  font-weight: 700;
  text-align: right;
}`;

proj4.defs(
  "EPSG:5179",
  "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
);
register(proj4);
export const ColorMap = (prop) => {
  const map = useRef();
  const overlay = useRef();
  const popupRef = useRef();
  // const wfs = useRef();
  const [hoverState, setHoverState] = useState("");

  var geoCoordMap = {};
  gbCenterData.features.map((el) => {
    geoCoordMap[el.properties.CTPRVN_CD] = el.geometry.coordinates;
  });

  const styleFunc = (feature) => {
    let color;
    switch (feature.values_.CTP_KOR_NM) {
      case "서울특별시":
        color = "#AEBB28";
        break;
      case "인천광역시":
        color = "#A6C07C";
        break;
      case "대전광역시":
        color = "#3A9365";
        break;
      case "세종특별자치시":
        color = "#27744E";
        break;
      case "대구광역시":
        color = "#0F5B69";
        break;
      case "울산광역시":
        color = "#3864FE";
        break;
      case "부산광역시":
        color = "#D4586E";
        break;
      case "광주광역시":
        color = "#D17A3F";
        break;
      case "제주특별자치도":
        color = "#AEBB28";
        break;
      case "강원도":
        color = "#7CBC27";
        break;
      case "경기도":
        color = "#C7D925";
        break;
      case "충청북도":
        color = "#7BC087";
        break;
      case "충청남도":
        color = "#53B688";
        break;
      case "경상북도":
        color = "#378BAF";
        break;
      case "경상남도":
        color = "#EC8189";
        break;
      case "전라북도":
        color = "#FFB62D";
        break;
      case "전라남도":
        color = "#F09053";
        break;
    }

    let style = new Style({
      fill: new Fill({
        color: color,
      }),
      stroke: new Stroke({
        color: "#FFFFFF",
        width: 1,
      }),
      text: new Text({
        text: feature.values_.CTP_KOR_NM,
        font: "16px Calibri,sans-serif",
        color: "#FFFFFF",
        stroke: new Stroke({
          color: "#FFFFFF",
          width: 4,
        }),
      }),
    });

    return style;
  };

  useEffect(() => {
    overlay.current = new Overlay({
      element: popupRef.current,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });

    // axios
    //   .post(`/map/api/map/wfs`, null, {
    //     withCredentials: true,
    //     params: {
    //       service: "WFS",
    //       typeName: "Wjhs5902:L100013689",
    //       request: "GetFeature",
    //       version: "1.0.0",
    //       outputFormat: "application/json",
    //       apikey: "",
    //       crtfckey: "ddbb581407634411bde15e27f96540b0",
    //       srsname: "EPSG:5179",
    //     },
    //   })
    //   .then((res) => {
    //     setWfs(res.data);
    //   })
    //   .catch((err) => console.log(err));

    // const vectorLayer = new Tile({
    //   source: new TileWMS({
    //     url: "http://192.168.11.19:5050/smt/apigw/map/api/map/wms",
    //     params: {
    //       VERSION: "1.1.0",
    //       BBOX: [
    //         -369235.66500598635, -65967.66223432013, 992263.5861078987,
    //         792833.5701865512,
    //       ],
    //       SRS: "EPSG: 5186",
    //       FORMAT: "image/png",
    //       CRTFCKEY: "ddbb581407634411bde15e27f96540b0",
    //       LAYERS: "Waqp1234:L100013669",
    //     },
    //   }),
    // });

    if (prop.wfs != undefined) {
      const vectorLayer = new VectorLayer({
        style: styleFunc,
        source: new VectorSource({
          features: new GeoJSON().readFeatures(prop.wfs, {
            dataProjection: "EPSG:5179",
            featureProjection: "EPSG:5179",
          }),
        }),
      });

      map.current = new Map({
        layers: [vectorLayer],
        loadTilesWhileAnimating: true,
        target: "OdMap",
        projection: "EPSG:5179",
        overlays: [overlay.current],
        view: new View({
          projection: "EPSG:5179",
          center: transform(
            [127.9055956, 36.5760207],
            "EPSG:4326",
            "EPSG:5179"
          ),
          zoom: 8,
        }),
      });

      map.current.on("pointermove", function (e) {
        overlay.current.setPosition(null);
        map.current.forEachFeatureAtPixel(e.pixel, function (selected) {
          setHoverState(selected.values_.CTP_KOR_NM);
          overlay.current.setPosition(
            geoCoordMap[selected.values_.CTPRVN_CD],
            "EPSG:4326",
            "EPSG:5179"
          );
        });
      });
    }
  }, [prop.wfs]);

  // useEffect(() => {
  //   if (wfs != undefined) {
  //     const vectorLayer = new VectorLayer({
  //       style: styleFunc,
  //       source: new VectorSource({
  //         features: new GeoJSON().readFeatures(wfs, {
  //           dataProjection: "EPSG:5179",
  //           featureProjection: "EPSG:5179",
  //         }),
  //       }),
  //     });

  //     map.current = new Map({
  //       layers: [vectorLayer],
  //       loadTilesWhileAnimating: true,
  //       target: "OdMap",
  //       projection: "EPSG:5179",
  //       overlays: [overlay.current],
  //       view: new View({
  //         projection: "EPSG:5179",
  //         center: transform(
  //           [127.9055956, 36.5760207],
  //           "EPSG:4326",
  //           "EPSG:5179"
  //         ),
  //         zoom: 8,
  //       }),
  //     });

  //     map.current.on("pointermove", function (e) {
  //       overlay.current.setPosition(null);
  //       map.current.forEachFeatureAtPixel(e.pixel, function (selected) {
  //         setHoverState(selected.values_.CTP_KOR_NM);
  //         overlay.current.setPosition(
  //           geoCoordMap[selected.values_.CTPRVN_CD],
  //           "EPSG:4326",
  //           "EPSG:5179"
  //         );
  //       });
  //     });
  //   }
  // }, [wfs]);

  // useEffect(() => {
  //   //클릭 이벤트 등록
  //   const clickEvent = new Select({
  //     style: null,
  //   });
  //   clickEvent.getFeatures().on("add", function (e) {
  //     setClickCity(e.element.values_.CTP_KOR_NM);
  //   });
  //   map.current.addInteraction(clickEvent);
  // }, []);

  // useEffect(() => {}, [clickCity]);

  return (
    <>
      <div
        id={"OdMap"}
        style={{ width: prop.width, height: prop.height }}
      ></div>
      <Popup
        popupRef={popupRef}
        width="240px"
        content={
          <PopupContent>
            <div className="area">{hoverState}</div>
            <table>
              <tr>
                <td className="title">금액</td>
                <td className="info">73,049,044원</td>
              </tr>
              <tr>
                <td className="title">비율</td>
                <td className="info">4.1%</td>
              </tr>
            </table>
          </PopupContent>
        }
      />
    </>
  );
};
