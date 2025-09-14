import React, { useState } from "react";
import { loginUser } from "../utils/api";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(form);
      alert("Login Successful ✅");
    } catch (err) {
      console.error(err);
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email"
          value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password"
          value={form.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
