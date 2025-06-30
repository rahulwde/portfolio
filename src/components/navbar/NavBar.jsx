import { useState } from "react";
import GooeyNav from "./GooeyNav";
import logo from "../../assets/loger.png";
import { useEffect } from "react";


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");


  const items = [
   
    { label: "Home", href: "#" },
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
    <div className="bg-[#0f172a] text-white px-4 py-2 max-w-6xl mx-auto sticky top-0 z-50">
      {/* Top bar with logo and toggle */}
      <div className="flex   justify-between">
        {/* Logo */}
        <div className="w-32 -mt-8">
          <img src={logo} alt="Logo" className="w-full" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block" style={{  position: "relative" }}>
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/* Contact / CTA */}
        <div className="hidden md:block">
          <button className="bg-white text-black px-4 py-1 rounded-full font-semibold">
            Resume
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav with Gooey */}
      {menuOpen && (
        <div className="block md:hidden mt-4" style={{ height: "300px", position: "relative" }}>
          <GooeyNav
            items={items}
            particleCount={10}
            particleDistances={[60, 8]}
            particleR={70}
            initialActiveIndex={0}
            animationTime={500}
            timeVariance={200}
            colors={[1, 2, 3, 4, 1]}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
