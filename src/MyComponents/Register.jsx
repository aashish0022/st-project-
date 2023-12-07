import React, { useState } from "react";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = () => {
    if (username === "" || password === "" || confirmPassword === "") {
      setError("All fields are required!");
      return;
    } else {
      setError("");
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    } else {
      setError("");
    }
    navigate("/");
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h1>Register</h1>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Register;
