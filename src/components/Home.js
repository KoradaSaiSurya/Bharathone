// src/components/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="hero">
        <h1>🌏 Welcome to BharathOne 🚀</h1>
        <p>One platform for Farmers 👨‍🌾, Students 🎓, Patients 🏥, and Citizens 🏛</p>
      </header>

      <section className="cards">
        <div className="card agri" onClick={() => navigate("/agriculture")}>
          <h2>🌱 AgriTech</h2>
          <p>Smart farming tools, crop disease detection, market prices & weather updates for farmers.</p>
          <button >Explore AgriTech</button>
        </div>

        <div className="card gov" onClick={() => navigate("/mainServices")}>
          <h2>🏛 GovTech</h2>
          <p>Government schemes, e-services, bill payments & citizen support at one place.</p>
          <button >Explore GovTech</button>
        </div>

        <div className="card health" onClick={() => navigate("/health")}>
          <h2>🏥 HealthTech</h2>
          <p>Online doctor consultations, health records & medicine suggestions for patients.</p>
          <button >Explore HealthTech</button>
        </div>

        <div className="card edu" onClick={() => navigate("/edTech")}>
          <h2>🎓 EdTech</h2>
          <p>Courses, study materials, live classes & career guidance for students.</p>
          <button >Explore EdTech</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
