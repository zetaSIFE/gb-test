import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import styled from "styled-components";
import { EmapWhiteEdu } from "./eMapWhiteEdu";
// import { ColorMap } from "./ColorMap";
import { ColorMap } from "./ColorMap(ol)";
import axios from "axios";

const Container = styled.div`
  height: 100%;
  display: flex;
`;

const MapContainer = styled.div`
  margin-top: 10px;
  padding: 10px;
  height: 90%;
  width: 90%;
`;

export default function IndustInvest() {
  const [map, setMap] = useState(true);
  const [wfs, setWfs] = useState();

  useEffect(() => {
    axios
      .post(`/map/api/map/wfs`, null, {
        withCredentials: true,
        params: {
          service: "WFS",
          typeName: "Wjhs5902:L100013689",
          request: "GetFeature",
          version: "1.0.0",
          outputFormat: "application/json",
          apikey: "",
          crtfckey: "ddbb581407634411bde15e27f96540b0",
          srsname: "EPSG:5179",
        },
      })
      .then((res) => {
        setWfs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <SideBar />
      <MapContainer>
        <button onClick={() => setMap(!map)}>지도 변경(테스트)</button>
        {map ? (
          <EmapWhiteEdu width="100%" height="100%" />
        ) : (
          <span>
            <ColorMap width="100%" height="100%" wfs={wfs} />
          </span>
          // <ColorMap />
        )}
      </MapContainer>
    </Container>
  );
}
