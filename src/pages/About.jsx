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
    <div className="min-h-screen bg-[#E5EEF5] text-[#0B2B59] flex items-center justify-center px-4 py-12 md:py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT: Text */}
        <div className="space-y-6">
          <motion.h1
            className="text-3xl md:text-4xl font-bold transition duration-300 hover:text-[#1B74E4]"
            whileHover={{ scale: 1.02 }}
          >
            ABOUT SOMOLEKAE & ASSOCIATES
          </motion.h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed transition duration-300 hover:text-[#0b2b59]/90">
            We are a premier law firm in Botswana offering personalized legal
            solutions with integrity and excellence. Our firm is built on a
            foundation of trust, professionalism, and a deep understanding of
            the legal landscape.
          </p>

          <div className="space-y-6">
            <div>
              <motion.h2
                className="font-semibold text-lg md:text-xl text-[#1B74E4] transition duration-300 hover:text-[#0B2B59]"
                whileHover={{ scale: 1.02 }}
              >
                Our Vision
              </motion.h2>
              <p className="text-gray-700 leading-relaxed transition duration-300 hover:text-[#0B2B59]">
                To be the most trusted legal advisor in Botswana, empowering our
                clients with justice and representation.
              </p>
            </div>

            <div>
              <motion.h2
                className="font-semibold text-lg md:text-xl text-[#1B74E4] transition duration-300 hover:text-[#0B2B59]"
                whileHover={{ scale: 1.02 }}
              >
                Our Mission
              </motion.h2>
              <p className="text-gray-700 leading-relaxed transition duration-300 hover:text-[#0B2B59]">
                We provide quality legal services with professionalism,
                integrity, and care. Our mission is to advocate for our clients
                vigorously.
              </p>
            </div>

            <div>
              <motion.h2
                className="font-semibold text-lg md:text-xl text-[#1B74E4] transition duration-300 hover:text-[#0B2B59]"
                whileHover={{ scale: 1.02 }}
              >
                Core Values
              </motion.h2>
              <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-1">
                {[
                  "Client-Centered Service",
                  "Ethical Practice",
                  "Legal Excellence",
                  "Continuous Learning",
                ].map((value, idx) => (
                  <motion.li
                    key={idx}
                    className="transition duration-300 hover:text-[#1B74E4]"
                    whileHover={{ scale: 1.02 }}
                  >
                    {value}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT: Grid Images */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-[#D1D9E6] bg-white aspect-square transform transition duration-300 hover:scale-105 hover:brightness-110 cursor-pointer"
            >
              <img
                src={src}
                alt={`Attorney ${idx + 1}`}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
