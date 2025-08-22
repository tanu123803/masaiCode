import { Router } from "express";
import { body } from "express-validator";
import { handleValidation } from "../middleware/validate.js";
import { login, register } from "../controllers/auth.controller.js";

const router = Router();
router.post(
  "/register",
  body("name").notEmpty(),
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  body("role").optional().isIn(["user", "moderator", "admin"]),
  handleValidation,
  register
);
router.post(
  "/login",
  body("email").isEmail(),
  body("password").notEmpty(),
  handleValidation,
  login
);
export default router;
