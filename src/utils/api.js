// src/utils/api.js
import axios from "axios";

// Backend URL
export const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const API = axios.create({
  baseURL: `${BASE_URL}/api`,
});

// Auth
export const registerUser = (userData) => API.post("/auth/register", userData);
export const loginUser = (userData) => API.post("/auth/login", userData);

// Courses / EdTech
export const fetchCourses = () => API.get("/courses");

// AgriTech
// AgriTech
export async function diagnoseImage(file) {
  const form = new FormData();
  form.append("image", file);

  const res = await API.post("/diagnose", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
}


// HealthTech
export const registerPatient = (data) => API.post("/patients/register", data);
export const fetchPatients = () => API.get("/patients");
export const generateMedicine = (patientId, symptoms) =>
  API.put("/patients/fever-medicine", { patientId, symptoms });
export const addRating = (patientId, rating) =>
  API.put("/patients/rating", { patientId, rating });
export const fetchFevers = () => API.get("/fevers");

export default API;
