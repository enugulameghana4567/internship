import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,   // username mapped to email field
          password: password,
          role: "admin",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Login failed");
        return;
      }

      // Store JWT
      localStorage.setItem("token", data.token);

      // Redirect to admin dashboard
      navigate("/admin-dashboard");
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="admin-login-body">
      <div className="box">
        <h2>Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p className="register-text">
          Not registered yet?{" "}
          <Link to="/admin-register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
