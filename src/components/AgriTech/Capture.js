import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { diagnoseImage } from '../../utils/api';

export default function Capture() {
  const fileRef = useRef();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  function onFileChange(e) {
    const f = e.target.files[0];
    if (!f) return;
    setPreview(URL.createObjectURL(f));
  }

  async function send() {
    const f = fileRef.current.files[0];
    if (!f) return alert('Pick an image first');
    setLoading(true);
    try {
     
      const res = await diagnoseImage(f);
      console.log("DIAGNOSE RESPONSE:", res);
      navigate("/result", { state: { diagnosis: res } });
      
    } catch (err) {
      alert('Error diagnosing. See console');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="capture">
      <button className="back" onClick={() => navigate(-1)}>↩ Back</button>
      <div className="capture-grid">
        <div className="capture-left">
          <label className="camera-box">
            {preview ? <img src={preview} alt="preview" /> : <div className="hint">Click to choose/take photo</div>}
            <input type="file" accept="image/*" ref={fileRef} onChange={onFileChange} />
          </label>
          <div className="controls">
            <button onClick={send} disabled={loading}>
              {loading ? 'Analyzing...' : 'Diagnose'}
            </button>
          </div>
        </div>
        <div className="capture-right">
          <h3>Tips for good detection</h3>
          <ul>
            <li>Take close-up of affected leaf/fruit (one object in frame)</li>
            <li>Avoid backlight; daylight is best</li>
            <li>Capture multiple angles if possible</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
