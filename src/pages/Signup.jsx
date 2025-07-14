// src/pages/Signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", whatsapp: "", email: "",
    password: "", confirmPassword: ""
  });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (form.password !== form.confirmPassword)
      return alert("Passwords do not match!");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ ...form, likedRecipes: [] });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 space-y-4 bg-white rounded shadow">
      {["firstName","lastName","whatsapp","email","password","confirmPassword"].map(name => (
        <input
          key={name}
          type={name.includes("password") ? "password" : name === "email" ? "email" : "text"}
          name={name}
          placeholder={name.replace(/([A-Z])/g, " $1")}
          value={form[name]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      ))}
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Sign Up</button>
    </form>
  );
}

