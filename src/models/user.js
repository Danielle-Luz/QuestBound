import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
  preferredRpgSystem: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "rpgSystem",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.static.create = async (newUser) => {
  return this.create(newUser);
}

userSchema.static.findById = async (id) => {
  return this.findOne({ _id: mongoose.ObjectId(id) });
}

userSchema.static.findByEmail = async (email) => {
  return this.findOne({ email: email });
}

userSchema.static.updateById = async (id, updatedUser) => {
  return this.findOneAndUpdate({ _id: id}, updatedUser, { new: true });
}

const userModel = mongoose.model("user", userSchema);

export default userModel;