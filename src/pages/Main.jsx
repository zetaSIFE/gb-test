import React, { useEffect, useRef } from "react";
import {
  BtnViewStat,
  DropdownSample,
  Dropdown,
  BtnExtinction,
  BtnReport,
  BtnChartDown,
} from "components/buttons";
import { BarXTest } from "components/charts";

const smapleData = {
  data: [
    "1번",
    "2번",
    "3번",
    "4번",
    "6번",
    "7번",
    "8번",
    "9번",
    "10번",
    "11번",
    "12번",
    "13번",
    "14번",
    "15번",
    "16번",
  ],
};
const barXData = {
  title: "데이터차트(차트 수정예정)",
  data: {
    value: [20, 50, 100, 150, 200, 250, 300, 350, 400],
  },
};
export default function Main() {
  const chartRef = useRef(null);

  // console.log(chartRef.current);
  // useEffect(() => {
  //   var options = {
  //     // Your chart options here
  //     responsive: true,
  //   };

  //   canvas.setOptions(options);
  // });

  // const handleDown = () => {
  //   let canvas = document.getElementsByTagName("canvas");
  //   console.log(canvas);
  //   if (canvas && canvas.length > 0) {
  //     // create label
  //     let tempA = document.createElement("a");
  //     // Set download name
  //     tempA.download = "echarts download" + ".png";
  //     // Set address and file type
  //     tempA.href = canvas[0].toDataURL("image/png");
  //     document.body.appendChild(tempA);
  //     // Trigger download event
  //     tempA.click();
  //     // Remove Tag
  //     tempA.remove();
  //   }
  // };
  return (
    <div style={{ margin: "20px" }}>
      <DropdownSample props={smapleData} />
      <BtnViewStat />
      <Dropdown props={smapleData} title={"유입 유출"} />
      {/* <Dropdown /> */}
      <BtnExtinction />
      <BtnReport />
      <div className="itemStyle" style={{ width: "800px", height: "500px" }}>
        <div style={{ height: "50px", backgroundColor: "skyblue" }}>
          여기가 이제 제목이 될겁니다.
          <div>
            <BtnChartDown props={0} />
          </div>
        </div>
        <BarXTest
          barXData={barXData}
          ref={chartRef}
          className="canvas"
        ></BarXTest>
      </div>
    </div>
  );
}

// export default function Main() {
//   return (
//     <div>
//       Url을 정확히 입력해주세요! <br /> App.jsx의 Route 참조
//       <BtnReport />
//       <Dropdown props={smapleData} />
//       <Search />
//     </div>
//   );
// }
