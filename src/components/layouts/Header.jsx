import React, {useState} from "react";
import styled from "styled-components";
import { BtnReport, Search } from "components/buttons";
import { ReactComponent as SearchIcon } from "assets/images/buttons/search.svg";
import { ReactComponent as ArrowIcon } from "assets/images/buttons/downArrow.svg";
import Modal from "components/modal/GlobalModal";
import { BarRace } from "components/charts";


const sampleList = [
  "포항시 남구",
  "포항시 북구",
  "경주시",
  "김천시",
  "안동시",
  "구미시",
  "영주시",
  "영천시",
  "상주시",
  "문경시",
  "경산시",
  "의성군",
  "청송군",
  "영양군",
  "영덕군",
  "청도군",
  "고령군",
  "성주군",
  "칠곡군",
  "예천군",
  "봉화군",
  "울진군",
  "울릉군",
];

const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  /* margin: 10px; */
  /* margin-left: 10px;
  margin-right: 10px; */ // 전체 Flex & center 설정
  .headerBox,
  .searchBox,
  .selectBox {
    display: flex;
    align-items: center;
  }
`;

const HeaderBox = styled.div``;

const SearchBox = styled.div`
  justify-content: space-between;
  width: 300px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #cccccc;
  padding-left: 12px;
  border-radius: 5px;
  input {
    border: none;
    :focus {
      // input outline 테두리 없애기
      outline: none;
    }
  }
  .search {
    display: flex;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
  }
`;

const SelectBox = styled.div`
  width: 165px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #cccccc;
  margin-left: 12px;
  justify-content: space-between;
  padding: 0px 16px 0px 16px;
`;


export const Header = (props) => {
  const [modalVisible, setModalVisible] = useState(false)

  const openModal = () => {
    setModalVisible(false)
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }
  return (
    <Container>
      <HeaderBox className="headerBox">
        <Search />
        <SelectBox className="selectBox">
          <label>경상북도</label>
          <ArrowIcon />
        </SelectBox>
        <div>
          <button 
            className="grayBtn"
            style={{
              margin: "0 15px"
            }}
            onClick={openModal}
          >지방소멸위험지수</button>
          {/* {
            modalVisible && 
            <Modal
              visible={modalVisible}
              closable={true}
              maskClosable={true}
              onClose={closeModal}
              title={'지방소멸위험ddd지수'}
            >
              <div>
                <BarRace/>
              </div>    
            </Modal>
          } */}
          <button 
            className="mainBtn"
            onClick={openModal}
          >K-지방소멸지수</button>
                    {
            modalVisible && 
            <Modal
              visible={modalVisible}
              closable={true}
              maskClosable={true}
              onClose={closeModal}
              title={'<부표> K-지방소멸 단계별 해당 지역'}
            >
              <div className="modalInner">
                <table>
 
                </table>
              </div>    
            </Modal>
          }
        </div>
      </HeaderBox>
      <BtnReport />
    </Container>
  );
};
