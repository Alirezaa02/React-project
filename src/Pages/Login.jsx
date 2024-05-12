import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Access navigate function for redirection

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter all fields.");
      return;
    }

    try {
      const response = await fetch("http://4.237.58.241:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        // Handle login failure
        const data = await response.json();
        throw new Error(data.message || "An error occurred.");
      }

      // Store JWT token in local storage upon successful login
      const data = await response.json();
      localStorage.setItem("jwtToken", data.token);

      // Redirect to VolcanoList page after successful login
      navigate("/VolcanoList");

    } catch (err) {
      setError(err.message || "Failed to login.");
    }
  };

  return (
    <div className="Login">
      <div className="auth-form-container">
        <div className="icon1">
          <img src="img/images.png" alt="Icon" />
        </div>
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="auth-form">
          {error && <p className="error">{error}</p>}
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
