import React from "react";
import {
  BtnViewStat,
  BtnChartDown,
} from "components/buttons";
export const ChartHeader = (prop) => {
  return (
  <div className="spaceBetween chartTop flexAlign">
    <p className="chartTit">{prop.title}</p>
    <div className="btnContainer">
      <BtnViewStat className="" />
      <BtnChartDown props={1} />
    </div>
  </div>
  );
};
