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

function App() {
  return (
    <div className="App">
      <Suspense>
        <Routes>
          <Route path="/" element={<LazyDashboard />}></Route>
          <Route path="/login" element={<LazyLogin />}></Route>
          <Route path="/register" element={<LazyRegister />}></Route>
          <Route path="*" element={<LazyNotFound />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
