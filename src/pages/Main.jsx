import React from "react";
import { BtnReport, Dropdown } from "components/buttons";

const smapleData = { data: ["1번", "2번", "3번", "4번"] };

export default function Main() {
  return (
    <div>
      Url을 정확히 입력해주세요! <br /> App.jsx의 Route 참조
      <BtnReport />
      <Dropdown props={smapleData} />
    </div>
  );
}
