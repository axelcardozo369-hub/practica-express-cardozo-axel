import { Router } from "express";
import {
  obtenerPersonajes,
  obtenerPersonajesPorId,
} from "../controllers/personajes.controllers.js";
const router = Router();
router.get("/", obtenerPersonajes);
router.get("/:id", obtenerPersonajesPorId);
export default router;
