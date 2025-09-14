// src/context/StudentContext.js
import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    enrolledCourse: null,
    progress: {}, // { courseId: percent }
  });

  const saveStudent = (payload) => {
    // payload: { name, email, enrolledCourse }
    setStudent((s) => ({
      ...s,
      ...payload,
    }));
  };

  const setProgress = (courseId, percent) => {
    setStudent((s) => ({
      ...s,
      progress: { ...s.progress, [courseId]: percent },
    }));
  };

  const clearStudent = () => {
    setStudent({ name: "", email: "", enrolledCourse: null, progress: {} });
  };

  return (
    <StudentContext.Provider value={{ student, saveStudent, setProgress, clearStudent }}>
      {children}
    </StudentContext.Provider>
  );
}
