import Transaction from "../models/transactionModel.js";

const findAllTx = async () => {
    return await Transaction.find();
};

export default findAllTx;