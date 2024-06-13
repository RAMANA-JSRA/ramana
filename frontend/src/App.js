import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <div className="main-content">
          <Skills />
          <Education />
          <Experience />
        </div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
