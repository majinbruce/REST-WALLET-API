import User from "../models/userModel.js";

const findUserByMail = async (email) => {
  return await User.findOne({ email: email });
};

export default findUserByMail;
