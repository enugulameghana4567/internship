import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StudentLogin.css";
import ChatBot from "./ChatBot";

function StudentLogin() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!mobile || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: mobile,
          password: password,
          role: "student",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Login failed");
        return;
      }

      // ✅ Navigate to dashboard after successful login
      navigate("/student-dashboard");
    } catch (error) {
      alert("Backend server not running");
    }
  };

  return (
    <div className="login-body">
      <div className="login-box">
        <h2>Student Login</h2>

        <input
          type="text"
          placeholder="Email / Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p className="register-text">
          Don’t have an account?{" "}
          <Link to="/student-login">Contact Admin</Link>
        </p>
      </div>

      {/* Chatbot at bottom-right */}
      <ChatBot />
    </div>
  );
}

export default StudentLogin;
