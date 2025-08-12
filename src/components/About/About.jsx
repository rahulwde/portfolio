import React from 'react';
import aboutImg from '../../assets/portfolio.jpg'; 
import Typewriter from "typewriter-effect";
import styled from "styled-components";


const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center  justify-around px-4 py-12 bg-[#0f172a] text-gray-200"
    >
      {/* Left Side Image */}
    <StyledWrapper>
      <div className="parent">
        <div className="card">
          <img src={aboutImg} alt="Rahul Mondol" className="profile-image" />
        </div>
      </div>
    </StyledWrapper>
  
      {/* Right Side Text */}
      <div className="max-w-xl text-center md:text-left space-y-4">
        <h2 className="text-3xl font-bold text-cyan-400">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am <span className="font-semibold text-white">Rahul Mondol</span>, a passionate{" "}
           <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
      <Typewriter
        options={{
          strings: [
            "Frontend Developer",
            "MERN Stack Developer",
            "Fullstack Developer",
          ],
          autoStart: true,
          loop: true,
          delay: 75, // typing speed
          deleteSpeed: 50, // delete speed
        }}
      />
    </h1>
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
const StyledWrapper = styled.div`
  .parent {
    width: 300px;
    padding: 20px;
    perspective: 1000px; /* Enables 3D effect */
  }

  .card {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    overflow: hidden;
    transform-style: preserve-3d;
    transition: transform 0.5s ease-in-out;
    box-shadow: rgba(142, 142, 142, 0.3) 0px 30px 30px -10px;
  }

  .card:hover {
    transform: rotate3d(0.5, 1, 0, 20deg) scale(1.05);
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
export default About;
