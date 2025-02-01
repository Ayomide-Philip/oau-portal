import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./pages/Home";
import HealthRegistration from "./pages/healthregistration";

function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/healthRegistration" element={<HealthRegistration />} />
    </Routes>
  );
}

export default AppRouting;
