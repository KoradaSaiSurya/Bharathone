
import React, { useState } from 'react';
import PatientForm from './PatientForm';
import PatientList from './PatientList';

const App = () => {
  const [patients, setPatients] = useState([]);

  const handlePatientAdd = (newPatient) => {
    setPatients(prev => [...prev, newPatient]);
  };

  const today = new Date().toLocaleDateString();
  const todayRegistrations = patients.filter(p => p.registeredAt === today).length;
  const activeTreatments = patients.filter(p => p.treatment).length;

  return (
    <div className="healthcare-main-container">
      <div className="healthcare-bg-decoration">
        <div className="healthcare-floating-shape healthcare-shape-primary"></div>
        <div className="healthcare-floating-shape healthcare-shape-secondary"></div>
        <div className="healthcare-floating-shape healthcare-shape-tertiary"></div>
        <div className="healthcare-floating-shape healthcare-shape-quaternary"></div>
      </div>

      <div className="healthcare-main-header">
        <h1 className="healthcare-main-title">🏥 Advanced Healthcare System</h1>
        <p className="healthcare-main-subtitle">Complete Patient Management & Medical Care Platform</p>
        <div className="healthcare-stats-bar">
          <div className="healthcare-stat-item">
            <span className="healthcare-stat-number">{patients.length}</span>
            <span className="healthcare-stat-label">Total Patients</span>
          </div>
          <div className="healthcare-stat-item">
            <span className="healthcare-stat-number">{todayRegistrations}</span>
            <span className="healthcare-stat-label">Today's Registrations</span>
          </div>
          <div className="healthcare-stat-item">
            <span className="healthcare-stat-number">{activeTreatments}</span>
            <span className="healthcare-stat-label">Active Treatments</span>
          </div>
        </div>
      </div>

      <div className="healthcare-dashboard-container">
        <PatientForm onPatientAdd={handlePatientAdd} />
        <PatientList patients={patients} />
      </div>
    </div>
  );
};

export default App;






















