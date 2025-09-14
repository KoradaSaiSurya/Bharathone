import React from "react";
import { FaBolt, FaMoneyBillWave, FaCreditCard, FaPlug, FaSearch } from "react-icons/fa";

const electricityServices = [
  { title: "APSPDCL Bill Payment", link: "https://www.billdesk.com/pgidsk/pgmerc/apspdcl/APSPDCLDetails.jsp", icon: <FaMoneyBillWave /> },
  { title: "APEPDCL Bill Payment", link: "https://www.apeasternpower.com/view/payBillOnline", icon: <FaCreditCard /> },
  { title: "APSPDCL Quick Pay", link: "https://www.apspdcl.in/", icon: <FaBolt /> },
  { title: "APEPDCL Quick Pay", link: "https://www.apeasternpower.com/", icon: <FaPlug /> },
  { title: "Track Bill Payment Status", link: "https://www.apspdcl.in/", icon: <FaSearch /> },
];

function ElectricityServices() {
  return (
    <div className="container2">
      <h1 className="title2">Electricity Bill Services</h1>
      <p className="subtitle2">Pay and manage your electricity bills online</p>
      <div className="cards-grid2">
        {electricityServices.map((service, index) => (
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

export default ElectricityServices;
