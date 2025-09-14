import React from "react";
import { FaDownload, FaSearch, FaEdit, FaCalendarCheck, FaKey, FaShieldAlt, FaUserLock, FaLock, FaSignInAlt } from "react-icons/fa";

const aadhaarServices = [
  { title: "Download Aadhaar", link: "https://myaadhaar.uidai.gov.in/genricDownloadAadhaar", icon: <FaDownload /> },
  { title: "Check Aadhaar Status", link: "https://myaadhaar.uidai.gov.in/CheckAadhaarStatus", icon: <FaSearch /> },
  { title: "Update Aadhaar Online", link: "https://myaadhaar.uidai.gov.in/UpdateAadhaar", icon: <FaEdit /> },
  { title: "Book Aadhaar Appointment", link: "https://appointments.uidai.gov.in/bookappointment.aspx", icon: <FaCalendarCheck /> },
  { title: "Retrieve Lost Aadhaar", link: "https://myaadhaar.uidai.gov.in/retrieve-eid-uid", icon: <FaKey /> },
  { title: "Verify Aadhaar Number", link: "https://myaadhaar.uidai.gov.in/verifyAadhaar", icon: <FaShieldAlt /> },
  { title: "VID Generator", link: "https://myaadhaar.uidai.gov.in/vidgeneration", icon: <FaUserLock /> },
  { title: "Lock/Unlock Aadhaar", link: "https://resident.uidai.gov.in/aadhaar-lockunlock", icon: <FaLock /> },
  { title: "Aadhaar Services OTP Login", link: "https://myaadhaar.uidai.gov.in/login", icon: <FaSignInAlt /> },
];

function AadhaarServices() {
  return (
    <div className="container2">
      <h1 className="title2">Aadhaar Services</h1>
      <p className="subtitle2">Access all Aadhaar related services online</p>
      <div className="cards-grid2">
        {aadhaarServices.map((service, index) => (
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

export default AadhaarServices;
