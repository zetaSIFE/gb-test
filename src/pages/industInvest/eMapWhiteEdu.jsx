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

  var color = ["#ffd30f", "#ffa022", "#46bee9"];
  // var planePath = 'path://m97.06,7.49l-44.48,51.76L2.14,118.4s-3.34,4.05-1.67,10.26,7.39,9.78,14.07,9.78c5.78,0,36.98-20.49,45.23-25.97.92-.61,2.14-.03,2.27,1.06l30.87,278.12c.42,3.83,1.95,8.39,4.52,11.26,2.4,2.67,5.99,5.04,11.21,5.04,4.47,0,7.97-1.75,10.6-3.95,3.91-3.26,6.28-8.01,6.84-13.07l14.88-134.68,15.5-143.36c.11-1.06,1.28-1.64,2.2-1.11l42.94,24.95c2.21,1.29,4.85,1.64,7.31.93,3.42-.99,7.89-3.23,9.69-8.29,2.22-6.22-1.53-11.4-3.86-13.86-1.8-1.9-3.58-3.81-5.28-5.81l-43.34-50.82L122.84,8.56c-.62-.72-1.23-1.46-1.84-2.2-2.35-2.85-12.46-13.37-23.94,1.14Z';
  var planePath =
    "path://m86.06,1.01L.28,146.93c-.8,1.36.18,3.07,1.76,3.07h44.41c1.01,0,1.87.74,2.02,1.73l36.65,242.12c.35,2.31,3.67,2.32,4.03,0l37.69-242.14c.15-.99,1.01-1.73,2.02-1.73h44.15c1.57,0,2.56-1.71,1.76-3.07L89.58,1.01c-.79-1.35-2.73-1.35-3.52,0Z";

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
