import React, { useState, useEffect, useRef } from "react";
import { Map as OlMap, MapEvent } from "ol";
import { fromLonLat, toLonLat, get as getProjection } from "ol/proj.js";
import { OSM } from "ol/source";
// import VectorLayer from "ol/layer/Vector";
// import VectorSource from "ol/source/Vector";
// import TopoJSON from 'ol/format/TopoJSON';
// import Style from "ol/style/Style";
// import Fill from "ol/style/Fill";
// import Stroke from "ol/style/Stroke";
// import Select from "ol/interaction/Select";
// import {pointerMove} from "ol/events/condition";
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
// import XYZ from 'ol/source/XYZ';
import 'ol/ol.css';
import EChartsLayer from 'ol-echarts';

const Ol_Echarts = () => {

  useEffect(() => {
    const map  = new Map({
      target: 'MMap',
      layers: [
        new TileLayer({
          preload: 4,
          source: new OSM(),
        })
      ],
      loadTilesWhileAnimating: true,
      view: new View({
        projection: 'EPSG:4326',
        center: [123.53450137499999, 34.44104525],
        zoom: 5
      })
    })

    var echartslayer = new EChartsLayer();
    console.log(echartslayer);
    echartslayer.appendTo(map);


  }, []);
  return (
    <>
      <div id="MMap" style={{height: "600px"}}></div>
    </>      

    );
    // return <EChartsLayer option={option}/>
}
export default Ol_Echarts;