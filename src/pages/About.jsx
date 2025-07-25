import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const images = [
    "/images/attorney-1.jpg",
    "/images/attorney-2.jpg",
    "/images/attorney-3.jpg",
    "/images/attorney-4.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white px-6 py-16 flex flex-col items-center">
      <div className="max-w-6xl w-full space-y-12">

        {/* This is the main container for the top half-view section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-center max-w-5xl mx-auto gap-8 lg:gap-16">

          {/* LEFT HALF: About Text and Heading */}
          {/* We'll make this section take up half the width on medium screens and up */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-6"> {/* Removed text-center here */}
              About Semolekae Legal Attorneys
            </h1>
            <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-lg md:max-w-none"> {/* Removed max-w on md */}
              We are a premier law firm in Botswana offering personalized legal
              solutions with integrity and excellence. Our firm is built on a
              foundation of trust, professionalism, and a deep understanding of
              the legal landscape. We are committed to providing our clients with
              the highest standard of legal representation, ensuring their rights
              are protected and their objectives are met.
            </p>
          </div>

          {/* RIGHT HALF: Images */}
          {/* This section also takes up half the width on medium screens and up */}
          <div className="grid grid-cols-2 gap-4 md:w-1/2">
            {images.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="rounded-2xl overflow-hidden shadow-lg border-4 border-yellow-400 aspect-square"
              >
                <img
                  src={src}
                  alt={`Attorney ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        ---

        {/* 👁 Vision */}
        {/* Adjusted margin top to ensure good spacing from the section above */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-300 mb-2">
            Our Vision
          </h2>
          <p className="text-gray-200 leading-relaxed max-w-3xl">
            To be the most trusted legal advisor in Botswana, empowering our
            clients with justice and representation. We envision a future where
            our clients feel secure in their legal standing, knowing they have
            the best possible guidance.
          </p>
        </div>

        {/* 🎯 Mission */}
        <div className="mt-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-300 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-200 leading-relaxed max-w-3xl">
            We are dedicated to providing quality legal services with
            professionalism, integrity, and care. Our mission is to advocate
            for our clients vigorously, upholding the highest ethical standards
            while achieving favorable outcomes.
          </p>
        </div>

        {/* ⚖️ Values */}
        <div className="mt-8 pb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-300 mb-2">
            Core Values
          </h2>
          <ul className="list-disc pl-5 text-gray-200 space-y-1 max-w-3xl">
            <li>Client-Centered Service: Your needs are our priority.</li>
            <li>Ethical Practice: Upholding integrity in all we do.</li>
            <li>Legal Excellence: Delivering superior legal solutions.</li>
            <li>Continuous Learning: Adapting to evolving legal landscapes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;