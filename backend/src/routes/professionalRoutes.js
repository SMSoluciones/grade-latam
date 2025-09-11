import express from "express";
import Professional from "../models/Professional.js";

const router = express.Router();

// Obtener todos los profesionales
router.get("/", async (req, res) => {
  try {
    const professionals = await Professional.find();
    res.json(professionals);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los profesionales" });
  }
});

// Obtener un profesional por ID
router.get("/:id", async (req, res) => {
  try {
    const professional = await Professional.findById(req.params.id);
    if (!professional) {
      return res.status(404).json({ message: "Profesional no encontrado" });
    }
    res.json(professional);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el profesional" });
  }
});

// Crear un nuevo profesional
router.post("/", async (req, res) => {
  try {
    const newProfessional = new Professional(req.body);
    const savedProfessional = await newProfessional.save();
    res.status(201).json(savedProfessional);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el profesional" });
  }
});

export default router;
