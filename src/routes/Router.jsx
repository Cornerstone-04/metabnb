import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing, Places } from "../screens";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="places-to-stay" element={<Places />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
