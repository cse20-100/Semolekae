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
        <div className="space-y-8">
          <motion.h1
            className="text-3xl md:text-4xl font-bold transition duration-300 hover:text-[#1B74E4]"
            whileHover={{ scale: 1.02 }}
          >
            ABOUT SOMOLEKAE & ASSOCIATES
          </motion.h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-prose text-justify transition duration-300 hover:text-[#0b2b59]/90">
            Somolekae & Associates is a next-generation law firm offering an assemblage of legal services across diverse sectors. 
            We blend legal precision with digital innovation to meet client needs promptly, flexibly, and efficiently whether locally or across borders.
            As a future-focused firm, we embrace technology to enhance accessibility and convenience in service delivery, aligning with the rapid shifts in both industry and society.
            Our strong collaborative network of local and international law firms and advocates gives us the edge to serve a broad and diverse clientele with agility and insight.
            At our core is a single mandate: to ensure our clients are legally empowered and protected—so they can navigate any landscape with confidence.
            Beyond providing legal representation, we invest in our clients’ legal literacy through ongoing training and strategic updates, ensuring they stay informed, prepared, and ahead.
              
            “We get your legal affairs in order” This is not just a tagline; it’s a promise.
          </p>

          <div className="space-y-8">
            {/* Vision */}
            <div>
              <motion.h2
                className="font-semibold text-lg md:text-xl text-[#1B74E4] transition duration-300 hover:text-[#0B2B59]"
                whileHover={{ scale: 1.02 }}
              >
                Our Vision
              </motion.h2>
              <p className="text-gray-700 leading-relaxed max-w-prose text-justify transition duration-300 hover:text-[#0B2B59]">
                To deliver exceptional legal value by integrating deep client respect, unwavering values, 
                and a commitment to growth in every legal service we provide.
              </p>
            </div>

            {/* Mission */}
            <div>
              <motion.h2
                className="font-semibold text-lg md:text-xl text-[#1B74E4] transition duration-300 hover:text-[#0B2B59]"
                whileHover={{ scale: 1.02 }}
              >
                Our Mission
              </motion.h2>
              <p className="text-gray-700 leading-relaxed max-w-prose text-justify transition duration-300 hover:text-[#0B2B59]">
                To offer reliable, cost effective and holistic legal service and representation that is tailored to client’s specific needs and requirements.
              </p>
            </div>

            {/* Core Values */}
            <div>
              <motion.h2
                className="font-semibold text-lg md:text-xl text-[#1B74E4] transition duration-300 hover:text-[#0B2B59]"
                whileHover={{ scale: 1.02 }}
              >
                Core Values
              </motion.h2>
              <ul className="list-disc pl-6 text-gray-700 leading-relaxed max-w-prose space-y-1 text-justify">
                {[
                  "Botho",
                  "Excellence",                
                  "Innovation",
                  "Client – Centricity",
                  "Consistency", 
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
