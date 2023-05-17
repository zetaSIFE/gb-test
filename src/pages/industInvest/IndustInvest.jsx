import React from "react";
import SideBar from "./SideBar";
import styled from "styled-components";
import { GbMap } from "components/charts";

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
  return (
    <Container>
      <SideBar />
      <MapContainer>
        <GbMap />
      </MapContainer>
    </Container>
  );
}
