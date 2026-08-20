import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

// GET /api/transactions - list transactions (filter by ?jobId=)
router.get("/", async (req, res) => {
  try {
    const filter = {};
    if (req.query.jobId) filter.jobId = req.query.jobId;

    const transactions = await Transaction.find(filter).sort({ createdAt: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/transactions - index a confirmed/pending blockchain transaction
// This will typically be called after the frontend gets a tx hash back
// from the smart contract (see freelance-dapp/web3).
router.post("/", async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
