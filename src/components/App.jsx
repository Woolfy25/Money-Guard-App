import "./App.css";
import React from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// import { PrivateRoute } from "../routes/PrivateRoute";
// import { RestrictedRoute } from "../routes/RestrictedRoute";

const LazyDashboard = lazy(() =>
  import("../pages/DashboardPage/DashboardPage")
);
const LazyLogin = lazy(() => import("../pages/LoginPage/LoginPage"));
const LazyRegister = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LazyNotFound = lazy(() => import("../pages/NotFound/NotFound"));
const LazyCurency = lazy(() => import("../components/Currency/Currency"));
const LazyHomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LazyMobileHomePage = lazy(() =>
  import("../components/MobileHomePage/MobileHomePage")
);
const LazyStatisticsPage = lazy(() =>
  import("../pages/StatisticsPage/StatisticsPage")
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <LazyDashboard
                desktopChildren={<LazyHomePage />}
                mobileChildren={<LazyMobileHomePage />}
              />
            }
          ></Route>
          <Route path="/home" element={<LazyDashboard />}></Route>
          <Route
            path="/statistics"
            element={<LazyDashboard statisticsPage={<LazyStatisticsPage />} />}
          ></Route>
          <Route
            path="/currency"
            element={<LazyDashboard currencyPage={<LazyCurency />} />}
          ></Route>
          <Route path="/login" element={<LazyLogin />}></Route>
          <Route path="/register" element={<LazyRegister />}></Route>
          <Route path="*" element={<LazyNotFound />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
