import jwt from "jsonwebtoken";
import "dotenv/config";

export const createjwt = async (email, userId) => {
  return await jwt.sign(
    {
      email: email,
      _id: userId,
    },
    process.env.Jwt_Secret_Key,
    { expiresIn: "1h" }
  );
};

export default createjwt;