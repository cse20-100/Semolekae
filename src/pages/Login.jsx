import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your login logic here (e.g. axios call)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white px-6 py-16 flex flex-col items-center">
      <div className="max-w-lg w-full bg-[#17202a] rounded-2xl p-10 shadow-lg border-4 border-yellow-400">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-8 text-center">
          Login to Semolekae Legal
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg border border-yellow-400 bg-[#1c2736] text-white placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg border border-yellow-400 bg-[#1c2736] text-white placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-[#0f172a] font-bold py-3 rounded-lg hover:bg-yellow-300 transition"
          >
            Login
          </button>
        </form>

        {message && (
          <p className="mt-6 text-yellow-300 font-semibold text-center">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
