import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Hero from "./page/Hero.js";
import BusinessCard from "./page/BusinessCard.js";
import Prize from "./page/Prize.js";
import Interest from "./page/Interest.js";
import reportWebVitals from "./reportWebVitals";
import Timeline from "./page/Timeline.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <head>
      <link
        href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css"
        rel="stylesheet"
      />
    </head>
    <Hero />
    <BusinessCard />

    <Timeline />
    <Interest />
    <Prize />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
