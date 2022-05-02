import isAdmin from "../helpers/isAdmin.js";
import successResponse from "../helpers/successResponse.js";
import findAllTx from "../services/findAllTx.js";
import findTxDetails from "../services/findTransactionDetails.js";
import findUserById from "../services/findUserById.js";
import findUserName from "../services/findUserName.js";

export const getUserDetails = async (req, res) => {
  //userName in the url while sending req
  const userName = req.params.userName;

  const user = await findUserName(req, userName);
  isAdmin(user);
  successResponse(
    res,
    200,
    "here are the details of the person you are stalking ",
    user
  );
};

export const getAllTransactions = async (req, res) => {
  //send userid in body
  const user = await findUserById(req);
  isAdmin(user); // handles error if user is not admin

  const transactions = await findAllTx();
  successResponse(res, 200, `here are all the transactions:- `, transactions);
};

export const findTransactionById = async (req, res) => {
  //txId in params,your userId as well
  const txId = req.params.txId;
  const user = await findUserById(req);

  isAdmin(user);

  const tx = await findTxDetails(txId);
  if (!tx) {
    return failureResponse(
      res,
      404,
      "transaction not found pls check the transaction id entered"
    );
  }
  successResponse(res, 200, "Transaction found.", tx);
};

export const findBalance = async (req, res) => {
  // send user id in body
  const user = await findUserById(req);
  isAdmin(user);
  successResponse(res, 200, "here is your current balance", user.balance);
};
