import React from "react";
import "./Header.css";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="custom-header">
      <nav>
        <h1>
          <a href="#home" onClick={scrollToTop} className="portfolio-link">
            My Portfolio
          </a>
        </h1>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          {/* Toggle button for dark mode/light mode */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
