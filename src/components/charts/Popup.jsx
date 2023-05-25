import React from "react";
import styled from "styled-components";

const PopupBox = styled.div`
  .ol-popup {
    position: absolute;
    background-color: white;
    box-shadow: 8px -8px 10px 0px #605f5f78;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #cccccc;
    bottom: 12px;
    left: -50px;
    width: 150px;
    min-height: 80px;
    border: black solid 0.5px;
    font-size: 16px;
  }
  .ol-popup:after,
  .ol-popup:before {
    top: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  .ol-popup:after {
    border-top-color: white;
    border-width: 10px;
    left: 48px;
    margin-left: -10px;
  }
  .ol-popup:before {
    border-top-color: #cccccc;
    border-width: 11px;
    left: 48px;
    margin-left: -11px;
  }
  .ol-popup-closer {
    text-decoration: none;
    position: absolute;
    top: 2px;
    right: 8px;
  }
`;

/*
prop

ref: 팝업 컴포넌트의 dom에 접근하는 ref전달
width: 팝업 컴포넌트의 길이 조절
*/

export const Popup = (prop) => {
  return (
    <PopupBox ref={prop.popupRef}>
      <div id="popup" class="ol-popup" style={{ minWidth: prop.width }}>
        {prop.content}
      </div>
    </PopupBox>
  );
};
