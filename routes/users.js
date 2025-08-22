import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { requireRoles } from "../middleware/roles.js";
import { listUsers } from "../controllers/users.controller.js";

const router = Router();
router.get("/", requireAuth, requireRoles("admin"), listUsers);
export default router;
