import "./App.css";
import "styles/common.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle, GlobalFonts, GlobalOverrideStyle } from "./styles";
import { RecoilRoot } from "recoil";

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
import IndustInvest from "pages/industInvest/IndustInvest";
import PolicyEval from "pages/policyEval/PolicyEval.jsx";
import TrafficAnaly from "pages/trafficAnaly/TrafficAnaly.jsx";

// Layouts
import StatVisualLayout from "components/layouts/StatVisualLayout.jsx";
import SupportLayout from "components/layouts/SupportLayout";

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/stat" element={<Main />} />
            {/* --------------- 통계 시각화 서비스 --------------- */}
            <Route path="/stat/statVisual" exact element={<StatVisualLayout />}>
              {/* 인구통계 */}
              <Route
                path="/stat/statVisual/populationStat.do"
                element={<PopulationStat />}
              />
              {/* 전입전출 */}
              <Route
                path="/stat/statVisual/transfer.do"
                element={<Transfer />}
              />
              {/* 산업관련 */}
              <Route
                path="/stat/statVisual/industrialStat.do"
                element={<IndustStat />}
              />
              {/* 경북특화 통계 19종 */}
              <Route path="/stat/statVisual/gbStat.do" element={<GbStat />} />
              {/* K-지방 소멸지수 */}
              <Route
                path="/stat/statVisual/extinction.do"
                element={<Extinction />}
              />
            </Route>

            {/* --------------- 통계업무지원 특화서비스 --------------- */}
            {/* 통계업무지원 특화서비스 */}
            <Route path="/stat/support" element={<SupportLayout />}>
              <Route
                path="/stat/support/statSupport.do"
                element={<StatSupport />}
              />
              {/* 산업투자효과 분석서비스 */}
              <Route
                path="/stat/support/industInvest.do"
                element={<IndustInvest />}
              />
              {/* 유동인구 데이터 분석서비스 */}
              <Route
                path="/stat/support/trafficAnaly.do"
                element={<TrafficAnaly />}
              />
              {/* 정책평가 지원서비스 */}
              <Route
                path="/stat/support/policyEval.do"
                element={<PolicyEval />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
