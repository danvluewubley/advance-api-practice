"use client";

import React, { useState } from "react";
import axios from "axios";
import Form from "@/app/components/Form";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3002/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      console.log("successful", response);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <>
      {error && <div className="error">{error}</div>}
      <Form
        formLabels={["Email", "Password"]}
        onChange={[setEmail, setPassword]}
        values={[email, password]}
        handleSubmit={handleLogin}
        buttonId="login-button"
      />
    </>
  );
}

export default Login;