import mongoose from "mongoose";

const socialLoginSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
    unique: true
  },
  provider: {
    type: String,
    required: true
  },
  providerIdentifier: {
    type: String,
    required: true
  }
});

const socialLogin = mongoose.model("socialLogin", socialLoginSchema);

export default socialLogin;