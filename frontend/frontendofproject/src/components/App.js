import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentLogin from "./StudentLogin";
import StudentDashboard from "./StudentDashboard";
import StudentProfile from "./StudentProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/StudentProfile" element={<StudentProfile />} />
      </Routes>
    </Router>
  );
}

export default App;