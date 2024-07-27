import { Router } from "express";
import { getAIResponse } from "../controllers/aiController.js";

const router = Router();

router.post("/process", getAIResponse)

export default router;
