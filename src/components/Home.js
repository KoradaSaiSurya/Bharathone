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
        <div className="card agri">
          <h2>🌱 AgriTech</h2>
          <p>Smart farming tools, crop disease detection, market prices & weather updates for farmers.</p>
          <button onClick={() => navigate("/agriculture")}>Explore AgriTech</button>
        </div>

        <div className="card gov">
          <h2>🏛 GovTech</h2>
          <p>Government schemes, e-services, bill payments & citizen support at one place.</p>
          <button onClick={() => navigate("/mainServices")}>Explore GovTech</button>
        </div>

        <div className="card health">
          <h2>🏥 HealthTech</h2>
          <p>Online doctor consultations, health records & medicine suggestions for patients.</p>
          <button onClick={() => navigate("/health")}>Explore HealthTech</button>
        </div>

        <div className="card edu">
          <h2>🎓 EdTech</h2>
          <p>Courses, study materials, live classes & career guidance for students.</p>
          <button onClick={() => navigate("/edtech")}>Explore EdTech</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
