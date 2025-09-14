import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

// AgriTech
import Agriculture from './components/AgriTech/Agriculture';
import Capture from './components/AgriTech/Capture';
import Result from "./components/AgriTech/Result";
import DiseaseList from "./components/AgriTech/DiseaseList";

// EdTech
import Courses from "./components/EdTech/Courses";
import ResumeBuilder from "./components/EdTech/ResumeBuilder";
import Extra from "./components/EdTech/Extra";
import CourseDetails from "./components/EdTech/CourseDetails";

// HealthTech
import MedicineGuide from "./components/HealthTech/MedicineGuide";

// GovTech

import AadhaarServices from "./components/GovTech/AadhaarServices";
import MainServices from "./components/GovTech/MainServices";
import PanServices from "./components/GovTech/PanServices";
import VoterServices from "./components/GovTech/VoterServices";
import PensionServices from "./components/GovTech/PensionServices";
import CertificateServices from "./components/GovTech/CertificateServices";
import LicenseServices from "./components/GovTech/LicenseServices";

// Auth
import Login from "./pages/Login";
import Register from "./pages/Register";

// Context
import { StudentProvider } from "./context/StudentContext";
import RationServices from "./components/GovTech/RationServices";
import ElectricityServices from "./components/GovTech/ElectricityServices";

function App() {
  const navigate = useNavigate();

  return (
    <StudentProvider>
      <div
        className="app-container"
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />

        <div style={{ flex: 1 }}>
          <Routes>
            {/* Home → Capture */}
            <Route path="/" element={<Home onGo={() => navigate("/capture")} />} />

            {/* AgriTech */}
            <Route path="/agriculture" element={<Agriculture onGo={() => navigate("/capture")} />} />
            <Route path="/capture" element={<Capture />} />
            <Route path="/result" element={<Result />} />
            <Route path="/diseaseList" element={<DiseaseList />} />

            {/* EdTech */}
            <Route path="/edtech" element={<Courses />} />
            <Route path="/edtech/resume" element={<ResumeBuilder />} />
            <Route path="/extra" element={<Extra />} />
            <Route path="/courseDetails" element={<CourseDetails />} />

            {/* HealthTech */}
            <Route path="/health" element={<MedicineGuide />} />

            {/* GovTech */}
            {/* <Route path="/aadhaarServices" element={<AadhaarServices />} /> */}
            <Route path="/mainServices" element={<MainServices />} />
            
            <Route path="/aadhaarServices" element={<AadhaarServices />} />
            <Route path="/panServices" element={<PanServices />} />
            <Route path="/voterServices" element={<VoterServices />} />
            <Route path="/rationServices" element={<RationServices />} />
            <Route path="/electricityServices" element={<ElectricityServices />} />
            <Route path="/certificateServices" element={<CertificateServices />} />
            <Route path="/licenseServices" element={<LicenseServices />} />
            <Route path="/pensionServices" element={<PensionServices />} />
          


            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>

      </div>
    </StudentProvider>
  );
}

export default App;
