import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="section1">
      <div className="skill-section">
        <h2 className="section-title">Skills</h2>
        <br />
        <div className="skill-categories">
          <div className="category">
            <h3>Language</h3>
            <ul className="skill-list">
              <li>
                JavaScript <span>&#x1F4BB;</span>
              </li>
              <li>
                Python <span>&#x1F40D;</span>
              </li>
              <li>
                Java <span>&#x1F984;</span>
              </li>
            </ul>
          </div>
          <div className="category">
            <h3>Lib/Frameworks</h3>
            <ul className="skill-list">
              <li>
                React.js <span>&#x1F680;</span>
              </li>
              <li>
                Node.js <span>&#x1F4BB;</span>
              </li>
            </ul>
          </div>
          <div className="category">
            <h3>Tools</h3>
            <ul className="skill-list">
              <li>
                Git <span>&#x1F5C4;</span>
              </li>
              <li>
                VS Code <span>&#x1F4BB;</span>
              </li>
            </ul>
          </div>
          <div className="category">
            <h3>Platforms</h3>
            <ul className="skill-list">
              <li>
                Linux <span>&#x1F427;</span>
              </li>
              <li>
                Windows <span>&#x1F5A5;</span>
              </li>
            </ul>
          </div>
          <div className="category">
            <h3>Databases</h3>
            <ul className="skill-list">
              <li>
                MongoDB <span>&#x1F4F1;</span>
              </li>
              <li>
                MySQL <span>&#x1F4DD;</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
