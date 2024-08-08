import { patient, Patient } from "../models/patient.model";

export const registerPatient = async (req, res) => {
  try {
    //get the patient name from request
    const { patientName } = req.body;
    //validate require field
    if (!patientName) {
      return res.status(400).json({
        message: "Patient name is required.",
        success: false,
      });
    }
    // saving the patient to a database
    const newPatient = await savePatienttoDatabase(patientName);

    // respond with a success message
    return res.status(201).json({
      message: "Patient registered successfully.",
      success: true,
      patient: newPatient,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error accurred while  registering the patient.",
      success: false,
    });
  }
};
