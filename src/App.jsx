import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle, GlobalFonts, GlobalOverrideStyle } from "./styles";

// Routes
import Main from "pages/Main.jsx";

// 통계 시각화 서비스
import Extinction from "pages/statViusual/Extinction.jsx";
import GbStat from "pages/statViusual/GbStat.jsx";
import IndustStat from "pages/statViusual/IndustStat.jsx";
import PopulationStat from "pages/statViusual/PopulationStat.jsx";
import Transfer from "pages/statViusual/Transfer.jsx";

// 통계 업무 지원 특화 서비스
import StatSupport from "pages/statSupport/StatSupport.jsx";
import PolicyEvaluation from "pages/policyEvaluation/PolicyEvaluation.jsx";
import TrafficAnalysis from "pages/trafficAnalysis/TrafficAnalysis.jsx";
import IndustInvest from "pages/industInvest/IndustInvest";

// Layouts
import StatVisualLayout from "components/layouts/StatVisualLayout.jsx";
import SupportLayout from "components/layouts/SupportLayout";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* --------------- 통계 시각화 서비스 --------------- */}
          <Route path="/statVisual" element={<StatVisualLayout />}>
            {/* 인구통계 */}
            <Route
              path="/statVisual/populationStat.do"
              element={<PopulationStat />}
            />
            {/* 전입전출 */}
            <Route path="/statVisual/transfer.do" element={<Transfer />} />
            {/* 산업관련 */}
            <Route
              path="/statVisual/industrialStat.do"
              element={<IndustStat />}
            />
            {/* 경북특화 통계 19종 */}
            <Route path="/statVisual/gbStat.do" element={<GbStat />} />
            {/* K-지방 소멸지수 */}
            <Route path="/statVisual/extinction.do" element={<Extinction />} />
          </Route>

          {/* --------------- 통계업무지원 특화서비스 --------------- */}
          {/* 통계업무지원 특화서비스 */}
          <Route path="/support" element={<SupportLayout />}>
            <Route path="/support/statSupport.do" element={<StatSupport />} />
            {/* 산업투자효과 분석서비스 */}
            <Route path="/support/IndustInvest" element={<IndustInvest />} />
            {/* 유동인구 데이터 분석서비스 */}
            <Route
              path="/support/trafficAnalysis.do"
              element={<TrafficAnalysis />}
            />
            {/* 정책평가 지원서비스 */}
            <Route
              path="/support/policyEvaluation.do"
              element={<PolicyEvaluation />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
