
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(129, 129, 129, 0.7);
  z-index: 999;
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(124, 124, 124, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 980px;
  max-width: 80vw;
  max-height: 85vh;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  /* padding: 20px; */
`

const ModalTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cdd0d2;
  padding: 5px 20px;
  height: 60px;
  background-color: #11233f;
`;

const BtnClose = styled.div`
  cursor: pointer;
`;


Modal.propTypes = {
  visible: PropTypes.bool,
}
function Modal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
  title
}) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e)
    }
  }

  const close = (e) => {
    if (onClose) {
      onClose(e)
    }
  }
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          {/* {closable && <BtnClose className="modal-close" onClick={close}> X</BtnClose>} */}
          <ModalTop>
            <p className='chartTit inlineBlock'>{title}</p>
            <button className="modal-download inlineBlock"> 다운로드</button>
            <button className="modal-print inlineBlock"> 인쇄</button>
            <button className="modal-close inlineBlock" onClick={close}> X</button>
          </ModalTop>
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  )
}


export default Modal