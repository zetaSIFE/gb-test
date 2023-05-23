import React from "react";
import styled from "styled-components";

const PopupBox = styled.div`
  .ol-popup {
    position: absolute;
    background-color: white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #cccccc;
    bottom: 12px;
    left: -50px;
    min-width: 150px;
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

export const Popup = (prop) => {
  return (
    <PopupBox ref={prop.popupRef}>
      <div id="popup" class="ol-popup">
        {/* <a href="#" id="popup-closer" class="ol-popup-closer"></a> */}
        {/* <table>
          <tr>
            <td className="title">유입</td>
            <td className="info">1만명</td>
          </tr>
          <tr>
            <td className="title">유출</td>
            <td className="info">2만명</td>
          </tr>
        </table> */}
        {prop.content}
      </div>
    </PopupBox>
  );
};
