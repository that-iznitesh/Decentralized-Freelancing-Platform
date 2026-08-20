import mongoose from "mongoose";

// No passwords or private keys - the wallet address is the user's identity.
// Wallet auth itself is handled on the blockchain/frontend side.
const userSchema = new mongoose.Schema(
  {
    walletAddress: { type: String, required: true, unique: true },
    role: { type: String, enum: ["client", "freelancer"], required: true },
    name: { type: String, default: "" },
    bio: { type: String, default: "" },
    skills: { type: [String], default: [] },
    profileImage: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
