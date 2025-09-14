import React from "react";  
import { Link } from "react-router-dom";
import { FaHome, FaLeaf, FaBook, FaHospital, FaUniversity } from "react-icons/fa";

function Navbar() {
  return (
    <>
      {/* Desktop navbar unchanged */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="logo-link">BharathOne</Link>
        </div>

        <ul className="nav-links">
          <li className="nav-home">
            <Link to="/"><FaHome /> Home</Link>
          </li>
          <li className="nav-agri">
            <Link to="/agriculture"><FaLeaf /> AgriTech</Link>
          </li>
          <li className="nav-edu">
            <Link to="/edtech"><FaBook /> EdTech</Link>
          </li>
          <li className="nav-health">
            <Link to="/health"><FaHospital /> HealthTech</Link>
          </li>
          <li className="nav-gov">
            <Link to="/mainServices"><FaUniversity /> GovTech</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile bottom navbar */}
      <nav className="bottom-navbar">
        <Link to="/" className="mobile-home nav-item">
          <FaHome className="icon" />
          <span>Home</span>
        </Link>
        <Link to="/agriculture" className="mobile-agri nav-item">
          <FaLeaf className="icon" />
          <span>Agri</span>
        </Link>
        <Link to="/health" className="mobile-health nav-item">
          <FaHospital className="icon" />
          <span>Health</span>
        </Link>
        <Link to="/edtech" className="mobile-edtech nav-item">
          <FaBook className="icon" />
          <span>EdTech</span>
        </Link>
        <Link to="/mainServices" className="mobile-gov nav-item">
          <FaUniversity className="icon" />
          <span>GovTech</span>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
