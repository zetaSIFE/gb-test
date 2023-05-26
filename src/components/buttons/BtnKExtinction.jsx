import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { extinctionTab } from "states/Extinction";

const StyleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnKExtinction = () => {
  // NOTE
  // regionExtin true 경우 지방소멸위험지수 차트 표출 및 버튼 활성화
  // regionExtin false 경우 K-지방소멸지수 차트 표출 및 버튼 활성화
  const [regionExtin, setRegionExtin] = useRecoilState(extinctionTab);

  return (
    <>
      <StyleBtn
        onClick={() => {
          if (regionExtin) {
            setRegionExtin(!regionExtin);
          }
        }}
        className={regionExtin ? "grayBtn" : "mainBtn"}
      >
        <p>K-지방소멸지수</p>
      </StyleBtn>
    </>
  );
};
