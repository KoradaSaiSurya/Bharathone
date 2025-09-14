import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { StudentContext } from "../../context/StudentContext";

export default function CourseDetails() {
  const { state } = useLocation();
  const { course } = state || {};
  const { student, setProgress } = useContext(StudentContext);

  useEffect(() => {
    if (course && !student.progress[course.id]) {
      setProgress(course.id, 0);
    }
    // eslint-disable-next-line
  }, [course?.id]);

  if (!course) {
    return <div className="no-course">No course data found! Please select a course to continue.</div>;
  }

  function markProgress(inc = 10) {
    const current = student.progress[course.id] || 0;
    const next = Math.min(100, current + inc);
    setProgress(course.id, next);
  }



  return (
    <section className="course-details">
      <div className="details-top">
        <div className="course-info">
          <h2>{course.title}</h2>
          <p className="muted">{course.about}</p>
        </div>

        <div className="student-badge">
          <div className="badge-inner">
            <strong>{student.name || "Student"}</strong>
            <span>{student.email || "no-email@example.com"}</span>
            <div className="progress-pill">Progress: {student.progress[course.id] || 0}%</div>
          </div>
        </div>
      </div>

      <div className="detail-grid">
        <div className="left-col">
          <div className="doc-box">
            <h3>📄 Documentation</h3>
            <ul>
              {course.docs.map((d, i) => (
                <li key={i}>
                  <a href={d.link} target="_blank" rel="noreferrer">{d.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="video-box">
            <h3>🎥 Video Lessons</h3>
            {course.videos.map((v, i) => (
              <div className="video-row" key={i}>
                <a href={v.yt} target="_blank" rel="noreferrer">{v.title}</a>
                <button className="mini" onClick={() => window.open(v.yt, "_blank")}>Watch</button>
              </div>
            ))}
          </div>

          <div className="assignment-box">
            <h3>📝 Assignments</h3>
            <p>Complete the mini-projects and submit on GitHub.</p>
            <div className="assignment-buttons">
              <button className="mini" onClick={() => markProgress(20)}>I completed Project 1</button>
              <button className="mini" onClick={() => markProgress(30)}>I completed Project 2</button>
            </div>
          </div>
        </div>

        <aside className="right-col">
          <div className="card-summary">
            <h4>Course Summary</h4>
            <p><b>Duration:</b> {course.duration}</p>
            <p><b>Level:</b> {course.level}</p>
            <p><b>Rating:</b> {course.rating}</p>

            <div className="action-group">
              <button className="btn-primary" onClick={() => markProgress(5)}>Mark Learning +5%</button>
            </div>
          </div>

          <div className="resources">
            <h4>Extra Resources</h4>
            <ul>
              <li><a href="https://developer.mozilla.org" target="_blank" rel="noreferrer">MDN Web Docs</a></li>
              <li><a href="https://freecodecamp.org" target="_blank" rel="noreferrer">freeCodeCamp</a></li>
              <li><a href="https://coursera.org" target="_blank" rel="noreferrer">Coursera (specializations)</a></li>
              <li><a href="https://github.com/facebook/react" target="_blank" rel="noreferrer">React GitHub Repository</a></li>
              
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

          
        


