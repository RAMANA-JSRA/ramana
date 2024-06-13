import React from "react";
import "./Education.css";
import vitLogo from "../assets/vit-logo.png"; // Ensure the path is correct
import tagLogo from "../assets/tag-logo.png";
const Education = () => {
  return (
    <section id="education" className="section1">
      <div className="container3">
        <h2 className="section-title">Education</h2>
        <br />
        <div className="education-details">
          <div className="education-item">
            <div className="education-header">
              <img src={vitLogo} alt="VIT Logo" className="education-logo" />
              <h3>B-Tech in Computer Science & Engineering</h3>
            </div>
            <p>
              <b>VIT-AP University | India</b>, 2021 - 2025
            </p>
            <div className="education-header">
              <img src={tagLogo} alt="VIT Logo" className="education-logo" />
              <h3>Higher Secondary Education</h3>
            </div>
            <p>
              <b>Tagore Public School (CBSE) | Tamil Nadu | India</b>, 2019 -
              2021
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
