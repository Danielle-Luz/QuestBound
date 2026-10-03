import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bannerUrl: {
      type: String,
    },
    vacanciesNumber: {
      type: Number,
      required: true,
      default: 1,
    },
    rpgSystem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "rpgSystem",
      required: true,
    },
    user: {
      type: mongoose.Schema.Type.ObjectId,
      ref: "user",
      required: true,
    },
    premise: {
      type: String,
      required: true,
    },
    discordUrl: {
      type: String,
    },
    ageRating: {
      type: String,
      enum: ["+12", "+14", "+16", "+18"],
      required: true,
    },
  },
  {
    timeStamps: true,
  },
);

const campaignModel = mongoose.model("campaign", campaignSchema);

export default campaignModel;