import express from "express";
import userController from "../controllers/userController.js"
const router = express.Router()

router.post("/register-user", userController.registerUser)

export default router;