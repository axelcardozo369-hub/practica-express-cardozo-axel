import { personajes } from "../data/personajes.js";

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
export const crearPersonaje = (req, res) => {
  const { nombre, imagen } = req.body;
  if (!nombre || nombre === "") {
    return res.status(400).json({ error: "El nombre no puede estar vacia" });
  }
  if (!imagen || imagen === "") {
    return res.status(400).json({ error: "la imagen no puede estar vacia" });
  }
  const nuevoPersonaje = {
    id: personajes.length + 1,
    nombre,
    imagen,
  };
  personajes.push(nuevoPersonaje);
  res.status(201).json({ message: "Personaje creado", nuevoPersonaje });
};
