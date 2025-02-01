import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App";

function appRouting() {
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>;
}

export default appRouting;
