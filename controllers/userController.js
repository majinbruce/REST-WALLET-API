import successResponse from "../helpers/successResponse.js";
import findUserById from "../services/findUserById.js";

export const getUserDetails = async (req, res) => {
  const user = await findUserById(req);
  successResponse(
    res,
    200,
    "here are your requested user profile details ",
    user
  );
};

export const getUserBalance = async (req, res) => {
  const user = await findUserById(req);
  successResponse(res, 200, "here is your current balance", user.balance);
};

export const getUserTransactions = async (req, res) => {
  const user = await findUserById(req);
  successResponse(
    res,
    200,
    "here are the transactions made by you",
    user.transactions
  );
};
