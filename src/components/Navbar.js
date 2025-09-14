import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaLeaf,
  FaBook,
  FaHospital,
  FaUniversity
} from "react-icons/fa";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggle = () => setMobileOpen(!mobileOpen);
  const handleCloseMenu = () => setMobileOpen(false); // close helper

  return (
    <nav className="navbar">
      <div className="logo">BharathOne</div>

      <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
        <li className="home">
          <Link to="/" onClick={handleCloseMenu}>
            <FaHome /> Home
          </Link>
        </li>
        <li className="agri">
          <Link to="/agriculture" onClick={handleCloseMenu}>
            <FaLeaf /> AgriTech
          </Link>
        </li>
        <li className="edu">
          <Link to="/edtech" onClick={handleCloseMenu}>
            <FaBook /> EdTech
          </Link>
        </li>
        <li className="health">
          <Link to="/health" onClick={handleCloseMenu}>
            <FaHospital /> HealthTech
          </Link>
        </li>
        <li className="gov">
          <Link to="/mainServices" onClick={handleCloseMenu}>
            <FaUniversity /> GovTech
          </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleToggle}>
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
