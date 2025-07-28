import React from "react";

const Contact = () => {
  return (
    <div className="h-[70vh] bg-gradient-to-b from-[#e5eef5] to-white text-[#0B2B59] px-6 py-20">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold">OUR YOUTUBE CHANNEL</h2>
          <p className="text-gray-700">
            Reach out via our customer service mail or subscribe to our channel.
          </p>

          {/* Email */}
          <div>
            <p className="text-base font-semibold text-[#1B74E4] mb-1">Customer Service:</p>
            <a
              href="mailto:consultations@semolekaelegal.com"
              className="text-[#0B2B59] hover:underline text-lg"
            >
              info@semolekae.com
            </a>
          </div>

          {/* YouTube */}
          <div>
            <p className="text-base font-semibold text-[#1B74E4] mb-2">YouTube:</p>
            <a
              href="https://youtube.com/@kgwaso?si=15aIM-khqp505f8g"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1B74E4] hover:bg-[#0B2B59] text-white font-medium py-2 px-6 rounded-full transition"
            >
              Visit Channel
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded border border-[#D1D9E6] focus:outline-none focus:ring-2 focus:ring-[#1B74E4] text-gray-800 placeholder-gray-400 bg-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded border border-[#D1D9E6] focus:outline-none focus:ring-2 focus:ring-[#1B74E4] text-gray-800 placeholder-gray-400 bg-white"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="px-4 py-3 rounded border border-[#D1D9E6] focus:outline-none focus:ring-2 focus:ring-[#1B74E4] text-gray-800 placeholder-gray-400 bg-white"
          ></textarea>
          <button
            type="submit"
            className="bg-[#1B74E4] hover:bg-[#0B2B59] text-white font-semibold py-3 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
