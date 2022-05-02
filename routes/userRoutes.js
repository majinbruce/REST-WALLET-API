import { Router } from "express";
import {
  getUserBalance,
  getUserDetails,
  getUserTransactions,
} from "../controllers/userController.js";
import jwtTokenDecode from "../helpers/jwtDecode.js";

const router = Router();

router.use(jwtTokenDecode);

router.put("getUserDetails", getUserDetails);
router.put("getBalance", getUserBalance);
router.put("getTransaction", getUserTransactions);

export default router;
