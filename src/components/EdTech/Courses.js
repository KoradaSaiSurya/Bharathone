import React, { useState, useContext } from "react";
import { StudentContext } from "../../context/StudentContext";
import { useNavigate } from "react-router-dom";

const COURSES = [
  {
    id: "react-fullstack",
    title: "Full-Stack Web Development (React + Node)",
    duration: "24 Weeks",
    level: "Beginner → Advanced",
    rating: 4.9,
    about: "End-to-end path: HTML/CSS → JavaScript → React → Node/Express → MongoDB → Deployment. 6 real projects, interview kit.",
    docs: [
      { title: "Syllabus (PDF)", link: "https://example.com/react-syllabus.pdf" },
      { title: "Project Guide: Job Portal", link: "https://example.com/job-portal-guide.pdf" },
    ],
    videos: [
      { title: "React Crash Course", yt: "https://www.youtube.com/watch?v=w7ejDZ8SWv8" },
      { title: "Node.js Full Course", yt: "https://www.youtube.com/watch?v=Oe421EPjeBE" },
    ],
  },
  {
    id: "data-ai",
    title: "Data Science & AI Practicum",
    duration: "28 Weeks",
    level: "Beginner → Intermediate",
    rating: 4.8,
    about: "Python, Pandas, ML, NLP basics, mini capstone projects. Includes Kaggle practice, interview notebooks.",
    docs: [
      { title: "Syllabus (PDF)", link: "https://example.com/data-syllabus.pdf" },
      { title: "Project: Sales Forecasting", link: "https://example.com/forecast-guide.pdf" },
    ],
    videos: [
      { title: "Python for Data Science", yt: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
      { title: "Intro to Machine Learning", yt: "https://www.youtube.com/watch?v=Gv9_4yMHFhI" },
    ],
  },
  {
    id: "cp",
    title: "Competitive Programming Fast-Track",
    duration: "12 Weeks",
    level: "Beginner → Pro",
    rating: 4.7,
    about: "Problem patterns, DS & Algorithms, timed mock contests. Weekly practice + editorials.",
    docs: [
      { title: "Topics & Roadmap", link: "https://example.com/cp-roadmap.pdf" },
      { title: "Top 100 Problems", link: "https://example.com/top100.pdf" },
    ],
    videos: [
      { title: "DSA Playlist", yt: "https://www.youtube.com/watch?v=92S4zgXN17o" },
      { title: "Algorithm Patterns", yt: "https://www.youtube.com/watch?v=8hly31xKli0" },
    ],
  },
];

export default function Courses() {
  const { saveStudent, student } = useContext(StudentContext);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  function openEnroll(course) {
    setSelectedCourse(course);
    setForm({ name: student.name || "", email: student.email || "" });
    setModalOpen(true);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Please enter name and email 😊");
      return;
    }

    // Save student in context
    saveStudent({ 
      name: form.name, 
      email: form.email, 
      enrolledCourse: selectedCourse.id 
    });

    setModalOpen(false);

    // Navigate to courseDetails page with state
    navigate("/courseDetails", { state: { course: selectedCourse } });
  }

  function scrollToCourses() {
    document.getElementById("course-grid").scrollIntoView({
      behavior: "smooth"
    });
  }

  return (
    <div className="edtech-wrap">
      <header className="edtech-hero">
        <div className="hero-left">
          <h1>Learn. Build. Get Hired.</h1>
          <p className="subtitle">
            Choose a course, enter your name & email — start learning instantly.
          </p>
          <div className="hero-cta">
            <button className="cta-btn" onClick={scrollToCourses}>
              Explore Courses
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label" style={{color:"white"}}>Students</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label" style={{color:"white"}}>Job Success</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.8★</span>
              <span className="stat-label" style={{color:"white"}}>Rating</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-visual">
            <div className="floating-card card-1">
              <h4>💻 Code</h4>
              <p>Build real projects</p>
            </div>
            <div className="floating-card card-2">
              <h4>🚀 Deploy</h4>
              <p>Launch your apps</p>
            </div>
            <div className="floating-card card-3">
              <h4>💼 Hired</h4>
              <p>Land your dream job</p>
            </div>
          </div>
        </div>
      </header>

      <section className="courses-section">
        <div className="section-header">
          <h2 className="section-title">Choose Your Path</h2>
          <p className="section-subtitle">
            Industry-focused courses designed to get you job-ready with hands-on projects and real-world experience.
          </p>
        </div>

        <div id="course-grid" className="course-grid">
          {COURSES.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-header">
                <h3 className="course-title">{course.title}</h3>
                <div className="course-meta">
                  <div className="meta-item">
                    <span>⏱️</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="meta-item">
                    <span>📈</span>
                    <span>{course.level}</span>
                  </div>
                  <div className="rating">
                    <span>⭐</span>
                    <span>{course.rating}</span>
                  </div>
                </div>
              </div>

              <p className="course-about">{course.about}</p>

              <div className="course-resources">
                <div className="resource-section">
                  <h4 className="resource-title">📚 Documents</h4>
                  <div className="resource-list">
                    {course.docs.map((doc, idx) => (
                      <a 
                        key={idx} 
                        href={doc.link} 
                        className="resource-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {doc.title}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="resource-section">
                  <h4 className="resource-title">🎥 Videos</h4>
                  <div className="resource-list">
                    {course.videos.map((video, idx) => (
                      <a 
                        key={idx} 
                        href={video.yt} 
                        className="resource-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {video.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <button className="enroll-btn" onClick={() => openEnroll(course)}>
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {modalOpen && selectedCourse && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Enroll in Course</h3>
              <p className="modal-subtitle">{selectedCourse.title}</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="modal-actions">
                <button 
                  type="button" 
                  className="btn-secondary" 
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Start Learning 🚀
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
