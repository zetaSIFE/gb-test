import data1 from "assets/maps/경북 시군구.json";
import data2 from "assets/maps/경북 읍면동.json";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { getCtpvList } from "service/addrgeo/ctpv";
import { getEmdList } from "service/addrgeo/emd";
import { getSggList } from "service/addrgeo/sgg";
import styled from "styled-components";
import { sggState, emgState, riState } from "states/TrafficAnaly";

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
  const [ctpv, setCtpv] = useState([]);
  const [sgg, setSgg] = useState([]);
  const [emd, setEmd] = useState([]);
  // const [selectCtpv, setSelectCtpv] = useRecoilState("");
  const [selectSgg, setSelectSgg] = useRecoilState(sggState);
  const [selectEmd, setSelectEmd] = useRecoilState(emgState);
  const [show_ri, setShow_ir] = useState(false);

  useEffect(() => {
    // setCity(data1.features[0].properties.SIG_CD);
    getCtpvList()
      .then((response) => {
        setCtpv(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getSggList()
      .then((response) => {
        setSgg(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getEmdList(selectSgg)
      .then((response) => {
        setEmd(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectSgg]);

  // const selectCtpvHandle = (e) => {
  //   setSelectCtpv(e.target.value);
  // };

  const selectSggHandle = (e) => {
    setSelectSgg(e.target.value);
  };

  const show_riHandler = (e) => {
    if (
      e.currentTarget.value.substr(-1) == "읍" ||
      e.currentTarget.value.substr(-1) == "면"
    ) {
      setShow_ir(true);
    } else {
      setShow_ir(false);
    }
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
      <select onChange={selectSggHandle}>
        {sgg.map((el, index) => (
          <option key={index} value={el.cd}>
            {el.korNm}
          </option>
        ))}
      </select>
      <select onClick={show_riHandler}>
        {emd.map((el, index) => (
          <option key={index} value={el.korNm}>
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
