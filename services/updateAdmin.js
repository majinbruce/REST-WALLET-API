import User from "../models/userModel.js";


const updateAdmin = async (user) => {
  await User.updateOne(
    { _id: user._id },
    {
      $set: {
        isAdmin: true,
      },
    }
  );
};

export default updateAdmin;
