import { Router } from "express";
import {
  getPolizas
} from "../controllers/contratacion.controller.js";

const router = Router();

// Routes
router.get("/poliza", getPolizas);

export default router;
