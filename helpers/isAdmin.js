import failureResponse from "./failureResponse.js";

const isAdmin = (user) => {
  if (user.isAdmin === false) {
    return failureResponse(
      res,
      403,
      "Yeh scheme tere liye nai hai, you are not an admin verify otp first"
    );
  }
};

export default isAdmin;
