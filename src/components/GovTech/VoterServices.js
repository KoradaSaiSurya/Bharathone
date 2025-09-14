import React from "react";
import { FaIdBadge, FaSearch, FaDownload, FaUserEdit } from "react-icons/fa";

const voterServices = [
  { title: "Apply for Voter ID", link: "https://www.nvsp.in/", icon: <FaIdBadge /> },
  { title: "Track Application Status", link: "https://www.nvsp.in/Forms/Forms/trackstatus", icon: <FaSearch /> },
  { title: "Download e-EPIC", link: "https://www.nvsp.in/Account/Login", icon: <FaDownload /> },
  { title: "Update Voter ID Details", link: "https://www.nvsp.in/", icon: <FaUserEdit /> },
];

function VoterServices() {
  return (
    <div className="container2">
      <h1 className="title2">Voter ID Services</h1>
      <p className="subtitle2">Manage all voter ID related services online</p>
      <div className="cards-grid2">
        {voterServices.map((service, index) => (
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

export default VoterServices;
