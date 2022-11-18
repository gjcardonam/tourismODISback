import express from "express";
import CgetItems from "../controllers/CgetItems.js";

const router = express.Router();

router.get("/", CgetItems);
router.post("/", CgetItems);

export default router;
