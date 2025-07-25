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
    <div className="h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white px-6 flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Text */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-yellow-400">
            About Semolekae Legal Attorneys
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            We are a premier law firm in Botswana offering personalized legal
            solutions with integrity and excellence. Our firm is built on a
            foundation of trust, professionalism, and a deep understanding of
            the legal landscape.
          </p>
          <div className="space-y-4">
            <div>
              <h2 className="text-yellow-300 font-semibold text-xl">Our Vision</h2>
              <p className="text-gray-200 text-sm">
                To be the most trusted legal advisor in Botswana, empowering our
                clients with justice and representation.
              </p>
            </div>
            <div>
              <h2 className="text-yellow-300 font-semibold text-xl">Our Mission</h2>
              <p className="text-gray-200 text-sm">
                We provide quality legal services with professionalism,
                integrity, and care. Our mission is to advocate for our clients
                vigorously.
              </p>
            </div>
            <div>
              <h2 className="text-yellow-300 font-semibold text-xl">Core Values</h2>
              <ul className="list-disc pl-5 text-gray-200 text-sm space-y-1">
                <li>Client-Centered Service</li>
                <li>Ethical Practice</li>
                <li>Legal Excellence</li>
                <li>Continuous Learning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT: Grid Images */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-xl overflow-hidden border-4 border-yellow-400 shadow-md aspect-square"
            >
              <img
                src={src}
                alt={`Attorney ${idx + 1}`}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
