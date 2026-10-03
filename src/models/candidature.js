import mongoose from "mongoose";

const candidatureSchema = new mongoose.Schema({
  campaign: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "campaign",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  status: {
    type: String,
    enum: ["Under review", "Chosen", "Unchosen", "Abandoned", "Removed"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const candidatureModel = mongoose.model("candidature", candidatureSchema);

export default candidatureModel;
