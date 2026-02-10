import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AllProjects from "./components/AllProjects";
import ProjectDetail from "./components/ProjectDetail";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/all-projects"
            element={
              <>
                <Header />
                <AllProjects />
                <Footer />
              </>
            }
          />
          <Route
            path="/project/:id"
            element={
              <>
                <Header />
                <ProjectDetail />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
