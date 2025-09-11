import express from "express";
import Specialties from "../models/Specialties.js";

const router = express.Router();

// Obtener todas las especialidades
router.get("/", async (req, res) => {
  try {
    const specialties = await Specialties.find();
    res.json(specialties);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las especialidades" });
  }
});

export default router;
