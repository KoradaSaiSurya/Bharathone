import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaLeaf, FaBook, FaHospital, FaUniversity } from "react-icons/fa";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleToggle = () => setMobileOpen(!mobileOpen);

  return (
    <nav className="navbar">
      <div className="logo">BharathOne</div>

      <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
        <li className="home"><Link to="/"><FaHome /> Home</Link></li>
        <li className="agri"><Link to="/agriculture"><FaLeaf /> AgriTech</Link></li>
        <li className="edu"><Link to="/edtech"><FaBook /> EdTech</Link></li>
        <li className="health"><Link to="/health"><FaHospital /> HealthTech</Link></li>
        <li className="gov"><Link to="/mainServices"><FaUniversity /> GovTech</Link></li>
      </ul>

      <div className="hamburger" onClick={handleToggle}>
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
