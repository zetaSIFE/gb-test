import data1 from "assets/maps/경북 시군구.json";
import data2 from "assets/maps/경북 읍면동.json";
import { useEffect, useState } from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
  * {
    height: 40px;
    border: 1px solid #cccccc;
    border-radius: 10px;
    background: #ffffff;
  }
  input {
    padding:0 5px;
    width:30%;
    /* min-width: 300px; */
    margin-right: 15px;
  }
  select{
    /* min-width:200px; */
    margin-right: 10px;
  }
`;

export const SearchAreaInput = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState([]);

  const handleSelect = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    setCity(data1.features[0].properties.SIG_CD);
  }, []);

  useEffect(() => {
    const state = data2.features.filter((el, index) =>
      el.properties.EMD_CD.includes(city)
    );
    setState(state);
  }, [city]);

  return (
    <HeaderBox>
      <input type="search" placeholder="대상지 검색" />
      <select onChange={handleSelect}>
        {data1.features.map((el, index) => (
          <option key={index} value={el.properties.SIG_CD}>
            {el.properties.SIG_KOR_NM}
          </option>
        ))}
      </select>
      <select>
        {state.map((el, index) => (
          <option key={index} value={el.properties.EMD_CD}>
            {el.properties.EMD_KOR_NM}
          </option>
        ))}
      </select>
    </HeaderBox>
  );
};
