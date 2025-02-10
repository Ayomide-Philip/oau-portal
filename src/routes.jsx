import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./pages/profile";
import HealthRegistration from "./pages/healthregistration";
import Login from "./pages/login";
import Home from "./pages/home";

function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<App />} />
      <Route path="/healthRegistration" element={<HealthRegistration />} />
    </Routes>
  );
}

export default AppRouting;
