// NavBar.jsx
import { useState, useEffect } from "react";
import GooeyNav from "./GooeyNav";
import logo from "../../assets/loger.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skill", href: "#skill" },
    { label: "Project", href: "#project" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sectionIds = items.map((item) => item.href.replace("#", ""));

    const handleScroll = () => {
      let current = "home";
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0f172a] text-white px-4  lg:fixed top-0  z-50 w-full shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-28">
          <img src={logo} alt="Logo" className="w-full" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <GooeyNav items={items} activeItem={activeSection} />
        </div>

        {/* Resume Button */}
        <div className="md:block hidden">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-full font-semibold shadow hover:bg-cyan-400 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="block md:hidden mt-4">
          <GooeyNav items={items} activeItem={activeSection} />
          <div className="mt-4 flex justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-full font-semibold shadow hover:bg-cyan-400 transition"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
