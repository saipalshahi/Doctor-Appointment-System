import mongoose from "mongoose";const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Full name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: [true, "Phone number is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: ["doctor", "patient", "Doctor", "Patient"], // include capitalized versions
      required: [true, "Role is required"],
    },
    appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically create `createdAt` and `updatedAt` fields
  }
);

export const User = mongoose.model("User", userSchema);
