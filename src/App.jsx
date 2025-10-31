import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ObjectsPage from "./pages/ObjectsPage";
import SubjectsPage from "./pages/SubjectsPage";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/objects" element={<ObjectsPage />} />
          <Route path="/subjects" element={<SubjectsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
