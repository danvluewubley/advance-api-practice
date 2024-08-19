"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3002/api/auth/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      console.log("successful", response);
    } catch (error) {
      console.error(error);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={(event) => setEmail(event.target.value)}
        data-test-id="email-input"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={(event) => setPassword(event.target.value)}
        data-test-id="password-input"
      />
      <button type="submit" onClick={handleLogin} data-test-id="login-button">
        Login
      </button>
    </div>
  );
}

export default Login;
