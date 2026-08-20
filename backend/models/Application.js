import mongoose from "mongoose";

// Freelancer proposals for a job
const applicationSchema = new mongoose.Schema(
  {
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    freelancerAddress: { type: String, required: true },
    proposal: { type: String, required: true },
    proposedBudget: { type: Number, required: true },
    estimatedDays: { type: Number, required: true },
    status: {
      type: String,
      enum: ["PENDING", "ACCEPTED", "REJECTED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);
