
import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    path: "/aadhaarServices",
    icon: "🆔",
    title: "Aadhaar Services",
    desc: "Complete Aadhaar management including enrollment, updates, and verification services",
    features: [
      "New Aadhaar enrollment",
      "Demographic updates",
      "Mobile & email updates",
      "Download e-Aadhaar",
    ],
  },
  {
    path: "/panServices",
    icon: "💳",
    title: "PAN Services",
    desc: "Permanent Account Number services for tax identification and financial transactions",
    features: [
      "New PAN application",
      "PAN corrections",
      "Duplicate PAN card",
      "PAN verification",
    ],
  },
  {
    path: "/voterServices",
    icon: "🗳️",
    title: "Voter ID Services",
    desc: "Electoral services for voter registration and election participation",
    features: [
      "New voter registration",
      "Voter ID corrections",
      "Polling booth details",
      "Election information",
    ],
  },
  {
    path: "/rationServices",
    icon: "🌾",
    title: "Ration Card Services",
    desc: "Public Distribution System services for subsidized food grains and essentials",
    features: [
      "New ration card",
      "Family member addition",
      "Card modifications",
      "Fair price shop locator",
    ],
  },
  {
    path: "/electricityServices",
    icon: "⚡",
    title: "Electricity Bill Services",
    desc: "Power utility services including bill payments and connection management",
    features: [
      "Bill payment & history",
      "New connections",
      "Load enhancement",
      "Outage reporting",
    ],
  },
  {
    path: "/certificateServices",
    icon: "📜",
    title: "Certificate Services",
    desc: "Official government certificates and document verification services",
    features: [
      "Birth certificates",
      "Death certificates",
      "Caste certificates",
      "Income certificates",
    ],
  },
  {
    path: "/licenseServices",
    icon: "🚗",
    title: "License Services",
    desc: "Driving license and vehicle registration services for transportation needs",
    features: [
      "Driving license renewal",
      "Vehicle registration",
      "License verification",
      "Fitness certificates",
    ],
  },
  {
    path: "/pensionServices",
    icon: "👴",
    title: "Pension Services",
    desc: "Social security and pension management for senior citizens and beneficiaries",
    features: [
      "Pension applications",
      "Payment status",
      "Beneficiary updates",
      "Pension certificates",
    ],
  },
];

export default function GoTech() {
  const navigate = useNavigate(); // ✅ hook for navigation

  return (
    <div className="container1">
      {/* Header */}
      <header className="header">
        <h1 className="title">GovermentTech</h1>
        <p className="subtitle">
          Empowering Citizens Through Digital Government Services – Andhra
          Pradesh's Gateway to Seamless Public Services
        </p>

        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-number">2M+</span>
            <div className="stat-label">Citizens Served</div>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <div className="stat-label">Digital Services</div>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <div className="stat-label">Available</div>
          </div>
        </div>
      </header>

      {/* Cards */}
      <div className="cards-grid">
        {services.map((s) => (
          <div key={s.path} className="card">
            <div className="card-icon">{s.icon}</div>
            <h2 className="card-title">{s.title}</h2>
            <p className="card-description">{s.desc}</p>
            <ul className="card-feature">
              {s.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            {/* 🔑 Navigate directly on button click */}
            <button
              className="card-button"
              onClick={() => navigate(s.path)}
            >
              Access Services
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}



           