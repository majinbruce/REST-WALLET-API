import User from "../models/userModel.js";

const createUser = async (email, userName, hashedPassword) => {
  const user = new User({
    email: email,
    name: userName,
    password: hashedPassword,
  });
  const savdedUser = await user.save();
  return savdedUser;
};

export default createUser;
