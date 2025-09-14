import React from "react";
import { FaUtensils, FaFileAlt, FaDownload, FaEdit, FaExchangeAlt, FaExclamationCircle } from "react-icons/fa";

const rationServices = [
  { title: "Apply New Ration Card", link: "https://epdsap.ap.gov.in/epdsAP/epds", icon: <FaFileAlt /> },
  { title: "Check Ration Card Status", link: "https://epdsap.ap.gov.in/epdsAP/epds", icon: <FaUtensils /> },
  { title: "Download Ration Card", link: "https://epdsap.ap.gov.in/epdsAP/epds", icon: <FaDownload /> },
  { title: "Update Ration Card Details", link: "https://epdsap.ap.gov.in/epdsAP/epds", icon: <FaEdit /> },
  { title: "Ration Card Transactions", link: "https://epdsap.ap.gov.in/epdsAP/epds", icon: <FaExchangeAlt /> },
  { title: "Grievance / Complaint", link: "https://epdsap.ap.gov.in/epdsAP/epds", icon: <FaExclamationCircle /> },
];

function RationServices() {
  return (
    <div className="container2">
      <h1 className="title2">Ration Services</h1>
      <p className="subtitle2">Manage all ration card related services online</p>
      <div className="cards-grid2">
        {rationServices.map((service, index) => (
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

export default RationServices;
