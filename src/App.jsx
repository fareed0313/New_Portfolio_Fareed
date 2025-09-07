import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import EnterScreen from "./components/EnterScreen";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Helmet } from "react-helmet-async";

export default function App() {
  const [started, setStarted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  useEffect(() => {
    const isBot = /bot|crawl|spider|slurp|bing/i.test(navigator.userAgent);
    const isHome = window.location.pathname === "/";
    const alreadyVisited = sessionStorage.getItem("alreadyVisited");
    if (isBot) setStarted(true);
    else if (isHome && !alreadyVisited) setStarted(false);
    else setStarted(true);
    setInitialCheckDone(true);
  }, []);

  const handleStart = () => {
    sessionStorage.setItem("alreadyVisited", "true");
    setStarted(true);
    setShowLoader(true);
  };

  if (!initialCheckDone) return null;

  return (
    <>
      <Helmet>
        <title>Shaik Fareed Baba | Full Stack Developer & AI Enthusiast</title>
        <meta
          name="description"
          content="Official portfolio of Shaik Fareed Baba, a full stack developer skilled in React, Node.js, and passionate about AI/ML. Explore projects, skills, and experience."
        />
      </Helmet>

      <Router>
        {!started ? (
          <EnterScreen onEnter={handleStart} />
        ) : showLoader ? (
          <Loader onComplete={() => setShowLoader(false)} />
        ) : null}

        <div className="bg-white dark:bg-black">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
          <Footer />
          <SpeedInsights />
        </div>
      </Router>
    </>
  );
}
