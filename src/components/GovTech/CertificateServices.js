import React from "react";
import { FaRupeeSign, FaUsers, FaHome, FaSearch } from "react-icons/fa";

const certificateServices = [
  { title: "Apply Income Certificate", link: "https://ap.meeseva.gov.in/DeptPortal/UserInterface/LoginForm.aspx", icon: <FaRupeeSign /> },
  { title: "Apply Caste Certificate", link: "https://ap.meeseva.gov.in/DeptPortal/UserInterface/LoginForm.aspx", icon: <FaUsers /> },
  { title: "Apply Residence Certificate", link: "https://ap.meeseva.gov.in/DeptPortal/UserInterface/LoginForm.aspx", icon: <FaHome /> },
  { title: "Check Certificate Status", link: "https://ap.meeseva.gov.in/DeptPortal/UserInterface/LoginForm.aspx", icon: <FaSearch /> },
];

function CertificateServices() {
  return (
    <div className="container2">
      <h1 className="title2">MeeSeva Certificates</h1>
      <p className="subtitle2">Apply and manage your government certificates online</p>
      <div className="cards-grid2">
        {certificateServices.map((service, index) => (
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

export default CertificateServices;
