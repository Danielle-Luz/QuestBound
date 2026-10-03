import mongoose from "mongoose";

const originSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rpgSystem: {
    type: mongppse.Schema.Types.ObjectId,
    ref: "rpgSystem",
    required: true,
  },
});

const originModel = mongoose.model("origin", originSchema);

export default originModel;