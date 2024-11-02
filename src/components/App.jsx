import "./App.css";
import React from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./Loader/Loader";

import { PrivateRoute } from "../routes/PrivateRoutes";
import { RestrictedRoute } from "../routes//RestrictedRoutes";

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
      <Suspense fallback={<Loader style={{ height: "100vh" }} />}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={
                  <LazyDashboard
                    desktopChildren={<LazyHomePage />}
                    mobileChildren={<LazyMobileHomePage />}
                  />
                }
              />
            }
          ></Route>
          <Route
            path="/"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={
                  <LazyDashboard
                    desktopChildren={<LazyHomePage />}
                    mobileChildren={<LazyMobileHomePage />}
                  />
                }
              />
            }
          ></Route>
          <Route
            path="/home"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={
                  <LazyDashboard
                    desktopChildren={<LazyHomePage />}
                    mobileChildren={<LazyMobileHomePage />}
                  />
                }
              />
            }
          ></Route>
          <Route
            path="/statistics"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={
                  <LazyDashboard statisticsPage={<LazyStatisticsPage />} />
                }
              />
            }
          ></Route>
          <Route
            path="/currency"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<LazyDashboard currencyPage={<LazyCurency />} />}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/" component={<LazyLogin />} />
            }
          ></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" component={<LazyRegister />} />
            }
          ></Route>
          <Route path="*" element={<LazyNotFound />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
