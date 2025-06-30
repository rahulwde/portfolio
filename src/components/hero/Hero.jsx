import React, { useEffect } from 'react';
import portfolio from "../../assets/portfolio.jpg";
import { motion, useAnimation } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      borderColor: ["#ff0000", "#ffa500", "#00ff00", "#0000ff", "#ff0000"],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <div className="flex z-10 flex-col-reverse md:flex-row justify-around items-center bg-[#0f172a] px-4 py-12 min-h-[80vh]">
      {/* Left Content */}
      <div className="text-center md:text-left space-y-6">
        <h2 className="text-4xl font-bold text-cyan-400">Hi, I'm Rahul Mondol</h2>
        <p className="text-2xl text-amber-300">A Passionate Frontend & MERN Developer</p>
        <p className="text-gray-300 max-w-md">
          I build responsive, accessible and user-friendly web applications using React and the MERN stack.
          I love solving real-world problems through code and continuously improve my skills.
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4 flex-wrap">
          <a
            href="https://github.com/rahulwde"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-800 hover:bg-cyan-600 text-white transition"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="#contact"
            className="inline-block px-6 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition shadow-md"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 flex justify-center">
        <motion.div
          animate={controls}
          className="p-1 rounded-full border-[4px] w-fit"
          style={{
            borderStyle: "solid",
          }}
        >
          <img
            src={portfolio}
            alt="profile"
            className="w-[300px] h-[300px] object-cover rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
