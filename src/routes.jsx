import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./pages/Home";
import HealthRegistration from "./pages/healthregistration";
import Login from "./pages/login";

function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<App />} />
      <Route path="/healthRegistration" element={<HealthRegistration />} />
    </Routes>
  );
}

export default AppRouting;
