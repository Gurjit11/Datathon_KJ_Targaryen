import React from "react";
import styles from "./style";
import "regenerator-runtime/runtime";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Newsai from "./pages/Newsai";
import { Navbar } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ai" element={<Newsai />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
