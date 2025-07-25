// src/pages/Home.jsx
import React from 'react';

const Home = () => (
  <div className="relative w-full h-screen overflow-hidden">
    {/* 🎥 Background Video */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src="/video/law-background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* 🌗 Overlay with Text and Button */}
    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 z-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-md">
        Welcome to <span className="text-emerald-400">Semolekae Attorneys</span>
      </h1>

      <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">
        Your trusted legal partner in Botswana. Excellence in legal services, delivered with integrity and commitment.
      </p>

      {/* 📩 Book a Consultation */}
      <a
        href="mailto:consultations@semolekaelegal.com?subject=Consultation Request"
        className="mt-8 inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-7 rounded-full shadow-lg transition duration-300"
      >
        Book a Consultation
      </a>
    </div>
  </div>
);

export default Home;
