import User from "../models/userModel.js";

const findUserById = async (req) => {
  return await User.findOne({ _id: req.body.userId });
};

export default findUserById;
