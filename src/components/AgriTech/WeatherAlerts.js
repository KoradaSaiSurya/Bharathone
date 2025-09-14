// // src/components/AgriTech/WeatherAlerts.js
// import React, { useEffect, useState } from 'react';
// import API from '../../utils/api';

// const WeatherAlerts = () => {
//   const [alerts, setAlerts] = useState([]);

//   const fetchAlerts = async () => {
//     try {
//       const res = await API.get('/weather');
//       setAlerts(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchAlerts();
//   }, []);

//   return (
//     <div className="weather-alerts">
//       <h2>Weather Alerts 🌦️</h2>
//       {alerts.length === 0 ? (
//         <p>No alerts</p>
//       ) : (
//         alerts.map(alert => (
//           <div key={alert._id} className={`alert ${alert.severity}`}>
//             <p><b>{alert.location}:</b> {alert.alert}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default WeatherAlerts;
