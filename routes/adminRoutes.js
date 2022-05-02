import { Router } from "express";
import {
  findBalance,
  findTransactionById,
  getAllTransactions,
  getUserDetails,
} from "../controllers/adminController.js";

import jwtTokenDecode from "../helpers/jwtDecode.js";

const router = Router();

router.use(jwtTokenDecode);

router.get("/balance", findBalance);
router.get("/transactions/:txId", findTransactionById);
router.get("/allTransactions", getAllTransactions);
router.get("/userByName/:userName", getUserDetails);

export default router;
