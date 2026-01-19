import { BrowserRouter, Routes, Route } from "react-router-dom";

import GetStarted from "./components/GetStarted";
import RoleSelect from "./components/RoleSelect";
import StudentLogin from "./components/StudentLogin";
import StudentDashboard from "./components/StudentDashboard";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<GetStarted />} />
        <Route path="/role-select" element={<RoleSelect />} />

        {/* Student */}
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />

        {/* Admin */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
