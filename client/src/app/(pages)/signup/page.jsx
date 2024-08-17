"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3002/api/auth/signup",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      console.log("successful", response);
    } catch (error) {
      console.error(error);
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
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit" onClick={handleLogin}>
        Signup
      </button>
    </div>
  );
}

export default Signup;
