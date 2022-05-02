import Transaction from "../models/transactionModel.js";

const findTxDetails = async (details) => {
  return await Transaction.findOne({ details: details });
};

export default findTxDetails;
