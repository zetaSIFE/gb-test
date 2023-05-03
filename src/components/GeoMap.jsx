// import * as React from "react";
// import { useState, useEffect, useRef } from "react";
// import * as d3 from "d3";
// import { feature } from "topojson-client";
// // import testTopo from "../data/testTopo.json";
// // import peopleTopo from "../data/people.json";

// const featureData = feature(testTopo, testTopo.objects["test"]);
// // d3.json(peopleTopo, function(err, res){
// // console.log(res)
// // });
// const GeoMap = () => {
//   const chart = useRef(null);

//   const printD3 = () => {
//     const width = 600;
//     const height = 400;

//     const projection = d3.geoMercator()
//       .center([127.5, 36])
//       .scale(1)
//       .translate([0, 0]);
      
//     const path = d3.geoPath().projection(projection);
//     const bounds = path.bounds(featureData);

//     // svg의 크기에 따른 지도의 크기와 위치값을 설정합니다.
//     const dx = bounds[1][0] - bounds[0][0];
//     const dy = bounds[1][1] - bounds[0][1];
//     const x = (bounds[0][0] + bounds[1][0]) / 2;
//     const y = (bounds[0][1] + bounds[1][1]) / 2;
//     const scale = 0.9 / Math.max(dx / width, dy / height);
//     const translate = [width / 2 - scale * x, height / 2 - scale * y];

//     projection.scale(scale).translate(translate);

//     const svg = d3
//       .select(chart.current)
//       .append("svg")
//       .attr("width", width)
//       .attr("height", height)
//       .attr("id", "gyeng-buk")
//       .attr("class", "gyeng-buk");
//     const mapLayer = svg.append("g");

//     mapLayer
//       .selectAll("path")
//       .data(featureData.features)
//       .enter()
//       .append("path")
//       // .attr("class", function (d) {
//       //   return "municipality-" + d.properties.SIG_KOR_NM;
//       // })
//       .attr("d", path)
//       // .on("click", function (d) {
//       //   // console.log(d.target.__data__.properties.SIG_KOR_NM);
//       //   if (this.classList.contains('active')){ 
//       //     this.classList.remove('active');
//       //   }else{
//       //     this.classList.add('active')
//       //   }
//       // });

//     // 지역 라벨
//     mapLayer
//       .selectAll("text")
//       .data(featureData.features)
//       .enter()
//       .append("text")
//       .attr("transform", function (d) {
//         return "translate(" + path.centroid(d) + ")";
//       })
//       .attr("dy", ".35em")
//       .attr("class", "municipality-label")
//       .text(function (d) {
//         return d.properties.SIG_KOR_NM;
//       });

//     // zoom Control
//     svg.call(
//       d3
//         .zoom()
//         .extent([
//           [0, 0],
//           [width, height],
//         ])
//         .scaleExtent([1, 8])
//         .on("zoom", zoomed)
//     );

//     function zoomed({ transform }) {
//       mapLayer.attr("transform", transform);
//     }
//   };

//   useEffect(() => {
//     printD3();
//   }, []);

//   return (
//     <> 
//       <div 
//         ref={chart}
//         style={{
//           background:"#e5f3ff",
//         }}
//       ></div>
//       {/* <Slide/> */}
//     </>
//   );
// };

// export default GeoMap;
