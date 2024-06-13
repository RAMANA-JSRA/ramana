const mongoose = require("mongoose");
const Project = require("./models/Project");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
    seedData();
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const seedData = async () => {
  const projects = [
    {
      title: "Project One",
      description: "Description of project one.",
      imageUrl: "https://via.placeholder.com/300",
      liveLink: "https://example.com/project-one",
      sourceCode: "https://github.com/yourusername/project-one",
    },
    {
      title: "Project Two",
      description: "Description of project two.",
      imageUrl: "https://via.placeholder.com/300",
      liveLink: "https://example.com/project-two",
      sourceCode: "https://github.com/yourusername/project-two",
    },
  ];

  await Project.deleteMany({});
  await Project.insertMany(projects);
  console.log("Data seeded");
  process.exit();
};
