import { Router } from "express";
import {
  obtenerPersonajes,
  obtenerPersonajesPorId,
  crearPersonaje,
} from "../controllers/personajes.controllers.js";
const router = Router();
router.get("/", obtenerPersonajes);
router.get("/:id", obtenerPersonajesPorId);
router.post("/", crearPersonaje);
export default router;
