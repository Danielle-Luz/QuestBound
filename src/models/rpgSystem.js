import mongoose from "mongoose";

const rpgSystemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  edition_year: {
    type: Number
  }
});

const rpgSystem = mongoose.model("rpgSystem", rpgSystemSchema);

export default rpgSystem;