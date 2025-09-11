import mongoose from "mongoose";
import dotenv from "dotenv";
import Professional from "../src/models/Professional.js"; // Asegúrate de que la ruta sea correcta
import Specialties from "../src/models/Specialties.js"; // Asegúrate de que la ruta sea correcta

// Configurar variables de entorno
dotenv.config();

// Conectar a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado correctamente");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1);
  }
};

// Datos a insertar
const professionalsData = [
  {
    name: "Dr. Laureano Citta",
    title: "Médico consultor",
    description:
      "Especialista en cardiología clínica con amplia experiencia en el diagnóstico y tratamiento de enfermedades cardiovasculares.",
    formation:
      "Graduated from the University of Buenos Aires with a specialization in Clinical Cardiology.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/icsb-project.firebasestorage.app/o/profesionals%2FCittaL.png?alt=media&token=bc2ccec0-ed18-462d-a766-0f7c772ee49b",
  },
  {
    name: "Dr. Laureano Bongarzoni",
    title: "Médico consultor",
    description:
      "Experto en procedimientos de hemodinamia y tratamiento de patologías cardiovasculares complejas.",
    formation:
      "Specialized in Hemodynamics at the National Institute of Cardiology.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/icsb-project.firebasestorage.app/o/profesionals%2FBongarzoniL.png?alt=media&token=6b3aadf3-72aa-47d8-8c46-6516ef76b57f",
  },
  {
    name: "Dra. Paula Citta",
    title: "Médico consultor",
    description:
      "Reconocida especialista en electrofisiología y estimulación cardíaca, enfocada en el manejo de arritmias.",
    formation: "Trained in Electrophysiology at the Mayo Clinic, USA.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/icsb-project.firebasestorage.app/o/profesionals%2FCittaP.png?alt=media&token=bc70f0f9-3f4f-4511-ae84-f3f2d87a90e0",
  },
  {
    name: "Dr. Luis Keller",
    title: "Médico consultor",
    description:
      "Cirujano cardiovascular con experiencia en procedimientos quirúrgicos avanzados y tratamientos innovadores.",
    formation:
      "Completed Cardiovascular Surgery training at Cleveland Clinic, USA.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/icsb-project.firebasestorage.app/o/profesionals%2FKellerL.png?alt=media&token=39e7acb3-015c-4f50-9ad1-43853c84ac51",
  },
];

const specialtiesData = [
  {
    title: "Cardiología clínica",
    description: "Cardiología clínica",
    image:
      "https://firebasestorage.googleapis.com/v0/b/icsb-project.firebasestorage.app/o/sections%2FCorazon.svg?alt=media&token=e201dfde-47db-4372-a860-998f5e33a4ca",
    link: "#",
  },
  {
    title: "Hemodinamia",
    description: "Cardiología clínica",
    image:
      "https://firebasestorage.googleapis.com/v0/b/icsb-project.firebasestorage.app/o/sections%2FSangre.svg?alt=media&token=85517f25-8f91-41db-94ed-10f1a53fe18a",
    link: "#",
  },
  {
    title: "Electrofisiología y estimulación cardíaca",
    description: "Cardiología clínica",
    image:
      "https://firebasestorage.googleapis.com/v0/b/icsb-project.firebasestorage.app/o/sections%2FVentilador.svg?alt=media&token=10fabf57-2bab-4964-95e9-c585aa57e2cb",
    link: "#",
  },
  {
    title: "Cirugía cardiovascular",
    description: "Cardiología clínica",
    image:
      "https://firebasestorage.googleapis.com/v0/b/icsb-project.firebasestorage.app/o/sections%2FCirugia.svg?alt=media&token=7492618d-d06b-437d-96ea-e621a3b96790",
    link: "#",
  },
  {
    title: "Cardiología pediátrica",
    description: "Cardiología clínica",
    image:
      "https://firebasestorage.googleapis.com/v0/b/icsb-project.firebasestorage.app/o/sections%2FPediatrica.svg?alt=media&token=847a0e7f-abf2-4ea3-9800-eec7bd470813",
    link: "#",
  },
  {
    title: "Insuficiencia cardíaca",
    description: "Cardiología clínica",
    image:
      "https://firebasestorage.googleapis.com/v0/b/icsb-project.firebasestorage.app/o/sections%2FInsuficiencia.svg?alt=media&token=2d763052-df97-4e0d-be9e-cb9eeb596988",
    link: "#",
  },
];

// Función para insertar datos
const seedData = async () => {
  try {
    await connectDB();

    // Limpiar la colección antes de insertar nuevos datos (opcional)
    await Professional.deleteMany();
    console.log("Colección limpiada");

    // Insertar los datos
    await Professional.insertMany(professionalsData);
    console.log("Datos insertados correctamente");

    await Specialties.deleteMany(); // Limpiar la colección de especialidades (opcional)
    console.log("Colección limpiada");

    await Specialties.insertMany(specialtiesData);
    console.log("Datos de especialidades insertados correctamente");

    process.exit(); // Salir del proceso
  } catch (error) {
    console.error("Error al insertar datos:", error);
    process.exit(1);
  }
};

seedData();
