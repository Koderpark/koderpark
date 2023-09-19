import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Main from "./page/main";
import { SVG } from "./page/main/BusinessCard";

import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/card" element={<SVG />} />
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
