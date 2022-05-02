import User from "../models/userModel.js";

const findUserName = async (req, userName) => {
  if (userName) {
    return await User.findOne({ name: userName });
  }
  else{ return await User.findOne({ name: req.body.userName });}
  //return await User.findOne({ name: req.body.userName });
};

export default findUserName;
