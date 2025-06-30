import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import project1 from "../../assets/project1 (1).png"
import project2 from "../../assets/project1 (2).png"
import project3 from "../../assets/project3.png"
 
const projects = [
  {
    id: 1,
    title: "Freelance Task Marketplace",
    description: "A modern task posting platform where clients can post freelance jobs and developers can bid. Features include real-time status updates, secure login, and task filtering.",
    image: project1 ,
    tags: ["React", "Firebase", "MongoDB", "Express.js", "Node.js", "Tailwind", "MERN"],
    demoUrl: "https://freelance-tasks-web.netlify.app/",
    githubUrl: "https://github.com/rahulwde/freelance-task"
  },
  {
    id: 2,
    title: "Event Explorer – Discover Local Events",
    description: "A city-based event discovery app where users can browse upcoming events, book seats, and get location-based suggestions. Includes organizer dashboard and protected routes.",
    image:project2 ,
    tags: ["React", "Firebase Auth", "Tailwind", "Swiper.js", "MERN"],
    demoUrl: "https://event-auth-52e62.web.app/",
    githubUrl: "https://github.com/rahulwde/Event"
  },
  {
    id: 3,
    title: "Athletics Booking Platform",
    description: "A responsive booking platform for athletic competitions. Users can register for events, track schedules, and view their personal bookings. Includes admin event management.",
    image:project3 ,
    tags: ["React", "Firebase", "MongoDB", "Express.js", "Node.js", "Tailwind", "React Router"],
    demoUrl: "https://athletice-auth.web.app/",
    githubUrl: "https://github.com/rahulwde/athletices"
  }
];

const ProjectSection = () => {
  return (
    <section id="project" className="max-w-6xl mx-auto px-4 py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-cyan-400 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      <div className="space-y-16">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <motion.div
              className="md:w-1/2"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl shadow-lg border border-cyan-500"
              />
            </motion.div>

            {/* Content */}
            <div className="md:w-1/2 space-y-4 text-white">
              <h3 className="text-2xl font-semibold text-cyan-300">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm bg-cyan-600 text-white px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-4 flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-cyan-600 transition px-4 py-2 rounded text-white"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition px-4 py-2 rounded text-black font-semibold"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
