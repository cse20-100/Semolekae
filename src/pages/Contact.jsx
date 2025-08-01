import React, { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="relative bg-gradient-to-b from-[#e5eef5] to-white text-[#0B2B59] px-6 py-20">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold">OUR YOUTUBE CHANNEL</h2>
          <p className="text-gray-700">
            Reach out via our customer service mail or subscribe to our channel.
          </p>

          <div>
            <p className="text-base font-semibold text-[#1B74E4] mb-1">Customer Service:</p>
            <a
              href="mailto:consultations@semolekaelegal.com"
              className="text-[#0B2B59] hover:underline text-lg"
            >
              info@semolekae.com
            </a>
          </div>

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

          {/* Address Block */}
          <div className="pt-8">
            <h3 className="text-2xl font-bold mb-3">Contact Details</h3>
            <p>The Gaborone Chambers<br />Plot 205, Independence Avenue<br />Avlan Wired, Office 004<br />Gaborone, Botswana</p>
            <p className="mt-2">Postal: P. O. Box AE 551, AEH Gaborone</p>
            <p className="mt-2">Phone: <a href="tel:+26774908846" className="text-[#1B74E4] hover:underline">+267 74 908 846</a></p>
            <p>Fax: +267 316 4162</p>
            <p>Email: <a href="mailto:info@semolekae.com" className="text-[#1B74E4] hover:underline">info@semolekae.com</a></p>
            <p>Website: <a href="https://www.somolekae.com" className="text-[#1B74E4] hover:underline" target="_blank">www.somolekae.com</a></p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded border border-[#D1D9E6] focus:outline-none focus:ring-2 focus:ring-[#1B74E4] text-gray-800 placeholder-gray-400 bg-white"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded border border-[#D1D9E6] focus:outline-none focus:ring-2 focus:ring-[#1B74E4] text-gray-800 placeholder-gray-400 bg-white"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="px-4 py-3 rounded border border-[#D1D9E6] focus:outline-none focus:ring-2 focus:ring-[#1B74E4] text-gray-800 placeholder-gray-400 bg-white"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#1B74E4] hover:bg-[#0B2B59] text-white font-semibold py-3 rounded transition"
          >
            Send Message
          </button>

          {success && (
            <div className="mt-4 p-3 rounded bg-green-100 text-green-800 border border-green-300">
              ✅ Message sent successfully!
            </div>
          )}
        </form>
      </div>

      {/* Embedded Google Map */}
      <div className="mt-16 w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.171469593402!2d25.90820707597369!3d-24.656831978071934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebb5b3911fded2b%3A0xe4d4f82e167f697e!2sAvlan%20Wired%20Gaborone%20Chambers!5e0!3m2!1sen!2sbw!4v1722511440000!5m2!1sen!2sbw"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/26774908846"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.88 11.88 0 0 0 12.04 0C5.4 0 .14 5.25.14 11.88c0 2.09.54 4.13 1.57 5.93L0 24l6.31-1.64a11.83 11.83 0 0 0 5.7 1.45h.01c6.64 0 11.89-5.25 11.89-11.88 0-3.18-1.24-6.17-3.48-8.41zM12.04 21.8a9.82 9.82 0 0 1-4.99-1.34l-.36-.21-3.74.97.99-3.65-.24-.37a9.82 9.82 0 0 1-1.52-5.31c0-5.41 4.4-9.81 9.81-9.81 2.62 0 5.08 1.02 6.93 2.87a9.77 9.77 0 0 1 2.87 6.93c0 5.41-4.4 9.81-9.81 9.81zm5.67-7.36c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15s-.77.96-.95 1.15c-.17.2-.35.22-.64.07-.3-.15-1.27-.47-2.42-1.49-.89-.8-1.48-1.78-1.66-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.22-.24-.6-.49-.52-.67-.52h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.47 1.69.6.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.11-.27-.18-.57-.32z"/>
        </svg>
        Chat on WhatsApp
      </a>
    </div>
  );
};

export default Contact;
