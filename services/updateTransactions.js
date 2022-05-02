import Transactions from "../model/transactionModel.js";

const updatedetails = async (user, txId) => {
  await Transactions.updateOne(
    { _id: user._id },
    {
      $set: {
        sender: txId,
      },
    }
  );
};

export default updatedetails;
