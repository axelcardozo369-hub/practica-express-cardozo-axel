import { personajes } from "../data/personajes";

export const obtenerPersonajes = (req, res) => {
  res.json(personajes);
};
export const obtenerPersonajesPorId = (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "id incorrecto,debe ser válido" });
  }

  const personaje = personajes.find((p) => p.id === id);
  if (!personaje) {
    return res.status(404).json({ error: "Personaje no encontrado" });
  }
  res.json(personaje);
};
