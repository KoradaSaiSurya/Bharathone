import React, { useState } from "react";
import PatientForm from "./PatientForm";
import PatientList from "./PatientList";

export default function MedicineGuide() {
  const [patients, setPatients] = useState([]);

  const handleAddPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  return (
    <div className="healthcare-main-container">
      {/* Background Decorations */}
      <div className="healthcare-bg-decoration">
        <div className="healthcare-floating-shape healthcare-shape-primary"></div>
        <div className="healthcare-floating-shape healthcare-shape-secondary"></div>
        <div className="healthcare-floating-shape healthcare-shape-tertiary"></div>
        <div className="healthcare-floating-shape healthcare-shape-quaternary"></div>
      </div>

      {/* Header */}
      <header className="healthcare-main-header">
        <h1 className="healthcare-main-title">
          🩺 Healthcare Management System
        </h1>
        <p className="healthcare-main-subtitle">
          Register Patients • Track Records • Guide Medicines
        </p>
        
      </header>

      <div className="healthcare-dashboard-container">
        {/* Patient Registration */}
        <PatientForm onAddPatient={handleAddPatient} />

        {/* Patient Records */}
        <PatientList patients={patients} />
      </div>
    </div>
  );
}
