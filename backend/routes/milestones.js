import express from "express";
import Milestone from "../models/Milestone.js";

const router = express.Router();

// GET /api/milestones - list milestones (filter by ?jobId=)
router.get("/", async (req, res) => {
  try {
    const filter = {};
    if (req.query.jobId) filter.jobId = req.query.jobId;

    const milestones = await Milestone.find(filter).sort({ createdAt: -1 });
    res.json(milestones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/milestones - create a milestone for a job
router.post("/", async (req, res) => {
  try {
    const milestone = await Milestone.create(req.body);
    res.status(201).json(milestone);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /api/milestones/:id - submit work or approve milestone
router.put("/:id", async (req, res) => {
  try {
    const update = { ...req.body };
    if (update.status === "SUBMITTED" && !update.submittedAt) {
      update.submittedAt = new Date();
    }

    const milestone = await Milestone.findByIdAndUpdate(
      req.params.id,
      { $set: update },
      { new: true, runValidators: true }
    );
    if (!milestone) return res.status(404).json({ message: "Milestone not found" });
    res.json(milestone);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
