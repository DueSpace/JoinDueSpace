import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { NavBar } from "./components/NavBar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Footer } from "./components/Footer";
import { Prospect } from "./pages/Prospect";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Prospect />} />
        <Route path="/prospect" element={<Prospect />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <AnimatedRoutes />
      <Footer />
    </>
  );
}

export default App;
