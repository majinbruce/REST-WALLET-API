import { txFailureMail } from "./sendEmail.js";
import failureResponse from "./failureResponse.js";
import validateBalance from "./validateBalance.js";

const validateTx = async (to, from, amount, balance) => {
  if (!to || to._id === from._id) {
    return failureResponse(res, 400, "Enter a valid receiver mail");
  }
  // Check if sender has sufficient balance.
  if (validateBalance(amount, balance)) {
    const details =
      "you are broke, balance is not sufficient, add balance and try again";

    failureResponse(res, 400, `${details}`);
    txFailureMail(to, details);
  }
};

export default validateTx;
