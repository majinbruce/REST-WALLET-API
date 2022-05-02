import successResponse from "../helpers/successResponse.js";
import validateTx from "../helpers/validateTx.js";
import createTx from "../services/createTx.js";
import findUserByMail from "../services/findEmail.js";
import findUserById from "../services/findUserById.js";
import { txFailureMail, txSuccesMail } from "../helpers/sendEmail.js";

import updateUserBalance from "../services/updateUserBalance.js";

export const SendTransaction = async (req, res, next) => {
  //id(your id),email(of the person u want to send funds),amount in body
  try {
    let from, to, amount, balance;

    from = await findUserById(req);
    to = await findUserByMail(req.body.email);
    amount = req.body.amount;
    balance = from.balance;

    validateTx(to, from, amount, balance); // checks valid credential of users & sufficient balance also sends mail in case of tx failuire
    const txDetails = `transferred ${amount} amount from ${from._id} to ${to._id} `;
    createTx = await createTx(from._id, to._id, amount, txDetails);

   
    // Update balances.
    await updateUserBalance(from, from.balance - amount);
    await updateUserBalance(receiver, to.balance + amount);

    successResponse(res, 200, `${txDetails}`);
    txSuccesMail(from, txDetails);
  } catch (err) {
    txFailureMail(from, err);
    console.log(err);
  }
};
