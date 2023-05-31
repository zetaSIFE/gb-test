import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
// import gb from "assets/maps/gbmap_topo.json";
import gb from "assets/maps/gbmap_topo2.json";
import { feature } from "topojson-client";

/***
 * ANCHOR Topo Json 받을 떄 주의사항
1.  
- 방법1)SIG_KOR_NM -> name으로 변경 (이름이 된다)
- 방법2) series.nameProperty: '이름으로 정할 변수',
2. value 값을 넣어줘야한다.
- value: "넣고싶은 값"
***/

// NOTE 원본
// const geoData = feature(gb, gb.objects.gbmap);
// const data = geoData.features.map(function (obj) {
//   const rObj = obj.properties;
//   return rObj;
// });

const geoData = feature(gb, gb.objects.sig_wsg84_gb_move);
const data = geoData.features.map(function (obj) {
  const rObj = obj.properties;
  return rObj;
});

// STUB 지도 변환
echarts.registerMap("GB", geoData);

const mapOption = {
  // title: {
  //   text: "경상북도 안동시 행정구역도 (행정동)",
  //   textStyle: {
  //     fontSize: 15,
  //   }
  //   // subtext: "여기 링크 설정도 가능",
  //   // sublink: "https://gb.go.kr/Main/open_contents/section/data/index.html",
  // },
  tooltip: {
    trigger: "item",
    formatter: "{b}<br/>{c}",
  },
  toolbox: {
    show: true,
    orient: "vertical",
    left: "right",
    top: "center",
    // feature: {
    //   // dataView: { readOnly: false },
    //   // restore: {},
    //   saveAsImage: {
    //     title: "이미지 다운로드",
    //   },
    // },
  },

  // NOTE 범례
  // visualMap: {
  //   // 지금 지역코드 기준으로 됨
  //   min: 47100,
  //   max: 47999,
  //   text: ["High", "Low"],
  //   realtime: false,
  //   calculable: true,
  //   inRange: {
  //     color: ["#ffffff6b", "#e97516"],
  //     opacity: 0.2,
  //   },
  // },
  series: [
    {
      id: "population",
      type: "map",
      // roam: true,   ---> zooming or translating

      // ZOOM PART
      roam: true, // zooming or translating
      zoom: 1, // Initial Zoom Scale
      scaleLimit: { min: 0.7, max: 3 },

      map: "GB",
      animationDurationUpdate: 1000,
      universalTransition: true,
      data: data,
      label: {
        show: true,
        fontSize: 14,
      },
      asoluteZoom: { start: 90, end: 100 },

      // 지도 스타일
      itemStyle: {
        normal: {
          // color: "#9e9e9e",
          borderColor: "#8ACCFF",
          borderWidth: 1.5,
          areaColor: "#F0F8FF",
          // areaStyle: {
          //   color: "#bbbaba",
          // },
          label: {
            show: true,
            color: "#3b3b3b", // 글자 색상
            fontSize: 14,
            fontWweight: 500,
          },
        },
      },
      // itemStyle: {
      //   color: "#9099f0",
      //   normal: {
      //     // 기본맵 색상 지정
      //     color: "#9099f0",
      //     areaStyle: {
      //       color: "#d42727",
      //     },
      //     label: {
      //       show: true,
      //       color: "green",
      //     },
      //   },
      // },

      // 하이라이트 스타일
      emphasis: {
        label: {
          show: true,
          color: "#FFFFFF",
          fontSize: 14,
        },
        itemStyle: {
          // areaColor: null,
          areaColor: "#3F64D6",
        },
      },
    },
  ],
};

const GbMap = () => {
  return (
    <>
      <ReactEcharts
        option={mapOption}
        style={{
          height: "95%",
          width: "95%",
          // maxWidht: "600px",
        }}
      />
    </>
  );
};
export { GbMap };
