import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl p-8 rounded-2xl border-4 border-yellow-400 bg-[#1e293b] shadow-lg space-y-6">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-2 text-center">
          Contact Us
        </h2>
        <p className="text-gray-300 text-center">
          Feel free to reach out via email or visit our YouTube channel for more info.
        </p>

        {/* ✉️ Contact Info */}
        <div className="mb-4 text-center">
          <p className="text-lg font-semibold text-yellow-400 mb-1">Email:</p>
          <a
            href="mailto:consultations@semolekaelegal.com"
            className="text-yellow-300 hover:underline"
          >
            consultations@semolekaelegal.com
          </a>
        </div>

        {/* 🔗 YouTube Link */}
        <div className="mb-6 text-center">
          <p className="text-lg font-semibold text-yellow-400 mb-1">Watch Us on YouTube:</p>
          <a
            href="https://youtube.com/@kgwaso?si=15aIM-khqp505f8g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Visit Channel
          </a>
        </div>

        {/* 📬 Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-yellow-400 placeholder-yellow-300 text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-yellow-400 placeholder-yellow-300 text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-yellow-400 placeholder-yellow-300 text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-full transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
