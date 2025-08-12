import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaLink } from "react-icons/fa";

const certificates = [
  {
    id: 1,
    title: "Web Development with MERN",
    issuer: "Ostad",
    year: "2023",
    certificateUrl: "#", // Replace with actual certificate link
  },
  {
    id: 2,
    title: "Web Designer",
    issuer: "PeopleNTech",
    year: "2024",
    certificateUrl: "#", // Replace with actual certificate link
  },
  {
    id: 3,
    title: "Web Design and Development",
    issuer: "Programming Hero",
    year: "2024",
    certificateUrl: "#", // Replace with actual certificate link
  },
];

const CertificateSection = () => {
  return (
    <section id="certificates" className="max-w-6xl mx-auto px-2 py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-cyan-400 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certificates.map(({ id, title, issuer, year, certificateUrl }) => (
          <motion.div
            key={id}
            className="bg-[#1e293b] border border-cyan-600 rounded-lg p-6 shadow-md flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: id * 0.2 }}
          >
            <div className="flex items-center gap-3 mb-3 text-cyan-300">
              <FaCertificate className="text-xl" />
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-gray-300">{issuer}</p>
            <p className="text-gray-400">Year: {year}</p>
            {certificateUrl && certificateUrl !== "#" && (
              <a
                href={certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-600 transition font-semibold"
              >
                <FaLink /> View Certificate
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;
