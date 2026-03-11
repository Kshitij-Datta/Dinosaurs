import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/layout/Navbar";

import Home from "./pages/Home";
import Explorer from "./pages/Explorer";
import DinoDetail from "./pages/DinoDetail";
import DevelopmentModal from "./Components/ui/DevelopmentModal";

export default function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <DevelopmentModal />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/dinosaur/:id" element={<DinoDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
