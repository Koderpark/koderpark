import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Main from "./page/main";

import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
