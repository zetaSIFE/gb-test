import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PolicyEvaluation from "pages/policyEvaluation/Main.jsx";
import StatSupport from "pages/statSupport/Main.jsx";
import Extinction from "pages/statViusual/Extinction.jsx";
import GbStat from "pages/statViusual/GbStat.jsx";
import IndustrialStat from "pages/statViusual/IndustrialStat.jsx";
import PopulationStat from "pages/statViusual/PopulationStat.jsx";
import Transfer from "pages/statViusual/Transfer.jsx";
import TrafficAnalysis from "pages/trafficAnalysis/Main.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/policy-evaluation" element={<PolicyEvaluation />} />
          <Route path="/stat-support" element={<StatSupport />} />
          <Route path="/extinction" element={<Extinction />} />
          <Route path="/gb-stat" element={<GbStat />} />
          <Route path="/industrial-stat" element={<IndustrialStat />} />
          <Route path="/population-stat" element={<PopulationStat />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/traffic-analysis" element={<TrafficAnalysis />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
