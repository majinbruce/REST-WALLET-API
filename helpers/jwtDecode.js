import jwt_decode from "jwt-decode";
import failureResponse from "./failureResponse.js";

export const jwtTokenDecode = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      return failureResponse(res, 401, "check authorization header");
    }
    const decodedToken = jwt_decode(authHeader);
    if (!decodedToken) {
      return failureResponse(res, 401, "failed, try again with the correct token");
    }
    req.userId = decodedToken.id;
    next();
  } catch (error) {
    next(error);
  }
};

export default jwtTokenDecode;
