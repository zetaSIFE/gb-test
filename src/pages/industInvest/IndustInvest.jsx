import React, { useState } from "react";
import SideBar from "./SideBar";
import styled from "styled-components";
import { EmapWhiteEdu } from "./eMapWhiteEdu";
// import { ColorMap } from "./ColorMap";
import { ColorMap } from "./ColorMap(ol)";

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

  return (
    <Container>
      <SideBar />
      <MapContainer>
        <button onClick={() => setMap(!map)}>지도 변경(테스트)</button>
        {map ? (
          <EmapWhiteEdu width="100%" height="100%" />
        ) : (
          <span>
            <ColorMap width="100%" height="100%" />
          </span>
          // <ColorMap />
        )}
      </MapContainer>
    </Container>
  );
}
