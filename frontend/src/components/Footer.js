import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Ramana J S. All rights reserved.</p>
      <div className="social-links">
        <a
          href="https://Instagram.com/ramana_jsra_12"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://linkedin.com/in/ramana-js"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/RAMANA-JSRA"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://x.com/Ramana12123"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
      <p className="footer-message">
        Connect with me on social media for more updates and projects.
      </p>
    </footer>
  );
};

export default Footer;
