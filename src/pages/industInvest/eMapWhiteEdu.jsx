import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource, WMTS } from "ol/source";
import { transform } from "ol/proj";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import { register } from "ol/proj/proj4";
import proj4 from "proj4/dist/proj4";
import data1 from "assets/maps/5179/test_5179.json";
import GeoJSON from "ol/format/GeoJSON";
import Fill from "ol/style/Fill";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";

proj4.defs(
  "EPSG:5179",
  "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
);
register(proj4);
export const EmapWhiteEdu = (prop) => {
  const map = useRef();

  useEffect(() => {
    const style = new Style({
      fill: new Fill({
        color: "#eeeeee61",
      }),
      stroke: new Stroke({
        color: "#66666661",
        // width: 2,
      }),
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

    const baseLayer = new TileLayer({
      preload: 4,
      projection: "EPSG:5179",
      source: new WMTS({
        url: "http://192.168.11.19:5050/smt/proxyUrl.jsp?url=http://192.168.11.11:20000/map/api/map/baroemap?layer=white_edu_map&crtfckey=tmiKPqf1niMu5rq1VcG49XKIYmhwDJEh",
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
        format: "image/png",
        matrixSet: "NGIS_AIR",
      }),
    });

    map.current = new Map({
      layers: [baseLayer, vectorLayer],
      loadTilesWhileAnimating: true,
      target: "OdMap",
      projection: "EPSG:5179",
      view: new View({
        projection: "EPSG:5179",
        center: transform([128.0055956, 36.5760207], "EPSG:4326", "EPSG:5179"),
        zoom: 8,
      }),
    });
  }, []);

  return (
    <>
      <div id="OdMap" style={{ width: prop.width, height: prop.height }}></div>
    </>
  );
};
