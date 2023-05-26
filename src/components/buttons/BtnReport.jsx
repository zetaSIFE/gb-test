import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Download } from "assets/images/buttons/download.svg";
import Modal from "components/modal/GlobalModal";

const StyleBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 8px 20px; */
  gap: 8px;
`;

export const BtnReport = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <StyleBtn className="mainBtn" onClick={openModal}>
        <Download />
        <p>전체 리포트 다운로드</p>
      </StyleBtn>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
          title={"전체 리포트 다운로드"}
        >
          <div>으어아아아아아아아아메리카노~</div>
        </Modal>
      )}
    </>
  );
};
