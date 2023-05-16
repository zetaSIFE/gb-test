import React from "react";
import { BtnReport, SelectBox } from "components/buttons";

export default function Main() {
  const props = ["1번"];
  // const props = ["1번", "2번", "3번", "4번", "5번"];
  return (
    <div>
      Url을 정확히 입력해주세요! <br /> App.jsx의 Route 참조
      <BtnReport />
      <SelectBox props={props} />
    </div>
  );
}
