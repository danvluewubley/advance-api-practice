"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "@/app/components/Form";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSignup = async (event) => {
    event.preventDefault();
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
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
      setError("Sign up failed. Please check your credentials and try again.");
    }
  };

  return (
    <>
      {error && <div className="error">{error}</div>}
      <Form
        formLabels={["Email", "Password"]}
        onChange={[setEmail, setPassword]}
        values={[email, password]}
        handleSubmit={handleSignup}
        buttonId="signup-button"
      />
    </>
  );
}

export default Signup;
