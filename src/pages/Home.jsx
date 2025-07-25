import React from "react";

const Home = () => (
  <div className="relative w-full h-screen overflow-hidden text-white">
    {/* 🎥 Background Video */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover brightness-75 z-0"
    >
      <source src="/video/law-background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* 🌗 Overlay Content */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 flex items-center justify-center text-center px-6 py-12 z-10">
      {/* ✅ Correct animation class below */}
      <div className="animate-scrollDisappear">
        <h1 className="text-3xl sm:text-4xl md:text-10xl lg:text-6xl font-extrabold leading-snug drop-shadow-lg mb-6">
          Professional Legal Solutions <br />
          for a Better Tomorrow
        </h1>

        <p className="max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 drop-shadow-md leading-relaxed mb-10">
          At <strong>Semolekae Attorneys</strong>, we pride ourselves on offering 
          dedicated and professional legal services to individuals, businesses, and organizations across Botswana.
          Trust, transparency, and excellence are the cornerstones of our practice.
        </p>

        <a
          href="mailto:consultations@semolekaelegal.com?subject=Consultation Request"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
        >
          📩 Book a Consultation
        </a>
      </div>
    </div>
  </div>
);

export default Home;
