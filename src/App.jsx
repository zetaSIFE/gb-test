import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PolicyEvaluation from "pages/policyEvaluation/Main.jsx";
import StatSupport from "pages/statSupport/Main.jsx";
import Extinction from "pages/statViusual/extinction/Main.jsx";
import GbStat from "pages/statViusual/gbStat/Main.jsx";
import IndustrialStat from "pages/statViusual/industrialStat/Main.jsx";
import PopulationStat from "pages/statViusual/populationStat/Main.jsx";
import Transfer from "pages/statViusual/transfer/Main.jsx";
import TrafficAnalysis from "pages/trafficAnalysis/Main.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
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
