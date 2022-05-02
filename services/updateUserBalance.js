import User from "../models/userModel.js";

const updateUserBalance = async (user, amount) => {
  await User.updateOne(
    { _id: user._id },
    {
      $set: {
        balance: amount,
      },
    }
  );
};

export default updateUserBalance;
