// import React, { useState } from 'react';
// const FeverSelection = ({ patient, onMedicineGenerated }) => {
//   const [selectedSymptoms, setSelectedSymptoms] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const symptoms = [
//     { id: 'fever', name: 'High Fever', icon: '🔥' },
//     { id: 'headache', name: 'Headache', icon: '🤕' },
//     { id: 'cough', name: 'Cough', icon: '😷' },
//     { id: 'cold', name: 'Cold', icon: '🤧' },
//     { id: 'bodyache', name: 'Body Ache', icon: '💪' },
//     { id: 'nausea', name: 'Nausea', icon: '🤢' }
//   ];

//   const medicineDatabase = {
//     fever: ['Paracetamol 500mg', 'Ibuprofen 400mg'],
//     headache: ['Aspirin 325mg', 'Paracetamol 500mg'],
//     cough: ['Dextromethorphan 15mg', 'Honey-based syrup'],
//     cold: ['Cetirizine 10mg', 'Phenylephrine 10mg'],
//     bodyache: ['Ibuprofen 400mg', 'Diclofenac 50mg'],
//     nausea: ['Ondansetron 4mg', 'Domperidone 10mg']
//   };

//   const toggleSymptom = (symptomId) => {
//     if (!patient) {
//       alert('Please register a patient first');
//       return;
//     }

//     setSelectedSymptoms(prev => 
//       prev.includes(symptomId) 
//         ? prev.filter(s => s !== symptomId)
//         : [...prev, symptomId]
//     );
//   };

//   const generateMedicine = () => {
//     if (!patient) {
//       alert('Please register a patient first');
//       return;
//     }

//     if (selectedSymptoms.length === 0) {
//       alert('Please select at least one symptom');
//       return;
//     }

//     setIsLoading(true);

//     setTimeout(() => {
//       let medicines = [];
//       selectedSymptoms.forEach(symptom => {
//         if (medicineDatabase[symptom]) {
//           medicines.push(...medicineDatabase[symptom]);
//         }
//       });

//       medicines = [...new Set(medicines)];
//       const medicineText = medicines.join(', ');

//       onMedicineGenerated(patient.id, selectedSymptoms, medicineText);
//       alert(`Medicine Generated: ${medicineText}`);
      
//       setSelectedSymptoms([]);
//       setIsLoading(false);
//     }, 1500);
//   };

//   if (!patient) {
//     return (
//       <div className="fever-selection-content">
//         <div className="empty-state">
//           <div className="empty-icon">👤</div>
//           <p>Please register a patient first to select symptoms</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="fever-selection-content">
//       <div className="patient-info">
//         <h3>Current Patient</h3>
//         <p><strong>Name:</strong> {patient.name}</p>
//         <p><strong>Age:</strong> {patient.age} years</p>
//       </div>

//       <div className="symptoms-grid">
//         {symptoms.map(symptom => (
//           <div 
//             key={symptom.id}
//             className={`symptom-card ${selectedSymptoms.includes(symptom.id) ? 'selected' : ''}`}
//             onClick={() => toggleSymptom(symptom.id)}
//           >
//             <span className="symptom-icon">{symptom.icon}</span>
//             <span className="symptom-name">{symptom.name}</span>
//             {selectedSymptoms.includes(symptom.id) && (
//               <span className="check-icon">✓</span>
//             )}
//           </div>
//         ))}
//       </div>

//       <button 
//         className={`btn btn-fever ${isLoading ? 'loading' : ''}`}
//         onClick={generateMedicine}
//         disabled={isLoading || selectedSymptoms.length === 0}
//       >
//         {isLoading ? (
//           <>
//             <span className="loading-spinner"></span>
//             Generating Medicine...
//           </>
//         ) : (
//           <>
//             <span>💊</span>
//             Generate Medicine
//           </>
//         )}
//       </button>
//     </div>
//   );
// };

// export default FeverSelection;