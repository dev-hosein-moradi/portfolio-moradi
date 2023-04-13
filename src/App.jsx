import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import PreLoader from "./components/preLoader/PreLoader";

const Main = lazy(() => import("./page/main/Main"));
const NotFound = lazy(() => import("./page/not found/NotFound"));

const App = () => {
  /* use redux for handle theme color */
  const themeColor = useSelector((state) => state.theme.currentTheme);

  return (
    <div className="App" id={themeColor}>
      <Router>
        <Suspense fallback={<PreLoader />}>
          <Routes>
            <Route exact path="/" element={<Main />} />

            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
