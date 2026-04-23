const express = require("express");
const Project = require("../models/Project");
const seedProjects = require("../data/projectsSeed");

const router = express.Router();

router.get("/", async (_req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  if (!projects.length) return res.json(seedProjects);
  return res.json(projects);
});

router.post("/", async (req, res) => {
  const created = await Project.create(req.body);
  res.status(201).json(created);
});

module.exports = router;
