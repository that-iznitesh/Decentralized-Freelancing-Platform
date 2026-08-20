import express from "express";
import Application from "../models/Application.js";

const router = express.Router();

// GET /api/applications - list applications (filter by ?jobId= or ?freelancerAddress=)
router.get("/", async (req, res) => {
  try {
    const filter = {};
    if (req.query.jobId) filter.jobId = req.query.jobId;
    if (req.query.freelancerAddress) filter.freelancerAddress = req.query.freelancerAddress;

    const applications = await Application.find(filter).sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/applications - freelancer submits a proposal
router.post("/", async (req, res) => {
  try {
    const application = await Application.create(req.body);
    res.status(201).json(application);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /api/applications/:id - update status (accept/reject)
router.put("/:id", async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!application) return res.status(404).json({ message: "Application not found" });
    res.json(application);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
