import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { Tile as TileLayer } from 'ol/layer';
import OSM from 'ol/source/OSM';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import GeoJSON from 'ol/format/GeoJSON';
import { Fill, Stroke, Style } from 'ol/style';
import '../css/olchoropleth.css';

import gb from '../data/gbmap_topo.json';
import { feature } from 'topojson-client';

const geoData = feature(gb, gb.objects.gbmap);
const Choropleth = () => {
  const mapRef = useRef();

  useEffect(() => {
    // async function loadGeoJSON(url) {
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   return response;
    // }

    async function createChoroplethMap() {
      // 1. 지도의 기본 레이어 설정
      const baseLayer = new TileLayer({
        source: new OSM(),
      });

      // 2. GeoJSON 데이터 로드 (여기서는 예시로 GeoJSON 데이터 URL을 사용하였으나, 실제 데이터를 사용해야 함)
      const geojsonUrl = geoData;
      // const geojsonUrl = 'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson';
      // const geojsonData = await loadGeoJSON(geoData);

      // 3. Choropleth 스타일 함수 정의
      function choroplethStyle(feature) {
        const value = feature.get('your_property'); // 각 feature의 데이터를 기반으로 색상을 지정할 속성 설정
        let fillColor;

        // 색상 범위를 설정
        if (value >= 0 && value < 10) fillColor = 'rgba(255, 255, 204, 0.8)';
        else if (value >= 10 && value < 20) fillColor = 'rgba(255, 237, 160, 0.8)';
        else if (value >= 20 && value < 30) fillColor = 'rgba(254, 217, 118, 0.8)';
        else if (value >= 30 && value < 40) fillColor = 'rgba(254, 178, 76, 0.8)';
        else if (value >= 40 && value < 50) fillColor = 'rgba(253, 141, 60, 0.8)';
        else if (value >= 50 && value < 60) fillColor = 'rgba(252, 78, 42, 0.8)';
        else if (value >= 60 && value < 70) fillColor = 'rgba(227, 26, 28, 0.8)';
        else fillColor = 'rgba(177, 0, 38, 0.8)';
        
        return new Style({
          fill: new Fill({
            color: fillColor,
          }),
          stroke: new Stroke({
            color: 'rgba(0, 0, 0, 0.5)',
            width: 1,
          }),
        });
      }
    
      // 4. 벡터 레이어 생성
      const vectorLayer = new VectorLayer({
        source: new VectorSource({
          features: new GeoJSON().readFeatures(geojsonUrl, {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857',
          }),
        }),
        style: choroplethStyle,
      });
    
      // 5. 지도 생성 및 레이어 추가
      const map = new Map({
        target: mapRef.current,
        layers: [baseLayer, vectorLayer],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });
    }
    
    createChoroplethMap();
    

  }, []);
  return <div id="map" ref={mapRef} className="map-container"></div>;

};

export default Choropleth;
