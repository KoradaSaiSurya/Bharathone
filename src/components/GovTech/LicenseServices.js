import React from "react";
import { FaCar, FaRedo, FaSearch } from "react-icons/fa";

const licenseServices = [
  { title: "Apply New License", link: "https://parivahan.gov.in/parivahan/", icon: <FaCar /> },
  { title: "Renew Driving License", link: "https://parivahan.gov.in/parivahan/", icon: <FaRedo /> },
  { title: "Check Application Status", link: "https://parivahan.gov.in/parivahan/", icon: <FaSearch /> },
];

function LicenseServices() {
  return (
    <div className="container2">
      <h1 className="title2">Driving License Services</h1>
      <p className="subtitle2">Apply, renew, or check your driving license online</p>
      <div className="cards-grid2">
        {licenseServices.map((service, index) => (
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

export default LicenseServices;
