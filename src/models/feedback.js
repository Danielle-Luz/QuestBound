import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  candidature: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "candidature",
    required: true,
  },
  comment: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  score: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4, 5],
  },
});

const feedbackModel = mongoose.model("feedback", feedbackSchema);

export default feedbackModel;
