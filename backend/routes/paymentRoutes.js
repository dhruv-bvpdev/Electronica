import express from "express";
const router = express.Router();

import { makePayment } from "../controllers/paymentController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, makePayment);

export default router;
