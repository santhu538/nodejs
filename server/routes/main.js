import express from "express";
import { createTest2 } from "../controllers/test";
const router = express.Router();
router.post("/test", createTest2);
export default router;
