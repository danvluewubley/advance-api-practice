"use client";

import React from "react";

function Form({ formLabels, onChange, values, handleSubmit, buttonId }) {
  return (
    <form onSubmit={handleSubmit}>
      {formLabels?.map((label, index) => (
        <div key={index}>
          <label htmlFor={label}>{label}</label>
          <input
            type={label.toLowerCase() === "password" ? "password" : "text"}
            id={label}
            name={label}
            value={values[index] || ""}
            onChange={(event) => onChange[index](event.target.value)}
            data-test-id={`${label.toLowerCase()}-input`}
            autoComplete="off"
          />
        </div>
      ))}
      <button type="submit" data-test-id={buttonId}>
        Submit
      </button>
    </form>
  );
}

export default Form;