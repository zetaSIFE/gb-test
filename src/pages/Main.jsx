import React from "react";
import {
  BtnStatView,
  DropdownSample,
  Dropdown,
  BtnExtinction,
  BtnReport,
} from "components/buttons";

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

export default function Main() {
  return (
    <div style={{ margin: "20px" }}>
      <DropdownSample props={smapleData} />
      <BtnStatView />
      <Dropdown props={smapleData} title={"유입 유출"} />
      {/* <Dropdown /> */}
      <BtnExtinction />
      <BtnReport />
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
