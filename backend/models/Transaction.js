import mongoose from "mongoose";

// History/index of blockchain transactions for easy querying and display.
// If MongoDB and the blockchain ever disagree, the blockchain wins - this
// collection is just a cache/index of on-chain events.
const transactionSchema = new mongoose.Schema(
  {
    txHash: { type: String, required: true, unique: true },
    type: {
      type: String,
      enum: [
        "JOB_CREATED",
        "ESCROW_FUNDED",
        "FREELANCER_HIRED",
        "MILESTONE_APPROVED",
        "PAYMENT_RELEASE",
      ],
      required: true,
    },
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    amount: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["PENDING", "CONFIRMED", "FAILED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);
