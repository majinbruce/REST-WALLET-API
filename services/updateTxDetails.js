import Transaction from "../models/transactionModel.js";

const updateTxDetails = async (user, details) => {
  await Transaction.updateOne(
    { _id: user._id },
    {
      $set: {
        details: details,
      },
    }
  );
};

export default updateTxDetails;
