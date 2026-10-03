import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    experienceLevel: {
      type: String,
      enum: ["Novice", "Initiate", "Experienced", "Veteran"],
      default: "Novice",
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
);

const user = mongoose.model("user", userSchema);

export default user;