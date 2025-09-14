import React from "react";
import { FaRupeeSign, FaUserShield, FaHandsHelping } from "react-icons/fa";

const pensionServices = [
  { title: "Pension Status", link: "https://sspensions.ap.gov.in/", icon: <FaRupeeSign /> },
  { title: "Pensioners Login", link: "https://sspensions.ap.gov.in/SSP/Loginpage.aspx", icon: <FaUserShield /> },
  { title: "Grievance Redressal", link: "https://sspensions.ap.gov.in/SSP/Grievance.aspx", icon: <FaHandsHelping /> },
];

function PensionServices() {
  return (
    <div className="container2">
      <h1 className="title2">Pension Services</h1>
      <p className="subtitle2">Easily access pension-related services online</p>
      <div className="cards-grid2">
        {pensionServices.map((service, index) => (
          <div
            key={index}
            className="card2"
            onClick={() => window.open(service.link, "_blank")}
          >
            <div className="icon2">{service.icon}</div>
            <h2>{service.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PensionServices;
