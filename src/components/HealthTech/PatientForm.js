import React, { useState } from "react";

export default function PatientForm({ onAddPatient }) {
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const symptomsList = [
    { name: "Fever", icon: "🌡️" },
    { name: "Cough", icon: "🤒" },
    { name: "Headache", icon: "🧠" },
    { name: "Stomach Pain", icon: "🤢" },
    { name: "Cold", icon: "🤧" },
    { name: "Body Ache", icon: "💪" },
    { name: "Sore Throat", icon: "😷" },
    { name: "Fatigue", icon: "😴" },
    { name: "Nausea", icon: "🤮" },
    { name: "Diarrhea", icon: "💩" },
    { name: "Vomiting", icon: "🤮" },
    { name: "Shortness of Breath", icon: "😤" },
    { name: "Chest Pain", icon: "❤️‍🩹" },
    { name: "Dizziness", icon: "💫" },
    { name: "Rash", icon: "🩹" },
    { name: "Itching", icon: "🤏" },
    { name: "Sweating", icon: "💦" },
    { name: "Chills", icon: "🥶" },
    { name: "Back Pain", icon: "🦴" },
    { name: "Joint Pain", icon: "🦵" },
    { name: "Loss of Appetite", icon: "🥄" },
    { name: "Blurred Vision", icon: "👁️" },
    { name: "Ear Pain", icon: "👂" },
    { name: "Nasal Congestion", icon: "👃" },
    { name: "Sneezing", icon: "🤧" },
    { name: "Cramps", icon: "🦵" },
    { name: "Insomnia", icon: "🌙" },
    { name: "Anxiety", icon: "😰" },
    { name: "Depression", icon: "😔" },
    { name: "Palpitations", icon: "💓" },
    { name: "Tremors", icon: "🤲" },
    { name: "Swelling", icon: "🫀" },
    { name: "Hair Loss", icon: "💇" },
    { name: "Numbness", icon: "✋" },
    { name: "Weight Loss", icon: "⚖️" },
    { name: "Weight Gain", icon: "⚖️" },
    { name: "Fainting", icon: "😵" },
    { name: "Memory Loss", icon: "🧠" },
    { name: "Confusion", icon: "🤯" },
    { name: "Depigmentation", icon: "⚪" },
    { name: "Yellowing Skin", icon: "🟡" },
    { name: "Bleeding", icon: "🩸" },
    { name: "Coughing Blood", icon: "🩸" },
    { name: "Frequent Urination", icon: "🚽" },
    { name: "Thirst", icon: "🥤" },
    { name: "Frequent Headache", icon: "🧠" },
    { name: "Abdominal Swelling", icon: "🤰" },
    { name: "Leg Pain", icon: "🦵" },
    { name: "Eye Irritation", icon: "👁️‍🗨️" }
  ];

  const medicineForSymptoms = {
    "Fever": "Paracetamol 500mg",
    "Cough": "Cough Syrup 5ml",
    "Headache": "Ibuprofen 200mg",
    "Stomach Pain": "Antacid Tablet",
    "Cold": "Antihistamine 10mg",
    "Body Ache": "Paracetamol 500mg",
    "Sore Throat": "Lozenges 2pcs",
    "Fatigue": "Vitamin B Complex",
    "Nausea": "Ondansetron 4mg",
    "Diarrhea": "Oral Rehydration Solution",
    "Vomiting": "Domperidone 10mg",
    "Shortness of Breath": "Salbutamol Inhaler",
    "Chest Pain": "Aspirin 75mg",
    "Dizziness": "Meclizine 25mg",
    "Rash": "Hydrocortisone Cream",
    "Itching": "Antihistamine 10mg",
    "Sweating": "Beta Blocker (if needed)",
    "Chills": "Paracetamol 500mg",
    "Back Pain": "Muscle Relaxant",
    "Joint Pain": "Ibuprofen 200mg",
    "Loss of Appetite": "Multivitamin",
    "Blurred Vision": "Eye Drops",
    "Ear Pain": "Ear Drops",
    "Nasal Congestion": "Nasal Decongestant",
    "Sneezing": "Antihistamine 10mg",
    "Cramps": "Calcium + Magnesium",
    "Insomnia": "Melatonin 3mg",
    "Anxiety": "Benzodiazepine (short term)",
    "Depression": "SSRI (consult doctor)",
    "Palpitations": "Beta Blocker",
    "Tremors": "Propranolol",
    "Swelling": "Diuretic (if prescribed)",
    "Hair Loss": "Biotin Supplement",
    "Numbness": "Vitamin B12",
    "Weight Loss": "High-calorie diet",
    "Weight Gain": "Diet Control + Exercise",
    "Fainting": "Electrolyte Solution",
    "Memory Loss": "Cognitive Supplements",
    "Confusion": "Check Electrolytes / Hydration",
    "Depigmentation": "Topical Steroid Cream",
    "Yellowing Skin": "Liver Function Test / Treat Cause",
    "Bleeding": "Vitamin K / Hemostatic",
    "Coughing Blood": "Immediate Medical Attention",
    "Frequent Urination": "Check Blood Sugar / Treat Cause",
    "Thirst": "Hydration / Diabetes Check",
    "Frequent Headache": "Ibuprofen 200mg",
    "Abdominal Swelling": "Diuretics / Treat Cause",
    "Leg Pain": "NSAID / Rest",
    "Eye Irritation": "Lubricating Eye Drops"
  };

  const homeRemedies = {
  "Fever": "Drink plenty of fluids, rest, and use lukewarm sponge bath",
  "Cough": "Honey with warm water, ginger tea, steam inhalation",
  "Headache": "Drink water, rest in dark room, light massage",
  "Stomach Pain": "Ginger tea, warm compress on stomach",
  "Cold": "Steam inhalation, warm fluids, vitamin C rich foods",
  "Body Ache": "Warm bath, gentle stretching, hydration",
  "Sore Throat": "Salt water gargle, warm honey lemon drink",
  "Fatigue": "Balanced diet, short naps, moderate exercise",
  "Nausea": "Ginger, peppermint tea, small frequent meals",
  "Diarrhea": "Oral rehydration solution, banana, toast",
  "Vomiting": "Sip water slowly, ginger tea, rest",
  "Shortness of Breath": "Breathing exercises, calm environment",
  "Chest Pain": "Seek immediate medical attention",
  "Dizziness": "Sit/lie down, hydrate, avoid sudden movements",
  "Rash": "Cool compress, avoid irritants, loose clothing",
  "Itching": "Oatmeal bath, moisturizer, avoid scratching",
  "Sweating": "Stay hydrated, breathable clothing",
  "Chills": "Warm clothing, warm fluids",
  "Back Pain": "Gentle stretching, heat therapy",
  "Joint Pain": "Rest, gentle exercise, warm compress",
  "Loss of Appetite": "Light, nutritious meals, small portions",
  "Blurred Vision": "Eye rest, consult ophthalmologist",
  "Ear Pain": "Warm compress outside ear, avoid poking",
  "Nasal Congestion": "Steam inhalation, saline drops",
  "Sneezing": "Avoid allergens, nasal rinse",
  "Cramps": "Stretching, hydration, magnesium-rich foods",
  "Insomnia": "Avoid screens, warm bath, herbal tea",
  "Anxiety": "Deep breathing, meditation, talk to someone",
  "Depression": "Exercise, social interaction, professional help",
  "Palpitations": "Avoid caffeine, rest, stress management",
  "Tremors": "Reduce stress, adequate sleep, medical check",
  "Swelling": "Elevation, reduce salt intake, gentle exercise",
  "Hair Loss": "Balanced diet, gentle hair care",
  "Numbness": "Stretching, keep warm, medical check",
  "Weight Loss": "Calorie-rich diet, small frequent meals",
  "Weight Gain": "Exercise, balanced diet, portion control",
  "Fainting": "Lie down, hydrate, avoid sudden standing",
  "Memory Loss": "Mental exercises, proper sleep, healthy diet",
  "Confusion": "Hydrate, rest, seek medical evaluation",
  "Depigmentation": "Moisturize, sun protection, consult dermatologist",
  "Yellowing Skin": "Consult doctor, monitor liver function",
  "Bleeding": "Apply pressure, seek medical attention",
  "Coughing Blood": "Immediate medical attention",
  "Frequent Urination": "Hydrate, check for diabetes or UTI",
  "Thirst": "Drink water, check blood sugar if needed",
  "Frequent Headache": "Hydrate, rest, reduce screen time",
  "Abdominal Swelling": "Avoid heavy meals, consult doctor",
  "Leg Pain": "Stretch, elevate legs, gentle massage",
  "Eye Irritation": "Lubricating drops, rest eyes, avoid dust"
};


  const handleSubmit = (e) => {
    e.preventDefault();

    if(selectedSymptoms.length === 0){
      alert("Please select at least one symptom!");
      return;
    }

    const newPatient = {
  id: Date.now(),
  name: patientName,
  age: patientAge,
  symptoms: selectedSymptoms,
  medicine: selectedSymptoms.map(symptom => medicineForSymptoms[symptom] || "Paracetamol 500mg").join(", "),
  remedies: selectedSymptoms.map(symptom => homeRemedies[symptom] || "Drink water and rest").join(" | ")
};


    onAddPatient(newPatient);

    // Reset form
    setPatientName("");
    setPatientAge("");
    setSelectedSymptoms([]);

    // Show side alert
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // 3 seconds
  };

  const toggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  return (
    <section className="medical-registration-section">
      {/* ✅ Side Alert */}
      {showAlert && (
        <div className="side-alert">
          ✅ Patient Registered Successfully!
        </div>
      )}

      <div className="medical-registration-header">
        <span className="medical-registration-icon">📝</span>
        <div>
          <h2 className="medical-registration-title">Patient Registration</h2>
          <p className="medical-registration-subtitle">
            Fill details to register a new patient
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="medical-form-grid">
          <div className="medical-form-row">
            <div className="medical-input-group">
              <label className="medical-input-label">👤 Patient Name *</label>
              <input
                type="text"
                className="medical-form-input"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
              />
            </div>

            <div className="medical-input-group">
              <label className="medical-input-label">📅 Age *</label>
              <input
                type="number"
                className="medical-form-input"
                value={patientAge}
                onChange={(e) => setPatientAge(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        {/* Symptoms Selection */}
        <div className="medical-symptoms-section">
          <h3 className="medical-symptoms-title">Select Symptoms</h3>
          <div className="medical-symptoms-grid">
            {symptomsList.map((symptom) => (
              <div
                key={symptom.name}
                className={`medical-symptom-card ${
                  selectedSymptoms.includes(symptom.name)
                    ? "medical-symptom-selected"
                    : ""
                }`}
                onClick={() => toggleSymptom(symptom.name)}
              >
                <span className="medical-symptom-icon">{symptom.icon}</span>
                <span className="medical-symptom-name">{symptom.name}</span>
                {selectedSymptoms.includes(symptom.name) && (
                  <span className="medical-symptom-check">✔</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="medical-submit-btn">
          Register Patient
        </button>
      </form>
      
    </section>
  );
}
