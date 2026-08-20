import express from "express";
import User from "../models/User.js";

const router = express.Router();

// GET /api/users - list all users (optionally filter by ?role=)
router.get("/", async (req, res) => {
  try {
    const filter = req.query.role ? { role: req.query.role } : {};
    const users = await User.find(filter).sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/users/:walletAddress - get one profile by wallet address
router.get("/:walletAddress", async (req, res) => {
  try {
    const user = await User.findOne({ walletAddress: req.params.walletAddress });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/users - create or update a profile (upsert by wallet address)
router.post("/", async (req, res) => {
  try {
    const { walletAddress } = req.body;
    if (!walletAddress) {
      return res.status(400).json({ message: "walletAddress is required" });
    }

    const user = await User.findOneAndUpdate(
      { walletAddress },
      { $set: req.body },
      { new: true, upsert: true, runValidators: true }
    );

    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /api/users/:walletAddress - update a profile
router.put("/:walletAddress", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { walletAddress: req.params.walletAddress },
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
