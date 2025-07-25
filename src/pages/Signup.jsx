import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData
      );
      setMessage(res.data.message || "Signup successful!");
    } catch (err) {
      setMessage(err.response?.data?.error || "Signup failed.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4 py-16 flex items-center justify-center">
      <div className="max-w-md w-full bg-[#111827] rounded-2xl shadow-2xl border border-yellow-500 p-8">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">
          Sign Up to Semolekae Legal
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-yellow-500 bg-[#1f2937] text-yellow-300 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-yellow-500 bg-[#1f2937] text-yellow-300 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-[#0f172a] font-semibold py-3 rounded-lg hover:bg-yellow-300 transition"
          >
            Sign Up
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-yellow-300 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Signup;
