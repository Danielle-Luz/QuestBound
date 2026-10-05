import mongoose from "mongoose";

const socialLoginSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
    unique: true,
  },
  provider: {
    type: String,
    required: true,
  },
  providerIdentifier: {
    type: String,
    required: true,
  },
});

socialLoginSchema.statics.create = async function (newLogin) {
  return this.create(newLogin);
};

socialLoginSchema.statics.getByProvider = async function (
  providerName,
  provideriD,
) {
  return this.findOne({
    provider: providerName,
    providerIdentifier: provideriD,
  });
};

socialLoginSchema.statics.getByUserId = async function (userId) {
  return this.findOne({ user: userId });
};

const socialLoginModel = mongoose.model("socialLogin", socialLoginSchema);

export default socialLoginModel;
