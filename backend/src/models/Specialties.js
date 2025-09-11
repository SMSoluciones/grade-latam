import mongoose from "mongoose";

const SpecialtiesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
});

const Specialties = mongoose.model("Specialties", SpecialtiesSchema);

export default Specialties;
