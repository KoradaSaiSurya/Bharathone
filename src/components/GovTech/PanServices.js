import React from "react";
import { FaIdCard, FaRedo, FaSearch, FaUserEdit } from "react-icons/fa";

const panServices = [
  { title: "Apply for New PAN", link: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html", icon: <FaIdCard /> },
  { title: "Reprint PAN Card", link: "https://www.onlineservices.nsdl.com/paam/Reprint.html", icon: <FaRedo /> },
  { title: "Track PAN Application", link: "https://tin.tin.nsdl.com/pantan/StatusTrack.html", icon: <FaSearch /> },
  { title: "Update PAN Details", link: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html", icon: <FaUserEdit /> },
];

function PanServices() {
  return (
    <div className="container2">
      <h1 className="title2">PAN Services</h1>
      <p className="subtitle2">
        Access all official PAN card services online in one place
      </p>
      <div className="cards-grid2">
        {panServices.map((service, index) => (
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

export default PanServices;
