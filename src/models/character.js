import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
  physicalDescription: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
  },
  rpgSystem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "rpgSystem",
    required: true,
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "class",
  },
  origin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "origin",
  },
  species: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "species",
  },
});

const characterModel = mongoose.model("character", characterSchema);

export default characterModel;
