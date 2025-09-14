import React from "react";

export default function PatientList({ patients }) {
  return (
    <section className="clinic-records-section">
      <div className="clinic-records-header">
        <div className="clinic-header-left">
          <span className="clinic-records-icon">📋</span>
          <div>
            <h2 className="clinic-records-title">Patient Records</h2>
            <p className="clinic-records-subtitle">
              Manage and view registered patients
            </p>
          </div>
        </div>
      </div>

      {patients.length === 0 ? (
        <div className="clinic-empty-state">
          <span className="clinic-empty-icon">👨‍⚕️</span>
          <h3>No Patients Registered</h3>
          <p>Please add patient details to see records</p>
        </div>
      ) : (
        <div className="clinic-patients-grid">
          {patients.map((patient) => (
  <div key={patient.id} className="clinic-patient-card">
    <div className="clinic-patient-header">
      <div
        className="clinic-patient-avatar"
        style={{ background: "#667eea" }}
      >
        {patient.name[0]}
      </div>
      <div className="clinic-patient-basic-info">
        <h3 className="clinic-patient-name">{patient.name}</h3>
        <div className="clinic-patient-meta">
          <span>Age: {patient.age}</span>
        </div>
      </div>
    </div>

    <div className="clinic-symptoms-section">
      <h4 className="clinic-symptoms-header">Symptoms</h4>
      <div className="clinic-symptoms-tags">
        {patient.symptoms.map((sym, index) => (
          <span key={index} className="clinic-symptom-tag">
            <span className="clinic-symptom-tag-icon">⚡</span>
            {sym}
          </span>
        ))}
      </div>
    </div>

    <div className="clinic-medicine-section">
      <h4 className="clinic-medicine-header">Medicine</h4>
      <div className="clinic-medicine-content">
        <p>{patient.medicine}</p>
      </div>
    </div>

    {/* ✅ Remedies Section */}
    <div className="clinic-address-section">
      <h4 className="clinic-address-header">Home Remedies</h4>
      <div className="clinic-address-content">
        <p>{patient.remedies}</p>
      </div>
    </div>
  </div>
))}

        </div>
      )}
    </section>
  );
}
