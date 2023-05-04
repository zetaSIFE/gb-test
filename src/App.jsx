import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle, GlobalFonts, GlobalOverrideStyle } from "./styles";

//Routes
import StatSupport from "pages/StatSupport.jsx";
import Extinction from "pages/statViusual/Extinction.jsx";
import PolicyEvaluation from "pages/PolicyEvaluation.jsx";
import TrafficAnalysis from "pages/TrafficAnalysis.jsx";

import GbStat from "pages/statViusual/GbStat.jsx";
import IndustrialStat from "pages/statViusual/IndustrialStat.jsx";
import PopulationStat from "pages/statViusual/PopulationStat.jsx";
import Transfer from "pages/statViusual/Transfer.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TrafficAnalysis />} />
          <Route path="/policyEvaluation.do" element={<PolicyEvaluation />} />
          <Route path="/statSupport.do" element={<StatSupport />} />
          <Route path="/extinction.do" element={<Extinction />} />
          <Route path="/gbStat.do" element={<GbStat />} />
          <Route path="/industrialStat.do" element={<IndustrialStat />} />
          <Route path="/populationStat.do" element={<PopulationStat />} />
          <Route path="/transfer.do" element={<Transfer />} />
          <Route path="/trafficAnalysis.do" element={<TrafficAnalysis />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
