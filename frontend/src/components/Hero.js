import React from "react";
import "./Hero.css";
import myPhoto from "../assets/my-photo.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="col profile-col">
            <div className="profile">
              <img src={myPhoto} alt="My 1Photo" />
              <h2 className="profile-name">RAMANA J S</h2>
              <div className="social-icons">
                <a
                  href="https://github.com/RAMANA-JSRA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/ramana-js"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="col hero-content-col">
            <div className="hero-content-box">
              <div className="hero-content">
                <h1>Educating Minds and Strengthening Developer Relations</h1>
                <h2>
                  <TypeAnimation
                    sequence={[
                      "MERN Stack Developer",
                      2000,
                      "Full Stack Developer",
                      2000,
                    ]}
                    speed={40}
                    style={{ fontWeight: "bold", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </h2>
                <p className="description1">
                  I am a passionate developer with a keen interest in building
                  dynamic and responsive web applications. My expertise lies in
                  the MERN stack, where I enjoy creating full-stack solutions
                  that solve real-world problems. I am always eager to learn new
                  technologies and improve my skills.
                </p>
                <div className="resume-button-container">
                  <a href="/resume.pdf" download className="btn">
                    <i className="fas fa-download"></i> My Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
