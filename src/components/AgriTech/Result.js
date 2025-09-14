import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const diagnosis = location.state?.diagnosis;

  const handleScanAnother = () => {
    navigate("/capture");
  };

  // No diagnosis case
  if (!diagnosis) {
    return (
      <div className="result">
        <div className="no-result">
          <h2>No result to show</h2>
          <p>Try scanning a plant.</p>
          <button className="scan-button" onClick={handleScanAnother}>
            🔍 Scan Again
          </button>
        </div>
      </div>
    );
  }

  const disease = diagnosis.info;

  // No detailed disease info case
  if (!disease) {
    return (
      <div className="result">
        <h2>🌿 Diagnosis Result</h2>
        <div className="cards">
          <div className="card1">
            <h3>🦠 Disease</h3>
            <p>{diagnosis.predicted || "Not detected"}</p>
          </div>
          <div className="card1">
            <h3>📋 Description</h3>
            <p>No detailed info found in database.</p>
          </div>
        </div>
        <button className="scan-button" onClick={handleScanAnother}>
          🔍 Scan Another Plant
        </button>
      </div>
    );
  }

  // Full diagnosis result
  return (
    <div className="result">
      <h2>🌿 Plant Disease Diagnosis Result</h2>
      <div className="cards">
        <div className="card1">
          <h3>🦠 Disease</h3>
          <p>{disease.name || "Not detected"}</p>
        </div>

        <div className="card1">
          <h3>📋 Description</h3>
          <p>{disease.description || "No description"}</p>
        </div>

        <div className="card1">
          <h3>📊 Confidence</h3>
          <p>{disease.confidence ? `${disease.confidence}%` : "N/A"}</p>
        </div>

        <div className="card1">
          <h3>💊 Treatment Suggestions</h3>
          <ul>
            {disease.tips && disease.tips.length > 0 ? (
              disease.tips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))
            ) : (
              <li>{disease.solution || "No treatment suggestions found."}</li>
            )}
          </ul>
        </div>

        <div className="card1">
          <h3>ℹ️ Extra Info</h3>
          <p>{disease.more || "No extra info available"}</p>
        </div>
      </div>

      <button className="scan-button" onClick={handleScanAnother}>
        🔍 Scan Another Plant
      </button>
    </div>
  );
}