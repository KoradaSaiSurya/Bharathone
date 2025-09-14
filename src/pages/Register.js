import React, { useState } from "react";
import { registerUser } from "../utils/api";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      alert("Registration Successful ✅");
    } catch (err) {
      console.error(err);
      alert("Error registering ❌");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Full Name"
          value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email"
          value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password"
          value={form.password} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
