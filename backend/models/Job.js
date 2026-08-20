import mongoose from "mongoose";

// Off-chain job metadata. The blockchain remains the source of truth
// for ownership, escrow, and payment state (blockchainJobId links the two).
const jobSchema = new mongoose.Schema(
  {
    blockchainJobId: { type: Number, default: null },
    clientAddress: { type: String, required: true },
    freelancerAddress: { type: String, default: null },
    title: { type: String, required: true },
    description: { type: String, required: true },
    budget: { type: Number, required: true },
    currency: { type: String, default: "USDC" },
    deadline: { type: Date, required: true },
    milestoneDescription: { type: String, default: "" },
    status: {
      type: String,
      enum: ["OPEN", "IN_PROGRESS", "COMPLETED"],
      default: "OPEN",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
