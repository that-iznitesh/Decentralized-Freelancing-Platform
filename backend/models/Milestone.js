import mongoose from "mongoose";

// Milestone / submission information for a job
const milestoneSchema = new mongoose.Schema(
  {
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    title: { type: String, required: true },
    description: { type: String, default: "" },
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["PENDING", "IN_PROGRESS", "SUBMITTED", "APPROVED"],
      default: "PENDING",
    },
    submissionText: { type: String, default: "" },
    submissionLink: { type: String, default: "" },
    submittedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export default mongoose.model("Milestone", milestoneSchema);
