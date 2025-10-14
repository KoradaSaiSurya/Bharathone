import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="home-hero">
        <div className="home-text-img">
          <div className="home-text-header">
            <h1>Hi ! Welcome to BharathOne </h1>
            <p className="home-sub">
              One platform for Farmers 👨‍🌾, Students 🎓, Patients 🏥, and Citizens 🏛
            </p>
          </div>

          <div className="hero-image">
            <img src="/images/home-3d-img2.webp" alt="BharathOne hero" />
          </div>
        </div>
      </header>

      <div className="home-icons">
        <div className="icon-item">
          <Link to="/agriculture">
            <img src="/images/plant-3d-1.webp" alt="Agriculture" />
            <span>Agriculture</span>
          </Link>
        </div>
        <div className="icon-item">
          <Link to="/edtech">
            <img src="/images/edu.webp" alt="Education" />
            <span>Education</span>
          </Link>
        </div>
        <div className="icon-item">
          <Link to="/mainServices">
            <img src="/images/gov.png" alt="Government" />
            <span>Government</span>
          </Link>
        </div>
        <div className="icon-item">
          <Link to="/health">
            <img src="/images/health.webp" alt="Health" />
            <span>Health</span>
          </Link>
        </div>
      </div>

      <section className="home-cards">
        <div className="home-card agri" onClick={() => navigate("/agriculture")}>
          <h2>🌱 AgriTech</h2>
          <p>
            Smart farming tools, crop disease detection, market prices & weather
            updates for farmers.
          </p>
          <button>Explore</button>
        </div>

        <div className="home-card gov" onClick={() => navigate("/mainServices")}>
          <h2>🏛 GovTech</h2>
          <p>
            Government schemes, e-services, bill payments & citizen support at
            one place.
          </p>
          <button>Explore</button>
        </div>

        <div className="home-card health" onClick={() => navigate("/health")}>
          <h2>🏥 HealthTech</h2>
          <p>
            Online doctor consultations, health records & medicine suggestions
            for patients.
          </p>
          <button>Explore</button>
        </div>

        <div className="home-card edu" onClick={() => navigate("/edTech")}>
          <h2>🎓 EdTech</h2>
          <p>
            Courses, study materials, live classes & career guidance for
            students.
          </p>
          <button>Explore</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
