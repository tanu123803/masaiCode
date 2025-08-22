import { Router } from "express";
import { body } from "express-validator";
import { requireAuth } from "../middleware/auth.js";
import { handleValidation } from "../middleware/validate.js";
import {
  createResource, getResources, getResource, updateResource, deleteResource
} from "../controllers/resources.controller.js";

const router = Router();
router.use(requireAuth);

router.get("/", getResources);
router.post("/", body("title").notEmpty(), handleValidation, createResource);
router.get("/:id", getResource);
router.put("/:id", handleValidation, updateResource);
router.delete("/:id", deleteResource);

export default router;
