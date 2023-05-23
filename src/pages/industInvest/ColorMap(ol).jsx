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
import data1 from "assets/maps/5179/산업투자효과용 전국지도 데이터(ol) 5179.json";
import gbCenterData from "assets/maps/5179/시도 중심좌표5179.json";
import Select from "ol/interaction/Select";
import { register } from "ol/proj/proj4";
import proj4 from "proj4/dist/proj4";
import { Overlay } from "ol";
import { Popup } from "components/charts/Popup";

proj4.defs(
  "EPSG:5179",
  "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
);
register(proj4);
export const ColorMap = (prop) => {
  const [clickCity, setClickCity] = useState("경상북도");
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

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(data1, {
          dataProjection: "EPSG:5179",
          featureProjection: "EPSG:5179",
        }),
      }),
      style: function (feature) {
        const color = feature.get("COLOR") || "rgb(143 241 92 / 42%)";
        style.getFill().setColor(color);
        return style;
      },
    });

    map.current = new Map({
      layers: [vectorLayer],
      loadTilesWhileAnimating: true,
      target: "OdMap",
      projection: "EPSG:5179",
      overlays: [overlay.current],
      view: new View({
        projection: "EPSG:5179",
        center: transform([128.5055956, 36.5760207], "EPSG:4326", "EPSG:5179"),
        zoom: 8,
      }),
    });
  }, []);

  useEffect(() => {
    //클릭 이벤트 등록
    const clickEvent = new Select({
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
    clickEvent.getFeatures().on("add", function (e) {
      setClickCity(e.element.values_.CTP_KOR_NM);
    });
    map.current.addInteraction(clickEvent);

    // let selected = null;
    // map.current.on("pointermove", function (e) {
    //   if (selected !== null) {
    //     selected.setStyle(undefined);
    //     selected = null;
    //   }
    //   map.current.forEachFeatureAtPixel(e.pixel, function (f) {
    //     // 클릭 이벤트 도중 클릭 시 색이 이상하게 바껴서 임시 주석
    //     // selected = f;
    //     // selectStyle
    //     //   .getFill()
    //     //   .setColor(f.get("COLOR") || "rgb(122 188 246 / 70%)");
    //     // f.setStyle(selectStyle);
    //     return true;
    //   });
    // });
  }, []);

  useEffect(() => {
    overlay.current.setPosition(
      geoCoordMap[clickCity]
      // [128.5055956, 36.5760207]
    );
  }, [clickCity]);

  return (
    <>
      <div
        id={"OdMap"}
        style={{ width: prop.width, height: prop.height }}
      ></div>
      {clickCity == null ? <></> : <Popup popupRef={popupRef} />}
    </>
  );
};
