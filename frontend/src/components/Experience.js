import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="section1">
      <div className="container2">
        <br />
        <br />
        <br />
        <br />
        <h2 className="section-title1">Experience</h2>
        <div className="experience-grid">
          <div className="experience-item">
            <h3>
              <a
                href="https://drive.google.com/file/d/1u9Dvh-EJlBu40VLczcLyMgMHTkj4nlMC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                MERN STACK
              </a>
            </h3>
            <p>Ethnus, Sep 2023 - Nov 2023</p>
            <ul>
              <li>Developed web applications using React.js and Node.js</li>
              <li>
                Collaborated with cross-functional teams to deliver high-quality
                software solutions
              </li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>
              <a
                href="https://drive.google.com/file/d/1COlKJ7UTuzb8at1ndCaYjNp0ykNHb-XH/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Introduction to Artificial Intelligence with Python
              </a>
            </h3>
            <p>CS50 , Jan 2022 - Jun 2024</p>
            <ul>
              <li>
                This course is offered by Harvard University and focuses on
                providing a comprehensive introduction to AI using Python
              </li>
              <li>
                CS50's Introduction to AI with Python is suitable for
                individuals with a basic understanding of Python programming and
                computer science fundamentals.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
