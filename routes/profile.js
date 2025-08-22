import { Router } from "express";
import { body } from "express-validator";
import { requireAuth } from "../middleware/auth.js";
import { handleValidation } from "../middleware/validate.js";
import { getProfile, updateProfile } from "../controllers/profile.controller.js";

const router = Router();
router.get("/", requireAuth, getProfile);
router.put("/", requireAuth,
  body("name").optional().isLength({ min: 1 }),
  body("password").optional().isLength({ min: 6 }),
  handleValidation,
  updateProfile
);
export default router;
