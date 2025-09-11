import mongoose from "mongoose";

const ProfessionalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  formation: { type: String, required: true },
  image: { type: String, required: true },
});

const Professional = mongoose.model("Professional", ProfessionalSchema);

export default Professional;
