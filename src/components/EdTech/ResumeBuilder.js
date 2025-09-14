import React, { useState } from "react";

function ResumeBuilder() {
  const [resume, setResume] = useState({ name: "", email: "", skills: "", experience: "" });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    setPreview(resume);
  };

  return (
    <div className="edtech-container">
      <h2>📝 Resume Builder</h2>
      <form className="resume-form">
        <input type="text" name="name" placeholder="Your Name" value={resume.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={resume.email} onChange={handleChange} />
        <input type="text" name="skills" placeholder="Skills (comma separated)" value={resume.skills} onChange={handleChange} />
        <textarea name="experience" placeholder="Experience" value={resume.experience} onChange={handleChange}></textarea>
        <button type="button" onClick={handleGenerate}>Generate Resume</button>
      </form>

      {preview && (
        <div className="resume-preview">
          <h3>{preview.name}</h3>
          <p><b>Email:</b> {preview.email}</p>
          <p><b>Skills:</b> {preview.skills}</p>
          <p><b>Experience:</b> {preview.experience}</p>
        </div>
      )}
    </div>
  );
}

export default ResumeBuilder;
