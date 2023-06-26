import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import "./styles/styles.css";

import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Features from "./components/Features";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import CandidateSearch from "./components/CandidateSearch";
function Home() {
  return (
    <div>
      <HeroBanner />
      <Features />
      <Services />
      <Pricing />
      <Download />
    </div>
  );
}
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Features />} />
            <Route path="/" element={<Services />} />
            <Route path="/" element={<Pricing />} />
            <Route path="/" element={<Download />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/search" element={<CandidateSearch />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  );
}
