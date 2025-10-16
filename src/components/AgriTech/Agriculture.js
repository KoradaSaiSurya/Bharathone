import React from 'react'

const Agriculture = (onGo) => {
  return (
    <div>
     
    <section className="hero1">
      <div className="hero-overlay"></div>
      <div className="hero-left">
        <h1>FarmerAid</h1>
        <p>Detect plant diseases instantly. Capture a photo, get diagnosis and treatment suggestions — built for field use.</p>
        <button className="cta" onClick={onGo}>Scan a Plant</button>
        <div className="features">
          <div>📸 Offline-friendly capture</div>
          <div>💡 Practical treatment tips</div>
          <div>🌾 Farmer-friendly UI</div>
        </div>
      </div>
      <div className="hero-right">
        <img src="/images/agri-1.png" alt="Agriculture" className="hero-image" />

      </div>
    </section>

    </div>
  )
}

export default Agriculture

