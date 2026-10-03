import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rpgSystem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "rpgSystem",
    required: true
  }
});

const classModel = mongoose.model("class", classSchema);

export default classModel;