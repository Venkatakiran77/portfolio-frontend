// src/router/AppRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage.jsx";
import ProjectDetailPage from "@/pages/ProjectDetailPage.jsx";
import NotFoundPage from "@/pages/NotFoundPage.jsx";

export function AppRouter() {
  return (
    // Fixed: Removed the surrounding <BrowserRouter> wrapper from here
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:id" element={<ProjectDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;
