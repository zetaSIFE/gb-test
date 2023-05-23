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
import data1 from "assets/maps/5179/산업투자효과용 전국지도 데이터(ol) 5179(심플).json";
import gbCenterData from "assets/maps/5179/시도 중심좌표5179.json";
import Select from "ol/interaction/Select";
import { register } from "ol/proj/proj4";
import proj4 from "proj4/dist/proj4";
import { Overlay } from "ol";
import { Popup } from "components/charts/Popup";
import styled from "styled-components";

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
  const [clickCity, setClickCity] = useState("");
  const map = useRef();
  const overlay = useRef();
  const popupRef = useRef();

  var geoCoordMap = {};
  gbCenterData.features.map((el) => {
    geoCoordMap[el.properties.CTP_KOR_NM] = el.geometry.coordinates;
  });

  useEffect(() => {
    overlay.current = new Overlay({
      element: popupRef.current,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
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
      });

      return style;
    };

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(data1, {
          dataProjection: "EPSG:5179",
          featureProjection: "EPSG:5179",
        }),
      }),
      style: styleFunc,
    });

    map.current = new Map({
      layers: [vectorLayer],
      loadTilesWhileAnimating: true,
      target: "OdMap",
      projection: "EPSG:5179",
      overlays: [overlay.current],
      view: new View({
        projection: "EPSG:5179",
        center: transform([127.9055956, 36.5760207], "EPSG:4326", "EPSG:5179"),
        zoom: 8,
      }),
    });

    const selectStyle = new Style({
      fill: new Fill({
        color: "#eeeeee",
      }),
      stroke: new Stroke({
        color: "rgba(255, 255, 255, 0.7)",
        width: 2,
      }),
    });

    map.current.on("pointermove", function (e) {
      map.current.forEachFeatureAtPixel(e.pixel, function (selected) {
        overlay.current.setPosition(
          geoCoordMap[selected.values_.CTP_KOR_NM],
          "EPSG:4326",
          "EPSG:5179"
        );
      });
    });
  }, []);

  useEffect(() => {
    //클릭 이벤트 등록
    const clickEvent = new Select({
      style: null,
    });
    clickEvent.getFeatures().on("add", function (e) {
      setClickCity(e.element.values_.CTP_KOR_NM);
    });
    map.current.addInteraction(clickEvent);
  }, []);

  useEffect(() => {}, [clickCity]);

  return (
    <>
      <div
        id={"OdMap"}
        style={{ width: prop.width, height: prop.height }}
      ></div>
      {clickCity == null ? (
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
