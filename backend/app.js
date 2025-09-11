import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import professionalRoutes from "./src/routes/professionalRoutes.js";
import specialtiesRoutes from "./src/routes/specialtiesRoutes.js";

// Configurar variables de entorno
dotenv.config();

const app = express();

// Conectar a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Usar la URI desde el archivo .env
    console.log("MongoDB conectado correctamente");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1); // Salir del proceso si hay un error
  }
};

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/professionals", professionalRoutes);
app.use("/api/specialties", specialtiesRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
