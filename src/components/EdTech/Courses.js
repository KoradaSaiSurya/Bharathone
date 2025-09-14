import React, { useState, useContext } from "react";
import { StudentContext } from "../../context/StudentContext";
import { useNavigate } from "react-router-dom";

const COURSES = [
  {
    id: "python-stack",
    title: "Python Stack Development",
    duration: "Self-paced",
    level: "Beginner → Advanced",
    rating: 4.8,
    about: "Python, Django, HTML/CSS, JavaScript, SQL. Hands-on projects for web apps.",
    docs: [
      { title: "Python Syllabus", link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/python-stack" },
      { title: "Django Project Guide", link: "https://www.youtube.com/watch?v=F5mRW0jo-U4" },
    ],
    videos: [
      { title: "Python Basics", yt: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
      { title: "Django Crash Course", yt: "https://www.youtube.com/watch?v=F5mRW0jo-U4" },
    ],
  },
  {
    id: "java-fullstack",
    title: "Java Full Stack Developer",
    duration: "Self-paced",
    level: "Beginner → Advanced",
    rating: 4.7,
    about: "Java, Spring Boot, Hibernate, MySQL, HTML/CSS, JavaScript. Build real projects.",
    docs: [
      { title: "Java Full Stack Syllabus", link: "https://www.simplilearn.com/free-full-stack-java-developer-course-skillup" },
      { title: "Spring Boot Guide", link: "https://www.youtube.com/watch?v=vtPkZShrvXQ" },
    ],
    videos: [
      { title: "Java Full Stack Intro", yt: "https://www.youtube.com/watch?v=2u-2yN5bZ60" },
    ],
  },
  {
    id: "mern-stack",
    title: "MERN Stack Fundamentals",
    duration: "6 hours",
    level: "Beginner → Intermediate",
    rating: 4.8,
    about: "MongoDB, Express.js, React, Node.js. Full-stack JavaScript projects.",
    docs: [
      { title: "MERN Syllabus", link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/mern-stack-fundamentals" },
    ],
    videos: [
      { title: "MERN Crash Course", yt: "https://www.youtube.com/watch?v=7CqJlxBYj-M" },
    ],
  },
  {
    id: "fullstack-js",
    title: "Full Stack JavaScript Path",
    duration: "Self-paced",
    level: "Beginner → Advanced",
    rating: 4.7,
    about: "HTML/CSS, JavaScript, Node.js, Express.js, MongoDB. Projects included.",
    docs: [
      { title: "Full Stack JS Syllabus", link: "https://www.theodinproject.com/paths/full-stack-javascript" },
    ],
    videos: [
      { title: "JS Full Stack", yt: "https://www.youtube.com/watch?v=4m9RsdRO-Vo" },
    ],
  },
  {
    id: "django-stack",
    title: "Full Stack Web Development with Python & Django",
    duration: "74+ hours",
    level: "Beginner → Advanced",
    rating: 4.8,
    about: "HTML/CSS, JavaScript, Python, Django, SQL. Real-world projects included.",
    docs: [
      { title: "Django Syllabus", link: "https://www.springboard.com/resources/learning-paths/web-development-python-django/" },
    ],
    videos: [
      { title: "Django Full Course", yt: "https://www.youtube.com/watch?v=F5mRW0jo-U4" },
    ],
  },
  {
    id: "ai-ml-python",
    title: "AI/ML Using Python (IIT Madras)",
    duration: "36 hours",
    level: "Beginner → Intermediate",
    rating: 4.7,
    about: "Python, Machine Learning, Data Analysis. Hands-on projects for AI models.",
    docs: [
      { title: "AI/ML Syllabus", link: "https://swayam.gov.in/nd2_cec20_it_iiitd" },
    ],
    videos: [
      { title: "Intro to AI & ML", yt: "https://www.youtube.com/watch?v=aircAruvnKk" },
    ],
  },
  {
    id: "ml-crash",
    title: "Machine Learning Crash Course (Google)",
    duration: "Self-paced",
    level: "Beginner → Intermediate",
    rating: 4.7,
    about: "TensorFlow, Neural Networks, Supervised Learning. Quick practical course.",
    docs: [
      { title: "ML Crash Course Docs", link: "https://developers.google.com/machine-learning/crash-course" },
    ],
    videos: [
      { title: "ML Crash Course", yt: "https://www.youtube.com/watch?v=tPYj3fFJGjk" },
    ],
  },
  {
    id: "data-science-foundations",
    title: "Data Science Foundations (IBM SkillsBuild)",
    duration: "13 hours",
    level: "Beginner → Intermediate",
    rating: 4.8,
    about: "Python, Data Analysis, Data Visualization. Build real datasets projects.",
    docs: [
      { title: "Data Science Docs", link: "https://skillsbuild.org/students/course-catalog/data-science" },
    ],
    videos: [
      { title: "Data Science Crash Course", yt: "https://www.youtube.com/watch?v=ua-CiDNNj30" },
    ],
  },
  {
    id: "ai-educators",
    title: "AI for Educators (IIT Madras)",
    duration: "25 hours",
    level: "Beginner",
    rating: 4.6,
    about: "AI Tools for Education, Classroom Applications. Practical examples included.",
    docs: [
      { title: "AI for Educators Syllabus", link: "https://swayam.gov.in/nd2_cec20_ed_iiitd" },
    ],
    videos: [
      { title: "AI in Education", yt: "https://www.youtube.com/watch?v=Gv9_4yMHFhI" },
    ],
  }
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
               
                  <h4 className="resource-title">📚 Documents</h4>
                  <div className="resource-list">
                    {course.docs.map((doc, idx) => (
                      <p key={idx} className="resource-text">
                        {doc.title}
                      </p>
                    ))}
                  </div>

              

                
                  <h4 className="resource-title">🎥 Videos</h4>
                    {course.videos.map((video, idx) => (
                      <p key={idx} className="resource-text">
                        {video.title}
                      </p>
                    ))}

                
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
