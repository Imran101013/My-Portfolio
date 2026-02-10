import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first
      navigate("/");
      // Wait a bit for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950 backdrop-blur-lg shadow-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className=" flex items-center align-center text-lg font-bold">
            <img className="w-[30px]" src="/src/assets\Logo.png" />
            <span className="text-blue-400 pl-2 pr-3">IMRAN</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleNavigation(item.href)}
                  className="text-gray-300 hover:text-green-400 transition-all duration-300 font-medium relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              );
            })}
          </nav>
          <a
            href="https://wa.me/923453923853"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hidden md:flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
              Hire Me...
            </button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 bg-slate-800 rounded-lg shadow-lg">
            {navItems.map((item) => {
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="block w-full text-left py-3 px-4 text-gray-300 hover:text-green-400 hover:bg-slate-700 transition-all duration-300 rounded-lg"
                >
                  {item.name}
                </button>
              );
            })}
            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300">
              Download CV Now
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
