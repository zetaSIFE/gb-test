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

// Layouts
import StatVisualLayout from "components/layouts/StatVisualLayout.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GbStat />} />
          <Route path="/policyEvaluation.do" element={<PolicyEvaluation />} />
          <Route path="/statSupport.do" element={<StatSupport />} />
          <Route path="/extinction.do" element={<Extinction />} />
          <Route path="/trafficAnalysis.do" element={<TrafficAnalysis />} />

          <Route path="/statVisual" element={<StatVisualLayout />}>
            <Route path="/statVisual/gbStat.do" element={<GbStat />} />
            <Route
              path="/statVisual/industrialStat.do"
              element={<IndustrialStat />}
            />
            <Route
              path="/statVisual/populationStat.do"
              element={<PopulationStat />}
            />
            <Route path="/statVisual/transfer.do" element={<Transfer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
