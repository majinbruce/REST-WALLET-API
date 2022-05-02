import Transaction from "../models/transactionModel.js";

const createTx = async (senderId, receiverId, transferAmount, details) => {
  const tx = new Transaction({
    sender: senderId,
    receiver: receiverId,
    amount: transferAmount,
    details: details,
    time: Date.now(),
  });
  return await tx.save();
};

export default createTx;
