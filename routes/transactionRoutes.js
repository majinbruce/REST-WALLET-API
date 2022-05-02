import { Router } from "express";
import { SendTransaction } from "../controllers/transactionController.js";
import jwtTokenDecode from "../helpers/jwtDecode.js";

const router = Router();

router.use(jwtTokenDecode);
router.post("/sendTransaction", SendTransaction);

export default router;
