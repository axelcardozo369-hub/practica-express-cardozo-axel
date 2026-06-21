import express from "express";
const MiApp = express();
const MiPuerto = 2712;
MiApp.use(express.json());

MiApp.listen(MiPuerto, () => {
  console.log("El servidor corre dentro del puerto 2712  Axel");
});
