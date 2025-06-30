import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "React.js", level: 92, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "Mongoose", level: 75, category: "backend" },
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "Firebase", level: 85, category: "tools" }
];

const categories = ["all", "frontend", "backend", "tools"];

const Skill = () => {
  const [activeCategories, setActiveCategories] = useState("all");

  const filteredCategory = skills.filter(
    skill => activeCategories === "all" || skill.category === activeCategories
  );

  return (
   <div  >
     <div id='skill' className='max-w-6xl mx-auto px-4 bg-[#0f172a]'>
      
      {/* Header */}
      <motion.div 
        className="text-center my-18"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">My Skills</h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Here are the technologies and tools I use to build fast, accessible, and modern web applications. I specialize in both frontend and backend development using the MERN stack.
        </p>
      </motion.div>

      {/* Category Buttons */}
      <motion.div 
        className='flex flex-wrap justify-center mb-12 gap-4'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {categories.map((category, idx) => (
          <motion.button
            key={idx}
        
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveCategories(category)}
            className={`px-4 py-2 rounded-full border transition duration-300 capitalize
              ${activeCategories === category
                ? "bg-cyan-500 text-black border-cyan-500"
                : "text-cyan-300 border-cyan-500 hover:bg-cyan-500 hover:text-black"}
            `}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {filteredCategory.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="w-full max-w-xs bg-[#1e293b] border border-cyan-500 text-white rounded-xl shadow-md p-6 transform hover:scale-105 transition duration-300 hover:shadow-cyan-400/30"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-cyan-400 h-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
            <p className="mt-2 text-sm text-gray-400">Proficiency: {skill.level}%</p>
          </motion.div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default Skill;
