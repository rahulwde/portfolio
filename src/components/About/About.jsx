import React from 'react';
import aboutImg from '../../assets/portfolio.jpg'; 

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center  justify-around px-4 py-12 bg-[#0f172a] text-gray-200"
    >
      {/* Left Side Image */}
      <div className="mb-6 md:mb-0">
        <img
          src={aboutImg}
          alt="Rahul Mondol"
          className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg border-4 border-cyan-500"
        />
      </div>

      {/* Right Side Text */}
      <div className="max-w-xl text-center md:text-left space-y-4">
        <h2 className="text-3xl font-bold text-cyan-400">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am <span className="font-semibold text-white">Rahul Mondol</span>, a passionate{" "}
          <span className="text-cyan-300 font-medium">Frontend</span> and{" "}
          <span className="text-cyan-300 font-medium">MERN Stack Developer</span> from Bangladesh.
          My dream is to become a skilled <span className="text-cyan-300 font-medium">Software Engineer</span>.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Despite being  physically disabled , I have never let that limit my potential. Through hard work,
          consistency, and dedication, I have reached where I am today and continue to grow every day.
        </p>
        <p className="text-gray-400 leading-relaxed">
          I love building interactive and accessible web applications. I enjoy solving problems, learning new technologies,
          and turning ideas into real-world projects. Outside of coding, I’m passionate about technology, creativity, and always seeking self-improvement.
        </p>
      </div>
    </div>
  );
};

export default About;
