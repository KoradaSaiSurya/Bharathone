import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../../context/StudentContext";

function Extra() {
  const [user, setUser] = useState({ name: "", email: "" });
  const { setStudentData } = useContext(StudentContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email) {
      setStudentData(user);
      // course data ni pass cheyyadam
      
      navigate("/courseDetails", {
        state: {
          course: {
            id: "mern101",
            title: "Full Stack MERN Course",
            about: "Learn React, Node, Express, MongoDB with real projects.",
            duration: "3 months",
            level: "Beginner to Advanced",
            rating: "⭐ 4.8",
            docs: [
              { title: "React Official Docs", link: "https://react.dev" },
              { title: "Express Docs", link: "https://expressjs.com/" },
              { title: "Mongoose Docs", link: "https://mongoosejs.com/docs/" },
              { title: "JavaScript MDN", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
            ],
            videos: [
              { title: "React Tutorial", yt: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
              { title: "Node.js Tutorial", yt: "https://www.youtube.com/watch?v=Oe421EPjeBE" },
              { title: "MongoDB Crash Course", yt: "https://www.youtube.com/watch?v=lkIFF4maKMU" }
            ]
          }
        }
      });
    }
  };

  return (
    <div className="extra-container">
      <div className="form-section">
        <h2>🚀 Enter Details to Explore Courses</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <button type="submit">Explore Now</button>
        </form>
      </div>
    </div>
  );
}

export default Extra;
