import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import { Link } from 'react-scroll'; // smooth scroll

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://www.facebook.com/rahulmondol303"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-mondol/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedinIn />
          </a>
         <a
  href="https://mail.google.com/mail/?view=cm&to=rahulmondol6984@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-cyan-400 transition"
>
  <FaEnvelope />
</a>

          <a
            href="https://wa.me/01319729511"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-wrap justify-center gap-4 text-sm">
          <li>
            <Link
              to="home"
              smooth={true}
               className="cursor-pointer hover:text-cyan-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
               className="cursor-pointer hover:text-cyan-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skill"
              smooth={true}
               className="cursor-pointer hover:text-cyan-400"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="project"
              smooth={true}
               className="cursor-pointer hover:text-cyan-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Bottom Text */}
      <p className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Rahul Mondol. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
