import React from "react";

const Home = () => (
  <div className="relative w-full h-[80vh] md:h-screen overflow-hidden rounded-2xl">
    {/* 🎥 Background Video */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover brightness-75 transform scale-90 rounded-2xl"
    >
      <source src="/video/law-background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default Home;
