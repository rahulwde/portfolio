import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="max-w-6xl mx-auto px-2 py-12">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-cyan-400 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>

      {/* Education Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Diploma */}
        <motion.div
          className="bg-[#1e293b] border border-cyan-600 rounded-lg p-6 shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3 text-cyan-300">
            <FaGraduationCap className="text-xl" />
            <h3 className="text-xl font-semibold">Diploma in Computer Science</h3>
          </div>
          <p className="text-gray-300">Barisal Polytechnic Institute</p>
          <p className="text-gray-400">Batch: 2020–2021 | Passed: 2024</p>
          <p className="text-gray-400">CGPA: 3.53 out of 4.00</p>
        </motion.div>

        {/* BSc */}
        <motion.div
          className="bg-[#1e293b] border border-cyan-600 rounded-lg p-6 shadow-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3 text-cyan-300">
            <FaUniversity className="text-xl" />
            <h3 className="text-xl font-semibold">B.Sc. in Computer Science</h3>
          </div>
          <p className="text-gray-300">University of Global Village (UGV), Barisal</p>
          <p className="text-gray-400">Currently Studying</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
