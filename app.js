import express from "express";
import personajesRouter from "./src/routes/personajes.routes.js";
const MiApp = express();
const MiPuerto = 2712;
MiApp.use(express.json());
MiApp.use("/personajes", personajesRouter);
MiApp.listen(MiPuerto, () => {
  console.log("El servidor corre dentro del puerto 2712  Axel");
});
