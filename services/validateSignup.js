import failureResponse from "../helpers/failureResponse.js";

import validator from "express-validator";
const { validationResult } = validator;

const validateSignup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    failureResponse(res, 401, "invalid credentials");
  } else return true;
};

export default validateSignup;
