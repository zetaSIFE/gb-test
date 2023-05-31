import React from "react";
import styled from "styled-components";
import { ReactComponent as DownloadSVG } from "assets/images/buttons/download.svg";

const StyleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background: #11233f;
  border-radius: 24px;
  cursor: pointer;
`;

// NOTE - props : 이미지 다운받을 차트의 className을 넣어줘야한다.
// 차트가 모두 "canvas" 속성이므로 index를 기준으로 다운받을 차트를 선택한다.
// Sample : <BtnChartDown props={0} />

export const BtnChartDown = ({ props }) => {
  const handleDown = () => {
    console.log(props);
    console.log(typeof props);
    // let canvas = document.getElementsByTagName("클래스이름");

    let canvas = document.getElementsByTagName("canvas");
    console.log(canvas);

    if (canvas && canvas.length > 0) {
      // create label
      let tempA = document.createElement("a");
      // Set download name
      tempA.download = "echarts download" + ".png";
      // Set address and file type
      // tempA.href = canvas[0].toDataURL("image/png");
      tempA.href = canvas[props].toDataURL("image/png");
      document.body.appendChild(tempA);
      // Trigger download event
      tempA.click();
      // Remove Tag
      tempA.remove();
    }
  };

  return (
    <StyleBtn onClick={handleDown}>
      <DownloadSVG />
    </StyleBtn>
  );
};

// Default value : props를 넘겨받지 못했을 경우에도 오류가 발생하지 않음
BtnChartDown.defaultProps = {
  props: null,
};
