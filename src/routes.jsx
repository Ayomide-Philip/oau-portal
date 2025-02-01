import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import App from "./pages/Home";

function appRouting() {
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>;
}

export default appRouting;
