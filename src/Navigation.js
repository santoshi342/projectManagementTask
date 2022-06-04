import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./Component/Projects";
import Feature from "./Component/Feature";
import Project from "./Component/Project";

export default function Navigation() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/feature/:projectsid/:projectid" element={<Feature />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
