import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true },
  qualification: { type: String, required: true },
  availability: { type: String, required: true },
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Appointment" }],
});

export const Doctor = mongoose.model("Doctor", doctorSchema);

