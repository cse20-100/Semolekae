// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Feel free to reach out via email or visit our YouTube channel for more info.
        </p>

        {/* ✉️ Contact Info */}
        <div className="mb-6">
          <p className="text-lg font-medium">Email:</p>
          <a
            href="mailto:consultations@semolekaelegal.com"
            className="text-blue-600 underline"
          >
            consultations@semolekaelegal.com
          </a>
        </div>

        {/* 🔗 YouTube Link */}
        <div className="mb-8">
          <p className="text-lg font-medium">Watch Us on YouTube:</p>
          <a
            href="https://youtube.com/@kgwaso?si=15aIM-khqp505f8g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Visit Channel
          </a>
        </div>

        {/* 📬 Optional: Contact Form (UI Only) */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
