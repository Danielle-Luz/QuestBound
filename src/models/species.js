import mongoose from "mongoose";

const speciesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rpgSystem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "rpgSystem",
    required: true,
  },
});

const speciesModel = mongoose.model("species", speciesSchema);

export default speciesModel;
