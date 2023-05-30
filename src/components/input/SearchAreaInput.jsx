import data1 from "assets/maps/경북 시군구.json";
import data2 from "assets/maps/경북 읍면동.json";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { getCtpvList } from "service/addrgeo/ctpv";
import { getEmdList } from "service/addrgeo/emd";
import { getSggList } from "service/addrgeo/sgg";
import styled from "styled-components";
import {
  SelectSggState,
  SelectEmgState,
  SelectRiState,
} from "states/TrafficAnaly";

const HeaderBox = styled.div`
  * {
    height: 40px;
    border: 1px solid #cccccc;
    background: #ffffff;
    min-width: 120px;
  }
  input {
    padding: 0 5px;
    min-width: 250px;
    margin-right: 15px;
  }
  select {
    /* min-width:200px; */
    margin-right: 10px;
  }
`;

export const SearchAreaInput = () => {
  // const [state, setState] = useState([]);
  const [sgg, setSgg] = useState([]);
  const [emd, setEmd] = useState([]);
  // const [selectCtpv, setSelectCtpv] = useRecoilState("");
  const [selectSgg, setSelectSgg] = useRecoilState(SelectSggState);
  const [selectEmd, setSelectEmd] = useRecoilState(SelectEmgState);
  const [show_ri, setShow_ir] = useState(true); //기본 읍면동이 와룡면이기에 기본값 true

  //"시군구" 조회
  useEffect(() => {
    getSggList()
      .then((response) => {
        setSgg(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //"읍면동" 조회
  useEffect(() => {
    getEmdList(selectSgg)
      .then((response) => {
        setEmd(response.data.result);
        setSelectEmd(response.data.result[0].cd);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectSgg]);

  //"리" 조회
  useEffect(() => {
    //   getEmdList(selectEmd)
    //     .then((response) => {
    //       setEmd(response.data.result);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    if (emd.length != 0) {
      const SelectEmdName = emd.filter((el) => el.cd == selectEmd)[0].korNm;

      if (
        SelectEmdName.substr(-1) == "읍" ||
        SelectEmdName.substr(-1) == "면"
      ) {
        setShow_ir(true);
      } else {
        setShow_ir(false);
      }
    }
  }, [selectEmd]);

  const selectSggHandle = (e) => {
    setSelectSgg(e.target.value);
  };

  const selectEmdHandle = (e) => {
    setSelectEmd(e.target.value);
  };

  return (
    <HeaderBox>
      <input type="search" placeholder="대상지 검색" />
      {/* <select onChange={selectCtpvHandle}>
        {ctpv.map((el, index) => (
          <option key={index} value={el.cd}>
            {el.korNm}
          </option>
        ))}
      </select> */}
      <select onChange={selectSggHandle} value={selectSgg}>
        {sgg.map((el, index) => (
          <option key={index} value={el.cd}>
            {el.korNm}
          </option>
        ))}
      </select>
      <select onChange={selectEmdHandle} value={selectEmd}>
        {emd.map((el, index) => (
          <option key={index} value={el.cd}>
            {el.korNm}
          </option>
        ))}
      </select>
      {show_ri ? (
        <select>
          <option>lee</option>
        </select>
      ) : (
        <></>
      )}
    </HeaderBox>
  );
};
