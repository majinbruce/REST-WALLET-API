import createjwt from "../helpers/jwtCreate.js";
import findUserByMail from "../services/findEmail.js";
import validateSignup from "../services/validateSignup.js";

import successResponse from "../helpers/successResponse.js";
import failureResponse from "../helpers/failureResponse.js";
import createUser from "../services/createUser.js";
import bcrypt from "bcryptjs";


import { signUpMail } from "../helpers/sendEmail.js";
import findUserName from "../services/findUserName.js";
import { generateOTP, validateOtp } from "../helpers/optGenerator.js";

import updateAdmin from "../services/updateAdmin.js";

export const signup = async (req, res, next) => {
  //user needs to send password,userName,email at the body of req
  const validInput = validateSignup(req, res, next);
  const password = req.body.password;
  const userName = req.body.userName;
  const email = req.body.email;
  if (!validInput) {
    return failureResponse(res, 400, "invalid input");
  }
  const emailExists = await findUserByMail(email);
  if (emailExists) {
    return failureResponse(res, 400, "Email already exists,try again");
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = createUser(email, userName, hashedPassword);
  //send mail
  signUpMail(email);

  successResponse(res, 200, "created new user", newUser);
};

export const login = async (req, res, next) => {
  //user needs to send email,password,userName at the body of req
  const { password, email } = req.body;

  const user = await findUserName(req, next);
  if (!user) {
    failureResponse(res, 400, "username not found");
    return;
  }
  let correctPassword = bcrypt.compare(password, user.password);

  if (correctPassword) {
    const jwttoken = await createjwt(email, user._id);
    // sent jwt to maintain session once login is done
    successResponse(res, 200, "login successful!!", {
      token: jwttoken,
      userId: user._id,
    });
  }
};

export const getOtp = async (req, res, next) => {
  // send userName at the body
  const user = await findUserName(req);
  if (user.isAdmin === true) {
    return failureResponse(
      res,
      400,
      "Bhai kya kar raha hai tu? You are already an admin"
    );
  }
  const otp = generateOTP();

  successResponse(res, 200, `this is your otp:-   ${otp}`); // otp sent as a response
};

export const verifyOtp = async (req, res, next) => {
  // send userName and otp at the body
  const otp = req.body.otp;

  const user = await findUserName(req);
  const ValidOtp = await validateOtp(user.otp, otp);
  if (!ValidOtp) {
    return failureResponse(res, 400, "Invalid OTP!");
  }

  await updateAdmin(user);

  successResponse(res, 200, "congrats, you are now an admin");
};

export const logOut = (req, res) => {
  //no jwt sent so it'll log out XD
  successResponse(res, 200, "logged out");
};
