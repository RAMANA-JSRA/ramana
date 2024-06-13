import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("/api/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <br />
      <br />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
        {/* Additional project cards */}
        <ProjectCard
          project={{
            title: "Online Auction System ‑ MERN *Team Project*",
            doneBy: "John Doe",
            description: [
              "1. Enabled real‑time bidding functionality using WebSockets, allowing users to place bids and receive immediate updates on auction status without refreshing the page.",
              "2. Implemented secure user authentication with JWT and bcrypt, ensuring safe access to the platform. Integrated a payment gateway like Stripe or PayPal for secure and convenient payment processing during auction transactions.",
              "3. Developed a responsive user interface using React.js, facilitating seamless interaction across devices. Implemented CRUD operations via a RESTful API built with Express.js and MongoDB to manage auctions, items, and user profiles efficiently.",
            ],
            imageUrl:
              "https://drive.google.com/thumbnail?id=1lct7A54pe5yZF32WFlfzWcYMXbrY5PgA&sz=w1000",
            liveLink: "https://ramana-jsra.github.io/auction1/",
            sourceCode: "https://github.com/RAMANA-JSRA/Bid-X",
          }}
        />
        <ProjectCard
          project={{
            title: "Applications of AI in Banking Sign Dections",
            doneBy: "Jane Doe",
            description: [
              "Signature Identification and Verification   Through by   ",
              " About the Dataset ,",
              " Image Pre-Processing , ",
              " Multi Layer Perceptron (MLP) , ",
              " Identifier Model ,",
              " Verifier Model , ",
              " By combination of both Identifier and Verifier model, a signature is first identified to whom it belongs and with that information, it ch ecked it the respective Verifier model to determine weather the signature is authentic or not. It can able to identify and verify the signature with an accuracy of about 90%. ,",
            ],
            imageUrl:
              "https://drive.google.com/thumbnail?id=1aR8c73bDGGPM9fu_OaKbLjR9REuldQVD&sz=w1000",
            liveLink: "https://github.com/RAMANA-JSRA/ML_Project",
            sourceCode: "https://github.com/RAMANA-JSRA/ML_Project",
          }}
        />
        <ProjectCard
          project={{
            title: "My Portfolio - Working On!",
            doneBy: "Ramana",
            description: [
              "I am a passionate developer with a keen interest in building dynamic and responsive web applications. My expertise lies in the MERN stack, where I enjoy creating full-stack solutions that solve real-world problems. I am always eager to learn new technologies and improve my skills.",
            ],
            imageUrl:
              "https://drive.google.com/thumbnail?id=1zKHfn8OpA4yVK9edoS7BJY_A78exuH4Y&sz=w1000",
            liveLink: "https://example.com",
            sourceCode: "https://github.com/yourusername/project-name",
          }}
        />
      </div>
    </section>
  );
};

export default Projects;
